import { Api } from '../../../../../shared/api.model';
import { HttpClient } from '@angular/common/http';
import { ReadGameResponse, CreateGameRequest, CreateGameResponse } from './game.model';
import { Injectable } from '@angular/core';
import { ServerPlayer } from '../game-add/game-add.model';
import { Observable } from 'rxjs';

@Injectable()
export class GameService extends Api {
    constructor(http: HttpClient) {
        super(http);
    }

    public getAllPlayers(): Observable<ServerPlayer[]> {
        return this.getRequest<ServerPlayer[]>('users');
    }

    public createGame(body: CreateGameRequest): Observable<CreateGameResponse> {
        return this.postRequest<CreateGameRequest, CreateGameResponse>('games', body);
    }

    public readGames():  Observable<ReadGameResponse[]> {
        return this.getRequest<ReadGameResponse[]>('games') ;
    }

    public readGame(id: number): Observable<ReadGameResponse> {
        return this.getRequest<ReadGameResponse>(`games/${id}`);
    }
}
