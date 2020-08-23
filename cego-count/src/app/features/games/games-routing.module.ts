// angular imports
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { GamesOverviewComponent } from './games-overview/games-overview.component';

const routes: Routes = [
    {
        path: '', component: GamesOverviewComponent
        // , resolve: { games: GamesResolver }
    },
    // { path: 'add', component: GameAddComponent, resolve: { players: PlayersResolver } },
    // { path: ':id', component: GameDetailComponent, resolve: { game: GameResolver } },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class GamesRoutingModule { }
