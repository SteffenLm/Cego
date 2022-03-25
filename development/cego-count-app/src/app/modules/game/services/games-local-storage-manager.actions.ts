import { createAction, props } from '@ngrx/store';
import { GameState } from '../modules/state/root/game-state.model';

const localStorageManagerInitialized = createAction(
  '[Game Module | Games Local Storage Manager] Initialized'
);

export const GamesLocalStorageManagerActions = {
  localStorageManagerInitialized,
};
