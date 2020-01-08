import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

import { GameRoutingModule } from './game-routing.module';
import { GameService } from './game.service';

import { GamesOverviewComponent } from './games-overview/games-overview.component';
import { GameAddComponent } from './game-add/game-add.component';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GameDetailComponent } from './game-detail/game-detail.component';

@NgModule({
  declarations: [GamesOverviewComponent, GameAddComponent, GameDetailComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    GameRoutingModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [GameService]
})
export class GameModule { }
