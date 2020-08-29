import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesService } from '../shared/games.service';
import { Game } from '../shared/game.model';
import { MatDialog } from '@angular/material/dialog';
import { AddRoundComponent } from './add-round/add-round.component';
import { Round } from '../shared/round.model';
import { DialogData } from './dialogdata.model';
import { RoundsService } from './rounds.service';
import { DeleteRoundComponent } from './delete-round/delete-round.component';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styles: [],
  entryComponents: [],
  providers: [RoundsService]
})
export class GameDetailComponent implements OnInit {

  public game: Game;
  private gameIndex: number;
  public rounds: Round[];
  public players: string[];


  constructor(
    public route: ActivatedRoute,
    private gamesService: GamesService,
    private router: Router,
    private dialog: MatDialog,
    private roundsService: RoundsService) { }

  ngOnInit(): void {
    const paramId = this.route.snapshot.paramMap.get('id');
    this.gameIndex = parseInt(paramId, 10);
    this.reloadRounds();
    this.roundsService.gameIndex = this.gameIndex;
  }

  private reloadRounds(): void {
    this.game = this.gamesService.getGame(this.gameIndex);
    this.rounds = this.game.rounds;
    this.players = this.game.players;
  }

  onDeleteGame(): void {
    const dialogRef = this.dialog.open<DeleteRoundComponent, string, boolean>(DeleteRoundComponent, {
      data: this.game.name,
      panelClass: 'p-0',
      disableClose: true
    });
    dialogRef.afterClosed().subscribe((deleteGame: boolean) => {
      if (deleteGame) {
        this.gamesService.deleteGame(this.gameIndex);
        this.router.navigate(['/games']);
      }
    });
  }

  onAddRoundDialog(): void {
    const dialogRef = this.dialog.open<AddRoundComponent, DialogData, Round>(AddRoundComponent, {
      data: {
        players: this.game.players.slice(),
        gameId: this.gameIndex
      },
      panelClass: ['w-full', 'm-0'],
      disableClose: true
    });
    dialogRef.afterClosed().subscribe((round) => {
      this.roundsService.addRound(round);
      this.reloadRounds();
    });
  }
}
