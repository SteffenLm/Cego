import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

const gameMaterialModules = [
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule,
];

@NgModule({
  declarations: [],
  imports: [...gameMaterialModules],
  exports: [...gameMaterialModules],
})
export class GameMaterialModule {}
