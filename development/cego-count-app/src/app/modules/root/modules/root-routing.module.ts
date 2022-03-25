import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GAMES_ROUTING_ROOT_PATH } from '../../game/modules/routing/token/games-routing-root-path.token';

enum AppRoutingPath {
  Home = '',
  Games = 'games',
}

const routes: Routes = [
  {
    path: AppRoutingPath.Home,
    pathMatch: 'full',
    redirectTo: AppRoutingPath.Games,
  },
  {
    path: AppRoutingPath.Games,
    loadChildren: () =>
      import('../../game/game.module').then((m) => m.GameModule),
  },
  {
    path: '**',
    redirectTo: AppRoutingPath.Games,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    {
      provide: GAMES_ROUTING_ROOT_PATH,
      useValue: AppRoutingPath.Games,
    },
  ],
  exports: [RouterModule],
})
export class RootRoutingModule {}
