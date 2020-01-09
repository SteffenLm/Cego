import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { ServerPlayer } from '../../game-add/game-add.model';
import { GameService } from '../game.service';

@Injectable()
export class PlayersResolver implements Resolve<Observable<ServerPlayer[]>> {

    constructor(private gameService: GameService) { }

    resolve(): Observable<ServerPlayer[]> {
        return this.gameService.getAllPlayers();
    }
}
