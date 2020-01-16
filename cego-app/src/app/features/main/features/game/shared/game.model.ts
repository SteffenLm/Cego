import { Player, ReadPlayerResponse } from '../../../shared/models/player.model';
import { NumberSymbol } from '@angular/common';

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
    rounds: ReadRoundResponse[];
}

export interface ReadRoundResponse {
    id: number;
    value: number;
    player: ReadPlayerResponse;
}

interface RenderedRound {
    values: number[];
}

class Round {

    public id: number;
    public value: number;
    private player: Player;

    private rawRound: ReadRoundResponse;

    constructor(jsonRound: ReadRoundResponse) {
        this.rawRound = jsonRound;
        this.id = jsonRound.id;
        this.value = jsonRound.value;
        this.player = new Player(jsonRound.player);
    }

    public getReferencedPlayer(): Player {
        return this.player;
    }

}

export class Game {

    public created: Date;
    public id: number;
    public name: string;
    public creator: Player;
    public players: Player[] = [];
    private rounds: Round[] = [];
    public renderedRounds: RenderedRound[] = [];


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
        jsonGame.rounds.forEach((rawRound) => {
            const round = new Round(rawRound);
            this.rounds.push(round);
            const renderedRound = this.renderRound(round);
            this.renderedRounds.push(renderedRound);
        });
    }

    private getInvolvedPlayers(): Player[] {
        const involvedPlayers: Player[] = this.players.slice();
        involvedPlayers.push(this.creator);
        return involvedPlayers;
    }

    private renderRound(round: Round): RenderedRound {

        const involvedPlayers = this.getInvolvedPlayers();
        const renderedRound: RenderedRound = {
            values: new Array(involvedPlayers.length)
        };
        const affectedPlayer: Player = round.getReferencedPlayer();
        if (round.value > 0) {
            // affected player won
            for (let index = 0; index < involvedPlayers.length; index++) {
                const player = involvedPlayers[index];
                if (player.id === affectedPlayer.id) {
                    renderedRound.values[index] = round.value * (--involvedPlayers.length);
                } else {
                    renderedRound.values[index] = 0 - round.value;
                }
            }
        } else {
            // affected player lost
            for (let index = 0; index < involvedPlayers.length; index++) {
                const player = involvedPlayers[index];
                if (player.id === affectedPlayer.id) {
                    renderedRound.values[index] = (round.value) * (--involvedPlayers.length);
                } else {
                    renderedRound.values[index] = 0 - round.value;
                }
            }
        }
        return renderedRound;
    }

    public renderRounds() {

    }

    public rerenderRounds() {

    }



}
