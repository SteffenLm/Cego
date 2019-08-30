import { Api } from '../core/api.model';
import { HttpClient } from '@angular/common/http';
import { ServerGames } from './game.model';

export class GameService extends Api {
    constructor(http: HttpClient) {
        super(http);
    }

    public getAllGames() {
        return this.getRequest<ServerGames[]>('games');
    }
}
