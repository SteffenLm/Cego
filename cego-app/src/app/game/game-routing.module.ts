// angular imports
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { GamesOverviewComponent } from './games-overview/games-overview.component';

const routes: Routes = [
    { path: '', component: GamesOverviewComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class GameRoutingModule { }
