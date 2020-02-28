import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from './game.entity';
import { Repository } from 'typeorm';
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

@Injectable()
export class GameService extends TypeOrmCrudService<Game> {

    constructor(@InjectRepository(Game) private readonly gameRepository: Repository<Game>) {
        super(gameRepository);
    }
}
