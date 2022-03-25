import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FabDirective } from './fab-directive/fab.directive';
import { FabIconButtonComponent } from './fab-icon-button/fab-icon-button.component';

@NgModule({
  declarations: [FabDirective, FabIconButtonComponent],
  imports: [MatIconModule, MatButtonModule],
  exports: [FabDirective, FabIconButtonComponent],
})
export class FabButtonModule {}
