// angular imports
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

// own components
import { LoginComponent } from './core/login/login.component';
import { MainComponent } from './main/main.component';
import { PlayersComponent } from './players/players.component';

// own services
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
