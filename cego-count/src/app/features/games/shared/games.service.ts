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
  }

  public getGames(): Game[] {
    return this.games.slice();
  }
}
