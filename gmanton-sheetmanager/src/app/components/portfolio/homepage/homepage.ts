import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Star, Bug } from 'lucide-angular';
import { Subject, takeUntil } from 'rxjs';
import { environment } from '@env';

interface Repo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  topics: string[];
  stargazers_count: number;
  open_issues_count: number;
  updated_at: string;
  languages: string[];
}

interface RepoResponse {
  success: boolean;
  result: Repo[];
}

@Component({
  selector: 'portfolio-homepage',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.css', '../portfolio.css']
})
export class Homepage implements OnInit, OnDestroy {
  readonly Star = Star;
  readonly Bug = Bug;
  repos: Repo[] = [];
  error = false;
  loading = false;

  private cancel$ = new Subject<void>();

  constructor(private http: HttpClient, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.loadRepos();
  }

  ngOnDestroy() {
    this.cancel$.next();
    this.cancel$.complete();
  }

  loadRepos() {
    this.cancel$.next();
    this.error = false;
    this.repos = [];
    this.loading = true;
    this.cd.detectChanges();

    this.http.get<RepoResponse>(`${environment.apiUrl}/V1/PortFolio/repos`)
      .pipe(takeUntil(this.cancel$))
      .subscribe({
        next: (res) => {
          this.repos = res.result;
          this.loading = false;
          this.cd.detectChanges();
        },
        error: () => {
          this.error = true;
          this.loading = false;
          this.cd.detectChanges();
        }
      });
  }

  scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}