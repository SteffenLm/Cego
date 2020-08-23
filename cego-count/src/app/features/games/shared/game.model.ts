import { Round } from './round.model';

export class Game {
    public name: string;
    public created: Date;
    public players: string[] = [];
    public rounds: Round[];
}
