import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

import { JwtHelperService } from '@auth0/angular-jwt';

import { Api } from '../api.model';
import { ServerLogin, ServerResponse } from './login.model';

@Injectable()
export class LoginService extends Api {

  private jwtHelper = new JwtHelperService();
  private readonly JWT = 'jwt';
  private token: string = null;
  private username: string;

  constructor(http: HttpClient, private router: Router, private snackBar: MatSnackBar) {
    super(http);
  }

  public getUsername(): string { return this.username; }

  public isLoggedIn(): boolean {
    if (this.token === null) { // login check did never run
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
      this.setUsername(this.token);
      return true;
    }
  }

  private navigateToLoginPage(): void {
    localStorage.clear();
    this.token = null;
    this.router.navigate(['/login']);
  }

  public requestToken(credentials: ServerLogin): void {
    this.postRequest<ServerLogin, ServerResponse>('login', credentials).subscribe(
      (response) => {
        this.setUsername(response.jwt);
        localStorage.setItem(this.JWT, response.jwt);
        this.router.navigate(['']);
      },
      () => { this.snackBar.open('Login fehlgeschlagen'.toUpperCase()); }
    );
  }

  public getToken(): string { return this.token; }

  public logout(error: boolean = false): void {
    this.navigateToLoginPage();
    if (error) { this.snackBar.open('Erneute Anmeldung erforderlich!'); }
  }

  private setUsername(token: string) {
    this.username = this.jwtHelper.decodeToken(token).username;
  }

}
