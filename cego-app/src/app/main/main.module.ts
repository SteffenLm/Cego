import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main.component';
import { MenuComponent } from './menu/menu.component';
import { MenuEntryComponent } from './menu/menu-entry/menu-entry.component';

import { MainService } from './main.service';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
    declarations: [
        HeaderComponent,
        MainComponent,
        MenuComponent,
        MenuEntryComponent,
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule,
        MainRoutingModule
    ],
    providers: [MainService]
})
export class MainModule { }
