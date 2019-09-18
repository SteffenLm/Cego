// angular imports
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { GamesOverviewComponent } from './games-overview/games-overview.component';
import { GameAddComponent } from './game-add/game-add.component';
import { GamesResolver } from './games-overview/games-resolver';

const routes: Routes = [
    { path: '', component: GamesOverviewComponent, resolve: { games: GamesResolver } },
    { path: 'add', component: GameAddComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [GamesResolver]
})
export class GameRoutingModule { }
