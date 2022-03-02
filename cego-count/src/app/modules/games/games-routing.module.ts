// angular imports
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { GameAddComponent } from './components/game-add/game-add.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { GamesOverviewComponent } from './components/games-overview/games-overview.component';

const routes: Routes = [
  { path: '', component: GamesOverviewComponent },
  { path: 'add', component: GameAddComponent },
  { path: ':id', component: GameDetailComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class GamesRoutingModule {}
