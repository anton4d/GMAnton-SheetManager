import { Component } from '@angular/core';

@Component({
  selector: 'portfolio-homepage',
  imports: [],
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.css','../portfolio.css',]
})
export class Homepage {
  scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
