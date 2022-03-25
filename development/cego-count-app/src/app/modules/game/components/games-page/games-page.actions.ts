import { createAction } from '@ngrx/store';

const addGameClicked = createAction(
  '[Game Module | Games Page] Add Game Clicked'
);

export const GamesPageActions = {
  addGameClicked,
};
