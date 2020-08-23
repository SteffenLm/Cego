import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list/';

import { GamesRoutingModule } from './games-routing.module';
import { GamesOverviewComponent } from './games-overview/games-overview.component';

@NgModule({
  declarations: [GamesOverviewComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    GamesRoutingModule,
  ]
})
export class GamesModule { }
