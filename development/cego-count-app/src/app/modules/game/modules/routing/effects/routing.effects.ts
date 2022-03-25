import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import { ToolbarActions } from 'src/app/modules/root/components/toolbar/toolbar.actions';
import { GamesPageActions } from '../../../components/games-page/games-page.actions';
import { CreateGameActions } from '../../create-game/components/create-game/create-game.actions';
import { GameRoutingService } from '../services/game-routing.service';

@Injectable()
export class RoutingEffects {
  public navigateToGamesPage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          ToolbarActions.homeClicked,
          CreateGameActions.createClicked,
          CreateGameActions.abortClicked,
          CreateGameActions.backdropClicked,
          CreateGameActions.escapeKeyPressed
        ),
        tap(() => this.gameRoutingService.navigateToGamesHome())
      ),
    { dispatch: false }
  );

  public navigateToGamesAdd$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(GamesPageActions.addGameClicked),
        tap(() => this.gameRoutingService.navigateToGamesAdd())
      ),
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly gameRoutingService: GameRoutingService
  ) {}
}
