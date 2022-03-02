import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const rootRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/games',
  },
  {
    path: 'games',
    loadChildren: () =>
      import('../games/games.module').then((m) => m.GamesModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(rootRoutes)],
  exports: [RouterModule],
})
export class RootRoutingModule {}
