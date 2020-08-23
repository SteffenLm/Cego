import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/games'
  },
  {
    path: '',
    component: MainComponent,
    children: [
      // {
      //     path: 'profile',
      //     loadChildren: () => import('./features/profile/profile.module').then(mod => mod.ProfileModule)
      // },
      {
        path: 'games',
        loadChildren: () => import('./features/games/games.module').then(mod => mod.GamesModule)
      },
      // {
      //     path: '**',
      //     redirectTo: 'profile'
      // }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
