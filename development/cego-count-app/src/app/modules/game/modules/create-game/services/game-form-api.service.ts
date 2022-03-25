import { Injectable } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { GameFormControl } from '../../../model/game-form-control.enum';
import { Game } from '../../../model/game.model';
import { CreateGameFormError } from '../model/create-game-form-error.enum';

@Injectable()
export class GameFormAPIService {
  constructor(private readonly gameFormGroup: FormGroup) {}

  public getFormGroup(): FormGroup {
    return this.gameFormGroup;
  }

  public getValue(): Game {
    return this.getFormGroup().getRawValue();
  }

  public disableCreateButton(): Observable<boolean> {
    return this.getValidityAndValidityChanges().pipe(map((valid) => !valid));
  }

  public getValidityAndValidityChanges(): Observable<boolean> {
    return this.gameFormGroup.statusChanges.pipe(
      startWith(this.gameFormGroup.valid),
      map(() => this.gameFormGroup.valid)
    );
  }

  public showPlayerNamesNotUniqueError(): Observable<boolean> {
    return this.getValidityAndValidityChanges().pipe(
      map(
        () => this.playerNamesAreNotUnique() && this.eachPlayerNameHasBeenSet()
      )
    );
  }

  private playerNamesAreNotUnique(): boolean {
    return this.gameFormGroup.hasError(
      CreateGameFormError.PlayerNamesNotUnique
    );
  }

  private eachPlayerNameHasBeenSet(): boolean {
    return this.getPlayerNamesFormArray().controls.every(
      (control) => control.dirty
    );
  }

  private getPlayerNamesFormArray(): FormArray {
    return this.gameFormGroup.controls[GameFormControl.players] as FormArray;
  }
}
