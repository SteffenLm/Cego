import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { EffectsModule } from '@ngrx/effects';
import { GameDialogEffects } from './effects/game-dialog.effects';
import { GameDialogService } from './services/game-dialog.service';

@NgModule({
  imports: [MatDialogModule, EffectsModule.forFeature([GameDialogEffects])],
  providers: [GameDialogService],
})
export class GameDialogModule {}
