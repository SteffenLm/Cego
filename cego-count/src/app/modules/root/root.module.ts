import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from 'src/environments/environment';
import { RootComponent } from './components/root/root.component';
import { RootMaterialModule } from './root.material.module';
import { RootRoutingModule } from './root.routing.module';

@NgModule({
  declarations: [RootComponent],
  imports: [
    RootMaterialModule,
    RootRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  bootstrap: [RootComponent],
})
export class RootModule {}
