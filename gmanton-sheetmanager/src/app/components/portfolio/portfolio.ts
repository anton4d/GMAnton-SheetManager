import { Component } from '@angular/core';
import { Header } from './header/header';
import { Homepage } from './homepage/homepage';
@Component({
  selector: 'app-portfolio',
  imports: [Header,Homepage],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {

}
