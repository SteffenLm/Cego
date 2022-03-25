import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, tap, withLatestFrom } from 'rxjs';
import { GamesLocalStorageManagerService } from '../../../services/games-local-storage-manager.service';
import { CreateGameActions } from '../../create-game/components/create-game/create-game.actions';
import { selectGameState } from './game-state.selector';
import { GameStateStorageActions } from './game-state.storage.actions';

@Injectable()
export class GameStateStorageEffects {
  persistToLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CreateGameActions.createClicked),
        withLatestFrom(this.store.select(selectGameState)),
        map(([, state]) => state),
        tap((state) => this.gamesLocalStorageManagerService.setGameState(state))
      ),
    { dispatch: false }
  );

  loadedFromLocalStorage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CreateGameActions.createClicked),
      map(() => {
        debugger;
        const gameState = this.gamesLocalStorageManagerService.getGameState();
        if (gameState) {
          return GameStateStorageActions.loadedGameStateFromLocalStorage({
            gameState,
          });
        } else {
          return GameStateStorageActions.noGameStateFoundInLocalStorage();
        }
      })
    )
  );
  constructor(
    private readonly actions$: Actions,
    private readonly store: Store,
    private readonly gamesLocalStorageManagerService: GamesLocalStorageManagerService
  ) {
    this.store.dispatch(GameStateStorageActions.storageEffectsInitialized());
  }
}
