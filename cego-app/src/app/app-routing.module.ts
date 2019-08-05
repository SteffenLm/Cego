import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLoginComponent } from './app-login/app-login.component';


const routes: Routes = [
  { path: '', component: AppLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
