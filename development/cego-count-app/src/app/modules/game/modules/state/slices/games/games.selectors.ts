import { createSelector } from '@ngrx/store';
import { Game } from 'src/app/modules/game/model/game.model';
import { selectGameState } from '../../root/game-state.selector';
import { selectAll } from './games.entity-adapter';
import { GamesFeatureState } from './games.model';

export const selectGamesSlice = createSelector(
  selectGameState,
  (gameState): GamesFeatureState => gameState.games
);

export const selectAllGames = createSelector(
  selectGamesSlice,
  (gamesSlice): Game[] => selectAll(gamesSlice)
);
