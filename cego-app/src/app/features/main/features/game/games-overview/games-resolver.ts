import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ServerGames } from '../game.model';
import { GameService } from '../game.service';

@Injectable()
export class GamesResolver implements Resolve<Observable<ServerGames[]>> {

    constructor(private gameService: GameService) { }

    resolve(): Observable<ServerGames[]> {
        return this.gameService.getAllGames();
    }
}
