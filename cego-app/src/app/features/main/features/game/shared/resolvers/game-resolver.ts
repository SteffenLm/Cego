import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';


import { GameService } from '../game.service';
import { ReadGameResponse } from '../game.model';

@Injectable()
export class GameResolver implements Resolve<Observable<ReadGameResponse>> {

    constructor(private gameService: GameService) { }

    resolve(): Observable<ReadGameResponse> {
        return this.gameService.readGame(0);
    }
}
