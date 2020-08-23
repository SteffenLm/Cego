import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list/';

import { GamesRoutingModule } from './games-routing.module';
import { GamesOverviewComponent } from './games-overview/games-overview.component';
import { GameAddComponent } from './game-add/game-add.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { AddRoundComponent } from './game-detail/add-round/add-round.component';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { RoundListComponent } from './game-detail/round-list/round-list.component';

@NgModule({
  declarations: [GamesOverviewComponent, GameAddComponent, GameDetailComponent, AddRoundComponent, RoundListComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    MatListModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    GamesRoutingModule
  ]
})
export class GamesModule { }
