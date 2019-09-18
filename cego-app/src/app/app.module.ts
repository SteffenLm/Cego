// angular imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// own modules
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

// own components
import { AppComponent } from './app.component';

// own services
import { AppAuthGuard } from './app-auth-guard.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [AppAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
