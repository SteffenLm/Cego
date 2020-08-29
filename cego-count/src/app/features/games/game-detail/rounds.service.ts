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

  public updateRound(round: Round, index: number): void {
    const game = this.gamesService.getGame(this.gameIndex);
    game[index] = round;
    this.gamesService.updateGame(this.gameIndex, game);
  }

  public deleteRound(index: number): void {
    const game = this.gamesService.getGame(this.gameIndex);
    game.rounds.splice(index, 1);
    this.gamesService.updateGame(this.gameIndex, game);
  }
}
