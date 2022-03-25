import { Inject, Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import {
  routerNavigatedAction,
  routerNavigationAction,
} from '@ngrx/router-store';
import { filter, map, pipe, switchMap, tap } from 'rxjs';
import { GamesPageActions } from '../../../components/games-page/games-page.actions';
import { GameRoutePath } from '../model/game-route-path.enum';
import { GameRoutingService } from '../services/game-routing.service';
import { GAMES_ROUTING_ROOT_PATH } from '../token/games-routing-root-path.token';
import { RouterNotificationActions } from './routing-notification.actions';

@Injectable()
export class RoutingNotificationEffects {
  public navigatedToGamesHome = createEffect(() =>
    this.actions$.pipe(
      this.onlyNavigatedToGamesFeatures(),
      filter(({ payload }) => payload.event.url === `/${this.rootPath}`),
      map(() => RouterNotificationActions.navigatedToGamesPage())
    )
  );

  public navigatedToGamesAdd = createEffect(() =>
    this.actions$.pipe(
      this.onlyNavigatedToGamesFeatures(),
      filter(
        ({ payload }) =>
          payload.event.url === `/${this.rootPath}/${GameRoutePath.AddGame}`
      ),
      map(() => RouterNotificationActions.navigatedToGamesAdd())
    )
  );

  constructor(
    @Inject(GAMES_ROUTING_ROOT_PATH) private readonly rootPath: string,
    private readonly actions$: Actions,
    private readonly gameRoutingService: GameRoutingService
  ) {}

  private onlyNavigatedToGamesFeatures() {
    return pipe(
      ofType(routerNavigatedAction),
      filter(({ payload }) => payload.event.url.startsWith(`/${this.rootPath}`))
    );
  }
}
