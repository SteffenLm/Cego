import { Component, OnInit, AfterViewInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { map, startWith, tap } from 'rxjs/operators';
import { ServerPlayer, NetworkGame, GameForm } from './game-add.model';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/core/login/login.service';
import { GameService } from '../game.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GamesOverviewComponent } from '../games-overview/games-overview.component';



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
  public fcGameName: FormControl;
  public fcPlayer1: FormControl;
  public fcPlayer2: FormControl;
  public fcPlayer3: FormControl;
  private playerFormControls: FormControl[] = []; // array of all input controlls for looping through



  constructor(
    private route: ActivatedRoute,
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private gameService: GameService,
    private snackBar: MatSnackBar,
    private router: Router) {
  }

  public ngOnInit(): void {
    this.fcGameName = new FormControl('');
    this.fcPlayer1 = this.createPlayerFromControl();
    this.playerFormControls.push(this.fcPlayer1);
    this.fcPlayer2 = this.createPlayerFromControl();
    this.playerFormControls.push(this.fcPlayer2);
    this.fcPlayer3 = this.createPlayerFromControl();
    this.playerFormControls.push(this.fcPlayer3);


    this.createGameForm = this.formBuilder.group({
      gamename: this.fcGameName,
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
        tap(() => { this.checkCreatable(); })
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
    return formControl.dirty && formControl.valid;
  }

  public onSubmit() {
    const formValues: GameForm = this.createGameForm.value;
    const requestBody: NetworkGame = {
      name: formValues.gamename,
      playerIds: [formValues.player1.id, formValues.player2.id, formValues.player3.id],
      creator: this.loginService.getUsername()
    };
    this.gameService.saveGame(requestBody).subscribe(
      (response) => {
        this.router.navigate(['games', response.gameid]);
      },
      () => {
        this.snackBar.open('Unbekannter Fehler', 'Wiederholen').onAction().subscribe(
          () => { this.onSubmit(); }
        );
      }
    );
  }
}
