import { createAction, props } from '@ngrx/store';
import { GameState } from './game-state.model';

const storageEffectsInitialized = createAction(
  '[Game Module | Game State Storage] Storage Effects Initialized'
);

const loadedGameStateFromLocalStorage = createAction(
  '[Game Module | Game State Storage] Loaded Game State from LocalStorage',
  props<{ gameState: GameState }>()
);

const noGameStateFoundInLocalStorage = createAction(
  '[Game Module | Game State Storage] No Game State Found in LocalStorage'
);

export const GameStateStorageActions = {
  loadedGameStateFromLocalStorage,
  noGameStateFoundInLocalStorage,
  storageEffectsInitialized,
};
