import { Injectable } from '@angular/core';
import { ServerLogin, ServerResponse } from './login.model';
import { Api } from '../core/api.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService extends Api {

  private jwtHelper = new JwtHelperService();
  private readonly JWT = 'jwt';
  private token: string = null;

  constructor(http: HttpClient, private router: Router) {
    super(http);
  }

  public isLoggedIn(): boolean {
    if (this.token === null) { // never run login check
      this.token = localStorage.getItem(this.JWT);
      if (this.token === null) { // no token in local storage
        this.navigateToLoginPage();
        return false;
      } else {
        return this.checkToken();
      }
    } else { // token in localstorage
      return this.checkToken();
    }
  }

  private checkToken(): boolean {
    if (this.jwtHelper.isTokenExpired(this.token)) { // check if token is expired
      this.navigateToLoginPage();
      return false;
    } else {
      return true;
    }
  }

  private navigateToLoginPage(): void {
    localStorage.clear();
    this.token = null;
    this.router.navigate(['/login']);
  }

  public requestToken(credentials: ServerLogin): void {
    this.postRequest<ServerLogin, ServerResponse>('login.php', credentials).subscribe(
      (response) => {
        localStorage.setItem(this.JWT, response.jwt);
        this.router.navigate(['']);
      },
      () => {

      }
    );
  }

  public logout(): void {
    this.navigateToLoginPage();
  }
}
