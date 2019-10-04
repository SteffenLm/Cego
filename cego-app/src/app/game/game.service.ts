import { Api } from '../core/api.model';
import { HttpClient } from '@angular/common/http';
import { ServerGames } from './game.model';
import { Injectable } from '@angular/core';
import { ServerPlayer, NetworkGame } from './game-add/game-add.model';
import { Observable } from 'rxjs';

@Injectable()
export class GameService extends Api {
    constructor(http: HttpClient) {
        super(http);
    }

    public getAllPlayers(): Observable<ServerPlayer[]> {
        return this.getRequest<ServerPlayer[]>('users');
    }

    public saveGame(body: NetworkGame): Observable<null> {
        return this.postRequest<NetworkGame, null>('games', body);
    }
    public getAllGames(): Observable<ServerGames[]> {
        return this.getRequest<ServerGames[]>('games');
    }
}
