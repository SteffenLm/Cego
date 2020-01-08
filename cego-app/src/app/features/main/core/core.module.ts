import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from '../main.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuEntryComponent } from './components/menu/menu-entry/menu-entry.component';
import { MAT_AUTOCOMPLETE_DEFAULT_OPTIONS } from '@angular/material/autocomplete';
import { AuthenticationInterceptor } from './interceptors/authentication.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '@auth0/angular-jwt';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { UserService } from './services/user.service';
import { MainService } from './services/main.service';



@NgModule({
  declarations: [HeaderComponent,
    MainComponent,
    MenuComponent,
    MenuEntryComponent],
  imports: [
    CommonModule
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
export class CoreModule { }
