import { Component } from '@angular/core';
import { LucideAngularModule, Github,Linkedin } from 'lucide-angular';
@Component({
  selector: 'portfolio-footer',
  imports: [LucideAngularModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
    readonly githubIcon = Github;
    readonly linkedinIcon = Linkedin

}
