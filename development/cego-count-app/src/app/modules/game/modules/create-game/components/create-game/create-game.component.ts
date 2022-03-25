import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { GameFormControl } from 'src/app/modules/game/model/game-form-control.enum';
import { GameFormGroupFactoryService } from '../../services/form-group-factory.service';
import { GameFormAPIService } from '../../services/game-form-api.service';
import { CreateGameActions } from './create-game.actions';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    GameFormAPIService,
    GameFormGroupFactoryService,
    {
      provide: FormGroup,
      useFactory: (factory: GameFormGroupFactoryService) =>
        factory.createFormGroup(),
      deps: [GameFormGroupFactoryService],
    },
  ],
})
export class CreateGameComponent {
  public disableCreateButton$ = this.gameFormAPIService.disableCreateButton();

  public showPlayerNamesNotUniqueError$ =
    this.gameFormAPIService.showPlayerNamesNotUniqueError();

  public formGroup: FormGroup = this.gameFormAPIService.getFormGroup();
  public playersControl = this.formGroup.controls[
    GameFormControl.players
  ] as FormArray;

  constructor(
    private readonly gameFormAPIService: GameFormAPIService,
    private readonly store: Store
  ) {}

  public onAbort(): void {
    this.store.dispatch(CreateGameActions.abortClicked());
  }

  public onCreate(): void {
    const game = this.gameFormAPIService.getValue();
    this.store.dispatch(CreateGameActions.createClicked({ game }));
  }
}
