import { Api } from '../core/api.model';
import { HttpClient } from '@angular/common/http';
import { ServerGames } from './game.model';
import { Injectable } from '@angular/core';
import { ServerPlayer, NetworkGame, ServerGameCreated } from './game-add/game-add.model';
import { Observable } from 'rxjs';

@Injectable()
export class GameService extends Api {
    constructor(http: HttpClient) {
        super(http);
    }

    public getAllPlayers(): Observable<ServerPlayer[]> {
        return this.getRequest<ServerPlayer[]>('users');
    }

    public saveGame(body: NetworkGame): Observable<ServerGameCreated> {
        return this.postRequest<NetworkGame, ServerGameCreated>('games', body);
    }
    public getAllGames(): Observable<ServerGames[]> {
        return this.getRequest<ServerGames[]>('games');
    }
}
