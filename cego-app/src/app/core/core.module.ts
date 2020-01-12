import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppAuthGuard } from './services/app-auth-guard.service';
import { LoginService } from './services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [
    AppAuthGuard,
    LoginService,
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } }
  ]
})
export class CoreModule { }
