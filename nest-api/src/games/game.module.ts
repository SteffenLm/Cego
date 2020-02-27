import { Module } from '@nestjs/common';
import { GamesController } from './games.controller';
import { GamesService } from './game.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from './game.entity';
import { User } from '../user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Game, User])],
  controllers: [GamesController],
  providers: [GamesService]
})
export class GameModule { }
