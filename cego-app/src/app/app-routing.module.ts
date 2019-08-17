import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { PlayersComponent } from './players/players.component';
import { AppAuthGuard } from './app-auth-guard.service';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', component: MainComponent, canActivate: [AppAuthGuard], children: [
    { path: 'players', component: PlayersComponent },
    { path: 'games', component: PlayersComponent },
    { path: 'profile', component: PlayersComponent },
    { path: '', pathMatch: 'full', redirectTo: '/players'},
  ]},
  { path: '', pathMatch: 'full', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
