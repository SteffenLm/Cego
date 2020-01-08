import { ServerPlayer } from '../game-add/game-add.model';

export interface ServerGame {
    id: number;
    name: string;

    created: string;
    creator: ServerPlayer;
    players: ServerPlayer[];
}