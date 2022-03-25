import { createAction, props } from '@ngrx/store';
import { Game } from 'src/app/modules/game/model/game.model';

const abortClicked = createAction(
  '[Game Module | Create Game Component] Abort Clicked'
);

const createClicked = createAction(
  '[Game Module | Create Game Component] Create Clicked',
  props<{ game: Game }>()
);

const backdropClicked = createAction(
  '[Game Module | Create Game Component] Backdrop Clicked'
);

const escapeKeyPressed = createAction(
  '[Game Module | Create Game Component] Escape Key Pressed'
);

export const CreateGameActions = {
  abortClicked,
  createClicked,
  backdropClicked,
  escapeKeyPressed,
};
