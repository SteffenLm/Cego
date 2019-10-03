import { CommonModule } from '@angular/common';
import { NgModule, LOCALE_ID } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main.component';
import { MenuComponent } from './menu/menu.component';
import { MenuEntryComponent } from './menu/menu-entry/menu-entry.component';

import { MainService } from './main.service';
import { MainRoutingModule } from './main-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './jwt.interceptor';
import { UserService } from './user.service';
import { MAT_AUTOCOMPLETE_DEFAULT_OPTIONS } from '@angular/material/autocomplete';
import { AuthenticationInterceptor } from './authentication.interceptor';
import { LoadingInterceptor } from './loading.interceptor';

@NgModule({
    declarations: [
        HeaderComponent,
        MainComponent,
        MenuComponent,
        MenuEntryComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        LayoutModule,
        MatButtonModule,
        MatIconModule,
        MatProgressBarModule,
        MatSidenavModule,
        MatToolbarModule,
        MainRoutingModule
    ],
    providers: [
        MainService,
        UserService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoadingInterceptor,
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthenticationInterceptor,
            multi: true,
        },
        {
            provide: MAT_AUTOCOMPLETE_DEFAULT_OPTIONS,
            useValue: {
                autoActiveFirstOption: true
            },
            multi: false
        }
    ]
})
export class MainModule { }
