import { Injectable } from '@angular/core';
import { ServerLogin, ServerResponse } from './login.model';
import { Api } from '../core/api.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService extends Api {

  constructor(http: HttpClient, private router: Router) {
    super(http);
  }

  public requestToken(credentials: ServerLogin): void {
    this.postRequest<ServerLogin, ServerResponse>('login.php', credentials).subscribe(
      (response) => {
        localStorage.setItem('jwt', response.jwt);
      },
      () => {

      }
    );
  }
}
