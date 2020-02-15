import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../shared/game.model';
import { MatDialog } from '@angular/material/dialog';
import { AddRoundDialogComponent } from './add-round-dialog/add-round-dialog.component';
import { Player } from '../../../shared/models/player.model';
import { GameService } from '../shared/game.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {

  public game: Game;
  private participatingPlayers: Player[];

  constructor(
    public route: ActivatedRoute,
    private dialog: MatDialog,
    private gameService: GameService,
    private snackBar: MatSnackBar) { }

  public ngOnInit(): void {
    this.game = new Game(this.route.snapshot.data.game);
    this.participatingPlayers = this.game.players.slice();
    this.participatingPlayers.push(this.game.creator);
  }

  public onAddRoundDialog(): void {
    this.dialog.open<AddRoundDialogComponent, Player[]>(AddRoundDialogComponent, {
      data: this.participatingPlayers.slice(),
      panelClass: ['w-full', 'm-0'],
      disableClose: true
    });
  }

  public onDeleteGame(): void {
    this.gameService.deleteGame(this.game.id).subscribe(
      () => {
        this.snackBar.open('Spiel gelöscht');
      },
      () => {
        this.snackBar.open('Unerwarteter Fehler', 'Wiederholen')
          .onAction().subscribe(
            () => {
              this.onDeleteGame();
            }
          );
      }
    );
  }

}
