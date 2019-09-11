import { Injectable } from '@angular/core';
import { ServerLogin, ServerResponse } from './login.model';
import { Api } from '../api.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class LoginService extends Api {

  private jwtHelper = new JwtHelperService();
  private readonly JWT = 'jwt';
  private token: string = null;

  constructor(http: HttpClient, private router: Router, private snackBar: MatSnackBar) {
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
    this.postRequest<ServerLogin, ServerResponse>('login', credentials).subscribe(
      (response) => {
        localStorage.setItem(this.JWT, response.jwt);
        this.router.navigate(['']);
      },
      () => {
        this.snackBar.open('Login fehlgeschlagen'.toUpperCase(), '', {
          horizontalPosition: 'center',
          duration: 3000
        });
      }
    );
  }

  public getToken(): string {
    return this.token;
  }

  public logout(): void {
    this.navigateToLoginPage();
  }
}
