import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ReadGameResponse } from '../game.model';
import { GameService } from '../game.service';

@Injectable()
export class GamesResolver implements Resolve<Observable<ReadGameResponse[]>> {

    constructor(private gameService: GameService) { }

    resolve(): Observable<ReadGameResponse[]> {
        return this.gameService.getAllGames();
    }
}
