// angular imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// own modules
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { MainModule } from './main/main.module';

// own components
import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';

// own services
import { AppAuthGuard } from './app-auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    MainModule
  ],
  providers: [AppAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
