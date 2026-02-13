import { Component } from '@angular/core';
import { LucideAngularModule, Github,Linkedin } from 'lucide-angular';

@Component({
  selector: 'portfolio-header',
  imports: [LucideAngularModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
    readonly githubIcon = Github;
    readonly linkedinIcon = Linkedin

}
