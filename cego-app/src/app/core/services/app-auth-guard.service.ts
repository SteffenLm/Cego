import { ActivatedRouteSnapshot } from '@angular/router';
import { CanActivate } from '@angular/router';
import { CanActivateChild } from '@angular/router';
import { Injectable } from '@angular/core';
import { RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { LoginService } from './login.service';

@Injectable()
export class AppAuthGuard implements CanActivate, CanActivateChild {

    constructor(private loginService: LoginService) { }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.loginService.isLoggedIn();
    }

    public canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.canActivate(route, state);
    }
}
