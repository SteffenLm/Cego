import { Injectable } from '@angular/core';

import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { LoginService } from '../core/login/login.service';
import { retry, catchError } from 'rxjs/operators';
import { MainService } from './main.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService, private mainService: MainService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        this.mainService.endLoading();
        if (error.status === 401) {
          this.loginService.logout(true);
        }
        return throwError(error);
      })
    );
  }
}
