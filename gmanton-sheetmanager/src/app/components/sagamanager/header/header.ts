import { Component } from '@angular/core';
import { Auth } from '../Services/Auth/auth';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  constructor(public auth: Auth) {}
}
