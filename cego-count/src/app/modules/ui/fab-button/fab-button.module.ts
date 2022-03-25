import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabDirective } from './fab-directive/fab.directive';

@NgModule({
  declarations: [FabDirective],
  exports: [FabDirective],
})
export class FabButtonModule {}
