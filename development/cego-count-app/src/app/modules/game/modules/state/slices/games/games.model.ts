import { EntityState } from '@ngrx/entity';
import { Game } from 'src/app/modules/game/model/game.model';

export const gamesFeatureKey = 'games';

export interface GamesFeatureState extends EntityState<Game> {}
