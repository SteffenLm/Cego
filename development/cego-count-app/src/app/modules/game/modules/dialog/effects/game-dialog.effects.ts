import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import { Dialog } from '../model/dialog.enum';
import { RouterNotificationActions } from '../../routing/effects/routing-notification.actions';
import { GameDialogService } from '../services/game-dialog.service';
import { CreateGameActions } from '../../create-game/components/create-game/create-game.actions';

@Injectable()
export class GameDialogEffects {
  public openCreateGameDialog$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RouterNotificationActions.navigatedToGamesAdd),
        tap(() => this.gameDialogService.openDialog(Dialog.CreateGame))
      ),
    { dispatch: false }
  );

  public closeCreateGameDialog$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          CreateGameActions.createClicked,
          CreateGameActions.abortClicked,
          CreateGameActions.backdropClicked,
          CreateGameActions.escapeKeyPressed
        ),
        tap(() => this.gameDialogService.closeDialog(Dialog.CreateGame))
      ),
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly gameDialogService: GameDialogService
  ) {}
}
