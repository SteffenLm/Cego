import { Game } from './game.model';

export const emptyGame = (): Game => ({
  id: '',
  name: '',
  players: [''],
});

export const exampleGame = (): Game => ({
  id: 'v9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
  name: 'Cego-Stammtisch',
  players: ['Yanner', 'Peter', 'Manu', 'Hanni'],
});
