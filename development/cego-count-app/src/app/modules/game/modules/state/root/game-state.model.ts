import { ActionReducerMap } from '@ngrx/store';
import {
  gamesFeatureKey,
  GamesFeatureState,
} from '../slices/games/games.model';
import { GamesFeature } from '../slices/games/games.reducer';

export const gameSliceKey = 'game';

export interface GameState {
  [gamesFeatureKey]: GamesFeatureState;
}

export const reducers: ActionReducerMap<GameState> = {
  [gamesFeatureKey]: GamesFeature.reducer,
};
