import { Component } from '@angular/core';
import { LucideAngularModule, Github,Linkedin } from 'lucide-angular';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'SagaManager-footer',
  imports: [LucideAngularModule,RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
    readonly githubIcon = Github;
    readonly linkedinIcon = Linkedin

}
