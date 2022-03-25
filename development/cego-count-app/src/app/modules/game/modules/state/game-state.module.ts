import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { gameSliceKey, reducers } from './root/game-state.model';
import { GameStateStorageEffects } from './root/game-state.storage.effects';

@NgModule({
  imports: [
    MatDialogModule,
    StoreModule.forFeature(gameSliceKey, reducers),
    EffectsModule.forFeature([GameStateStorageEffects]),
  ],
})
export class GameStateModule {}
