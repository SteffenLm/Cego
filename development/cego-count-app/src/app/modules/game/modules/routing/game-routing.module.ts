import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { GamesPageComponent } from '../../components/games-page/games-page.component';
import { RoutingNotificationEffects } from './effects/routing-notification.effects';
import { RoutingEffects } from './effects/routing.effects';
import { GameRoutePath } from './model/game-route-path.enum';
import { GameRoutingService } from './services/game-routing.service';

const routes: Routes = [
  { path: GameRoutePath.Home, component: GamesPageComponent },
  { path: GameRoutePath.AddGame, component: GamesPageComponent },
  { path: '**', redirectTo: GameRoutePath.Home },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    EffectsModule.forFeature([RoutingEffects, RoutingNotificationEffects]),
  ],
  exports: [RouterModule],
  providers: [GameRoutingService],
})
export class GameRoutingModule {}
