import { Component } from '@angular/core';
import { LucideAngularModule, Github,Linkedin } from 'lucide-angular';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'portfolio-header',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
    readonly githubIcon = Github;
    readonly linkedinIcon = Linkedin

}
