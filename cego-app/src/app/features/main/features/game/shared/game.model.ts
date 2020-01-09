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
}
