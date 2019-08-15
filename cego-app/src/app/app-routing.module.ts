import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLoginComponent } from './app-login/app-login.component';
import { MainComponent } from './main/main.component';
import { PlayersComponent } from './players/players.component';


const routes: Routes = [
  { path: 'login', component: AppLoginComponent},
  { path: '', component: MainComponent, pathMatch: 'full', children: [
    {
      path: '', component: PlayersComponent
    }
  ]
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
