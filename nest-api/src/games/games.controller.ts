import { Controller } from '@nestjs/common';
import { GameService } from './game.service';
import { Crud, CrudController } from "@nestjsx/crud";
import { Game } from './game.entity';

@Crud({
    model: {
        type: Game
    }
})
@Controller('games')
export class GameController implements CrudController<Game> {
    constructor(public readonly service: GameService) { }
}
