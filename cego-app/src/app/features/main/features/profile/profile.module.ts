import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileOverviewComponent } from './profile-overview/profile-overview.component';
import { ProfileRoutingModule } from './profile-routing.module';



@NgModule({
  declarations: [ProfileOverviewComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
