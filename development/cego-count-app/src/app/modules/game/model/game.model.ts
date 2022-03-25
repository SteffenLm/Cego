import { CreateGame } from './create-game.model';

export interface Game extends CreateGame {
  id: string;
}
