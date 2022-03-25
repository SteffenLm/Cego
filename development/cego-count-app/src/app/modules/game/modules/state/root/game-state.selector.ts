import { createFeatureSelector } from '@ngrx/store';
import { gameSliceKey, GameState } from './game-state.model';

export const selectGameState = createFeatureSelector<GameState>(gameSliceKey);
