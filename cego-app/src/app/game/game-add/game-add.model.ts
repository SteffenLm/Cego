export interface ServerPlayer {
    id: number;
    username: string;
}

export interface NetworkGame {
    name: string;
    creator: string;
    playerIds: number[];
}

export interface ServerGameCreated {
    gameid: number;
}

export interface GameForm {
    gamename: string;
    player1: PlayerForm;
    player2: PlayerForm;
    player3: PlayerForm;
}

export interface PlayerForm {
    id: number;
    username: string;
}
