import { NgModule } from '@angular/core';
import { RootRoutingModule } from './modules/root-routing.module';
import { RootBrowserModule } from './modules/root-browser.module';
import { RootStoreModule } from './modules/root-store.module';
import { RootComponent } from './components/root/root.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { RootMaterialModule } from './modules/root-material.module';

@NgModule({
  declarations: [RootComponent, ToolbarComponent],
  imports: [
    RootBrowserModule,
    RootMaterialModule,
    RootRoutingModule,
    RootStoreModule,
  ],
  bootstrap: [RootComponent],
})
export class RootModule {}
