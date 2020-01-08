import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        CoreModule,
        MainRoutingModule
    ],
    providers: [ ]
})
export class MainModule { }
