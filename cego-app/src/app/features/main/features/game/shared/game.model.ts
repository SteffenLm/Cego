import { Player, ReadPlayerResponse } from '../../../shared/models/player.model';

export interface CreateGameRequest {
    name: string;
    creator: string;
    playerIds: number[];
}

export interface CreateGameResponse {
    gameid: number;
}

export interface ReadGameResponse {
    id: number;
    name: string;
    created: Date;
    creator: ReadPlayerResponse;
    players: ReadPlayerResponse[];
}

export class Game {

    public created: Date;
    public id: number;
    public name: string;
    public creator: Player;
    public players: Player[] = [];

    private rawGame: ReadGameResponse;


    public constructor(jsonGame: ReadGameResponse) {
        this.rawGame = jsonGame;
        this.created = jsonGame.created;
        this.id = jsonGame.id;
        this.name = jsonGame.name;
        this.creator = new Player(jsonGame.creator);
        jsonGame.players.forEach((player) => {
            this.players.push(new Player(player));
        });
    }
}
