import {
  ValidatorFn,
  ValidationErrors,
  FormGroup,
  FormArray,
} from '@angular/forms';
import { GameFormControl } from '../../../model/game-form-control.enum';
import { CreateGameFormError } from '../model/create-game-form-error.enum';

export const uniquePlayerNames: ValidatorFn = (
  gameFormGroup
): ValidationErrors | null => {
  const players = (gameFormGroup as FormGroup).controls[
    GameFormControl.players
  ] as FormArray;
  if (new Set(players.value).size !== 4) {
    return {
      [CreateGameFormError.PlayerNamesNotUnique]: true,
    };
  } else {
    return null;
  }
};
