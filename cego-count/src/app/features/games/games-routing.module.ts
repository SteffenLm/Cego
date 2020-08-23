// angular imports
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { GamesOverviewComponent } from './games-overview/games-overview.component';
import { GameAddComponent } from './game-add/game-add.component';

const routes: Routes = [
    { path: '', component: GamesOverviewComponent },
    { path: 'add', component: GameAddComponent },
    // { path: ':id', component: GameDetailComponent, resolve: { game: GameResolver } },
    { path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class GamesRoutingModule { }
