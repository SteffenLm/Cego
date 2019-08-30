import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { GameRoutingModule } from './game-routing.module';
import { GameService } from './game.service';

import { GamesOverviewComponent } from './games-overview/games-overview.component';

@NgModule({
  declarations: [GamesOverviewComponent],
  imports: [
    CommonModule,
    GameRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ],
  providers: [GameService]
})
export class GameModule { }
