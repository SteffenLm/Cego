import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';

import { GameRoutingModule } from './game-routing.module';
import { GameService } from './shared/game.service';

import { GamesOverviewComponent } from './games-overview/games-overview.component';
import { GameAddComponent } from './game-add/game-add.component';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { AddRoundDialogComponent } from './game-detail/add-round-dialog/add-round-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [GamesOverviewComponent, GameAddComponent, GameDetailComponent, AddRoundDialogComponent],
  entryComponents: [AddRoundDialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GameRoutingModule,
    FlexLayoutModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatToolbarModule
  ],
  providers: [GameService]
})
export class GameModule { }
