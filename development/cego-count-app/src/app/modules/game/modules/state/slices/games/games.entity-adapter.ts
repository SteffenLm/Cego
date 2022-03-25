import { createEntityAdapter } from '@ngrx/entity';
import { Game } from 'src/app/modules/game/model/game.model';

export const gamesEntityAdapter = createEntityAdapter<Game>();

export const { selectAll } = gamesEntityAdapter.getSelectors();
