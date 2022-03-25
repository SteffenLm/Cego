import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Store } from '@ngrx/store';
import { GameState } from '../modules/state/root/game-state.model';
import { GamesLocalStorageManagerActions } from './games-local-storage-manager.actions';
import { LocalStorageManager } from './local-storage-manager';

export const LOCAL_STORAGE_KEY = new InjectionToken('LOCAL_STORAGE_KEY');
export const STORAGE = new InjectionToken('STORAGE');

@Injectable()
export class GamesLocalStorageManagerService extends LocalStorageManager<GameState> {
  constructor(
    @Inject(LOCAL_STORAGE_KEY) key: string,
    @Inject(STORAGE) storage: Storage,
    private readonly store: Store
  ) {
    super(key, storage);
    this.store.dispatch(
      GamesLocalStorageManagerActions.localStorageManagerInitialized()
    );
  }

  public getGameState(): GameState {
    return this.getValue() as GameState;
  }

  public setGameState(gameState: GameState) {
    this.setValueAndPersist(gameState);
  }
}
