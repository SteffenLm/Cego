import { createReducer, on } from '@ngrx/store';
import { GamesLocalStorageManagerActions } from 'src/app/modules/game/services/games-local-storage-manager.actions';
import { v4 } from 'uuid';
import { CreateGameActions } from '../../../create-game/components/create-game/create-game.actions';
import { GameStateStorageActions } from '../../root/game-state.storage.actions';
import { gamesEntityAdapter } from './games.entity-adapter';
import { GamesFeatureState } from './games.model';

const initalState: GamesFeatureState = gamesEntityAdapter.getInitialState();

const reducer = createReducer(
  initalState,
  on(
    CreateGameActions.createClicked,
    (state, { game }): GamesFeatureState => ({
      ...gamesEntityAdapter.addOne({ ...game, id: v4() }, state),
    })
  ),
  on(
    GameStateStorageActions.loadedGameStateFromLocalStorage,
    (state, { gameState }): GamesFeatureState => {
      return {
        ...gameState.games,
      };
    }
  )
);

export const GamesFeature = {
  initalState,
  reducer,
};
