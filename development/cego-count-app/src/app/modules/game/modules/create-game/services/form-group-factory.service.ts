import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GameFormControl } from '../../../model/game-form-control.enum';
import { uniquePlayerNames } from '../util/unique-player-names.validator';

@Injectable()
export class GameFormGroupFactoryService {
  constructor(private readonly formBuilder: FormBuilder) {}

  createFormGroup(): FormGroup {
    return this.formBuilder.group(
      {
        [GameFormControl.name]: this.formBuilder.control(''),
        [GameFormControl.players]: this.getPlayersFormArray(),
      },
      {
        validators: [uniquePlayerNames],
      }
    );
  }

  private getPlayersFormArray(): FormArray {
    return this.formBuilder.array([
      this.formBuilder.control('', [Validators.required]),
      this.formBuilder.control('', [Validators.required]),
      this.formBuilder.control('', [Validators.required]),
      this.formBuilder.control('', [Validators.required]),
    ]);
  }
}
