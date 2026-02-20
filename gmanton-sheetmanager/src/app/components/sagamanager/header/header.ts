import { Component } from '@angular/core';
import { Auth } from '../Services/Auth/auth';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'SagaManager-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
     constructor(public auth: Auth) {}

    onLogout(event: Event) {
      event.preventDefault();
      this.auth.logout();
    }

}
