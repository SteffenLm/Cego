import { Injectable } from '@angular/core';
import { LocalStorageManager } from '../../../Storage/LocalStorage';
import { Game } from './game.model';


@Injectable({
  providedIn: 'root'
})
export class GamesService extends LocalStorageManager<Game> {

  private games: Game[];

  constructor() {
    super('games');
    this.games = this.getItem();
    this.persistData();
  }

  public createGame(game: Game): void {
    game.created = new Date();
    this.games.push(game);
    this.persistData();
  }

  public getGames(): Game[] {
    return this.games.slice();
  }

  private persistData(): void {
    this.sortArray();
    this.games.forEach((game) => {
      console.log(game.name + new Date(game.created).getMilliseconds());
    });
    this.setItem(this.games);
  }

  private sortArray(): void {
    this.games = this.games.sort((a, b) => {
      return new Date(b.created).getMilliseconds() - new Date(a.created).getMilliseconds();
    });
  }
}
