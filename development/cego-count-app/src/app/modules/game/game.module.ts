import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameRoutingModule } from './modules/routing/game-routing.module';
import { GameMaterialModule } from './modules/game-material.module';
import { GamesPageComponent } from './components/games-page/games-page.component';
import { FabButtonModule } from '../ui/fab-button/fab-button.module';
import { GameStateModule } from './modules/state/game-state.module';
import { ReactiveFormsModule } from '@angular/forms';
import { GameDialogModule } from './modules/dialog/game-dialog.module';
import { CreateGameModule } from './modules/create-game/create-game.module';
import {
  GamesLocalStorageManagerService,
  LOCAL_STORAGE_KEY,
  STORAGE,
} from './services/games-local-storage-manager.service';

@NgModule({
  declarations: [GameListComponent, GamesPageComponent],
  imports: [
    CommonModule,
    FabButtonModule,
    ReactiveFormsModule,
    GameMaterialModule,
    GameRoutingModule,
    GameStateModule,
    GameDialogModule,
    CreateGameModule,
  ],
  providers: [
    GamesLocalStorageManagerService,
    {
      provide: LOCAL_STORAGE_KEY,
      useValue: 'test',
    },
    {
      provide: STORAGE,
      useValue: localStorage,
    },
  ],
})
export class GameModule {}
