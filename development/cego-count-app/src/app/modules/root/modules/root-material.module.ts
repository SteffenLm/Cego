import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

const rootMaterialModules = [MatButtonModule, MatIconModule, MatToolbarModule];

@NgModule({
  imports: rootMaterialModules,
  exports: rootMaterialModules,
})
export class RootMaterialModule {}
