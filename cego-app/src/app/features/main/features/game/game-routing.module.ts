// angular imports
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { GamesOverviewComponent } from './games-overview/games-overview.component';
import { GameAddComponent } from './game-add/game-add.component';
import { GamesResolver } from './shared/resolvers/games-resolver';
import { PlayersResolver } from './shared/resolvers/players-resolver';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GameResolver } from './shared/resolvers/game-resolver';

const routes: Routes = [
    { path: '', component: GamesOverviewComponent, resolve: { games: GamesResolver } },
    { path: 'add', component: GameAddComponent, resolve: { players: PlayersResolver } },
    { path: ':id', component: GameDetailComponent, resolve: { game: GameResolver } },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [GamesResolver, PlayersResolver, GameResolver]
})
export class GameRoutingModule { }