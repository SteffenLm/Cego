import { Component, OnInit, AfterViewInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { map, startWith, tap } from 'rxjs/operators';
import { ServerPlayer } from './game-add.model';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/core/login/login.service';

@Component({
  selector: 'app-game-add',
  templateUrl: './game-add.component.html',
  styleUrls: ['./game-add.component.scss'],
  animations: [
    trigger('item', [
      transition(':enter', [
        style({ transform: 'scale(0.3)', opacity: 0 }),  // initial
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
          style({ transform: 'scale(1)', opacity: 1 }))  // final
      ])
    ])]
})
export class GameAddComponent implements OnInit {

  public createGameForm: FormGroup;
  public isCreatable = false;
  private allPlayers: ServerPlayer[]; // contains all players on platform
  private filteredPlayers: ServerPlayer[]; // contains all players except logged in user and already selected
  public temporaryFilteredPlayers: ServerPlayer[]; // containes all filtered except matching given input

  // form controls needed to subscribe later on changes
  private fcPlayer1: FormControl;
  private fcPlayer2: FormControl;
  private fcPlayer3: FormControl;
  private playerFormControls: FormControl[] = []; // array of all input controlls for looping through



  constructor(private route: ActivatedRoute, private loginService: LoginService, private formBuilder: FormBuilder) {
    this.fcPlayer1 = this.createPlayerFromControl();
    this.playerFormControls.push(this.fcPlayer1);
    this.fcPlayer2 = this.createPlayerFromControl();
    this.playerFormControls.push(this.fcPlayer2);
    this.fcPlayer3 = this.createPlayerFromControl();
    this.playerFormControls.push(this.fcPlayer3);


    this.createGameForm = this.formBuilder.group({
      player1: this.fcPlayer1,
      player2: this.fcPlayer2,
      player3: this.fcPlayer3,
      creator: new FormControl({
        value: this.loginService.getUsername(),
        disabled: true
      }, Validators.required),
    });
    this.allPlayers = this.route.snapshot.data.players;
    this.allPlayers = this.allPlayers.filter(v => v.username !== this.loginService.getUsername());
    this.filteredPlayers = this.allPlayers;

  }

  public ngOnInit(): void {
    this.createGameForm.valueChanges.subscribe(() => {
      this.filteredPlayers = this.allPlayers.filter((player) => {
        return (player.username !== this.fcPlayer1.value.username
          && player.username !== this.fcPlayer2.value.username
          && player.username !== this.fcPlayer3.value.username
          && player.username !== this.loginService.getUsername());
      });
    });
    this.playerFormControls.forEach((formControl) => {
      formControl.valueChanges.pipe(
        startWith(''),
        map((value) => {
          this.temporaryFilteredPlayers = this.filteredPlayers.filter((player) => {
            return player.username.toLowerCase().includes(value);
          });
        }),
      ).subscribe();
    });
  }

  public displayPlayer(selectedPlayer: ServerPlayer): string {
    return selectedPlayer.username;
  }

  public checkCreatable(): void {
    this.isCreatable = this.formControlisTouchedAndValid(this.fcPlayer1) &&
      this.formControlisTouchedAndValid(this.fcPlayer2) &&
      this.formControlisTouchedAndValid(this.fcPlayer3);
  }

  private createPlayerFromControl(): FormControl {
    return new FormControl({ value: '' }, [Validators.required, Validators.minLength(3)]);
  }

  private formControlisTouchedAndValid(formControl: FormControl): boolean {
    return formControl.touched && formControl.dirty && formControl.valid;
  }
}
