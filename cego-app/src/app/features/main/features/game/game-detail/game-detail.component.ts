import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../shared/game.model';
import { MatDialog } from '@angular/material/dialog';
import { AddRoundDialogComponent } from './add-round-dialog/add-round-dialog.component';
import { Player } from '../../../shared/models/player.model';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {

  public game: Game;

  constructor(public route: ActivatedRoute, private dialog: MatDialog) { }

  public ngOnInit(): void {
    this.game = new Game(this.route.snapshot.data.game);
  }

  public onAddRoundDialog(): void {
    this.dialog.open<AddRoundDialogComponent, Player[]>(AddRoundDialogComponent, {
      data: this.game.players,
      panelClass: ['w-full', 'm-0']
    });
  }

}
