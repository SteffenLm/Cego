import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

const rootMaterialUiModules = [
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
];

@NgModule({
  imports: [rootMaterialUiModules],
  exports: [rootMaterialUiModules],
})
export class RootMaterialModule {}
