import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


import { GameService } from '../game.service';
import { ReadGameResponse } from '../game.model';

@Injectable()
export class GameResolver implements Resolve<Observable<ReadGameResponse>> {

    constructor(private gameService: GameService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ReadGameResponse> {
        const paramId = route.paramMap.get('id');
        const convertedId = parseInt(paramId, 10);
        return this.gameService.readGame(convertedId);
    }
}
