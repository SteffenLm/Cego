import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameRoutingModule } from './game-routing.module';
import { GamesOverviewComponent } from './games-overview/games-overview.component';

@NgModule({
  declarations: [GamesOverviewComponent],
  imports: [
    CommonModule,
    GameRoutingModule
  ],
  providers: []
})
export class GameModule { }
