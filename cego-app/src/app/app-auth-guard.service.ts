// angular imports
import { ActivatedRouteSnapshot } from '@angular/router';
import { CanActivate } from '@angular/router';
import { CanActivateChild } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';

// thirdparty imports
import { Observable } from 'rxjs';

// own services
import { LoginService } from './core/login/login.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AppAuthGuard implements CanActivate, CanActivateChild {

    constructor(private loginService: LoginService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.loginService.isLoggedIn();
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.canActivate(route, state);
    }
}
