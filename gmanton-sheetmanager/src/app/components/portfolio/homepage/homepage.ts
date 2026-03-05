import { Component, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Star, Bug } from 'lucide-angular';
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
  styleUrls: ['./homepage.css', '../portfolio.css'],
})
export class Homepage implements OnInit {
  readonly Star = Star;
  readonly Bug = Bug;

  repos = signal<Repo[]>([]);
  error = signal(false);
  loading = signal(false);

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {
    this.loadRepos();
  }

  loadRepos(): void {
    this.repos.set([]);
    this.error.set(false);
    this.loading.set(true);

    this.http.get<RepoResponse>(`${environment.apiUrl}/V1/PortFolio/repos`)
      .subscribe({
        next: (res) => {
          if (!res.success) {
            this.error.set(true);
            this.loading.set(false);
            return;
          }
          this.repos.set(res.result);
          this.loading.set(false);
        },
        error: () => {
          this.error.set(true);
          this.loading.set(false);
        },
      });
  }

  scrollToSection(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}