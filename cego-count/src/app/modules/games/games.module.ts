import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GameAddComponent } from './components/game-add/game-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddRoundComponent } from './components/game-detail/add-round/add-round.component';
import { DeleteRoundComponent } from './components/game-detail/delete-round/delete-round.component';
import { EditRoundComponent } from './components/game-detail/edit-round/edit-round.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { RoundListComponent } from './components/game-detail/round-list/round-list.component';
import { GamesOverviewComponent } from './components/games-overview/games-overview.component';
import { GamesMaterialModule } from './games.material.module';

@NgModule({
  declarations: [
    GamesOverviewComponent,
    GameAddComponent,
    GameDetailComponent,
    AddRoundComponent,
    RoundListComponent,
    EditRoundComponent,
    DeleteRoundComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GamesMaterialModule,
    GamesRoutingModule,
  ],
})
export class GamesModule {}
