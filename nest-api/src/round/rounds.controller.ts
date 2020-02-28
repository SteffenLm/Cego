import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Round } from './round.entity';
import { RoundService } from './round.service';

@Crud({
    model: {
        type: Round
    },
    params: {
        gameId: {
            field: 'game',
            type: 'number'
        },
        id: {
            field: 'id',
            type: 'number',
            primary: true,
        },
    },
    query: {
        join: {
            game: {
                persist: ['id'],
                eager: false,
            },
            player: {
                allow: ['id', 'username'],
                eager: true,
            }
        }
    }
})
@Controller('games/:gameId/rounds')
export class RoundsController implements CrudController<Round> {
    constructor(public readonly service: RoundService) { }
}
