import { Injectable } from '@angular/core';
import { GamesService } from '../shared/games.service';
import { Round } from '../shared/round.model';

@Injectable()
export class RoundsService {

  constructor(private gamesService: GamesService) { }

  public gameIndex: number;


  public addRound(round: Round): void {
    round.created = new Date();
    const game = this.gamesService.getGame(this.gameIndex);
    game.rounds.push(round);
    this.gamesService.updateGame(this.gameIndex, game);
  }
}
