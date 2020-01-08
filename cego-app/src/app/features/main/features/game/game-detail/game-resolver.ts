import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';


import { GameService } from '../game.service';
import { ServerGame } from './game-detail.model';

@Injectable()
export class GameResolver implements Resolve<Observable<ServerGame>> {

    constructor(private gameService: GameService) { }

    resolve(): Observable<ServerGame> {
        return this.gameService.getGame(8);
    }
}
