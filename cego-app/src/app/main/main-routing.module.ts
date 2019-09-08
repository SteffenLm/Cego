// angular imports
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'profile',
                loadChildren: () => import('./../profile/profile.module').then(mod => mod.ProfileModule)
            },
            {
                path: 'games',
                loadChildren: () => import('./../game/game.module').then(mod => mod.GameModule)
            },
            {
                path: '',
                redirectTo: 'profile'
            },
            {
                path: '**',
                redirectTo: 'profile'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }
