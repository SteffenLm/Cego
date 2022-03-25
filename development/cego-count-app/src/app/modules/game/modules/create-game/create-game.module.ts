import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateGameComponent } from './components/create-game/create-game.component';
import { CreateGameMaterialModule } from './create-game-material.module';

@NgModule({
  declarations: [CreateGameComponent],
  imports: [CommonModule, CreateGameMaterialModule, ReactiveFormsModule],
})
export class CreateGameModule {}
