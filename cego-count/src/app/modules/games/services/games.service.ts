import { Injectable } from '@angular/core';
import { LocalStorageManager } from '../../../Storage/LocalStorage';
import { Game } from '../model/game.model';

@Injectable({
  providedIn: 'root',
})
export class GamesService extends LocalStorageManager<Game> {
  private games: Game[];

  constructor() {
    super('games');
    this.games = this.getItem();
    this.persistData();
  }

  public updateGame(index: number, game: Game): void {
    this.games[index] = game;
    this.persistData();
  }

  public createGame(game: Game): void {
    game.created = new Date();
    game.rounds = [];
    this.games.push(game);
    this.persistData();
  }

  public getGames(): Game[] {
    return this.games.slice();
  }

  public getGame(index: number): Game {
    return this.games.slice()[index];
  }

  public deleteGame(index: number): void {
    this.games.splice(index, 1);
    this.persistData();
  }

  private persistData(): void {
    this.sortArray();
    this.setItem(this.games);
  }

  private sortArray(): void {
    this.games = this.games.sort((a, b) => {
      return (
        new Date(b.created).getMilliseconds() -
        new Date(a.created).getMilliseconds()
      );
    });
  }
}
