import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from './game.entity';
import { Repository } from 'typeorm';
import { User } from '../user/user.entity';
import { CreateGameDTO } from './game.dto';

@Injectable()
export class GamesService {

    constructor(
        @InjectRepository(Game)
        private readonly gameRepository: Repository<Game>,
        @InjectRepository(Game)
        private readonly userRepository: Repository<User>,
    ) { }

    public async createOne(gameDTO: CreateGameDTO): Promise<number> {
        const creator = await this.userRepository.findOneOrFail({
            select: ['id'],
            where: { username: gameDTO.creator }
        });
        const players = await this.userRepository.findByIds(gameDTO.playerIds);
        const game = new Game();
        game.name = gameDTO.name;
        game.creator = creator;
        game.players = players;
        const createdGame = await this.gameRepository.save(game);
        return createdGame.id;
    }

    public findAll(): Promise<Game[]> {
        return this.gameRepository.find({ order: { created: "DESC" } });
    }

    public findOne(id: string): Promise<Game> {
        return this.gameRepository.findOneOrFail(id, {
            relations: ['players', 'creator', 'rounds', 'rounds.player']
        }).catch(() => { throw new NotFoundException });
    }

    public deleteOne(id: string) {
        return this.gameRepository.delete(id);
    }
}
