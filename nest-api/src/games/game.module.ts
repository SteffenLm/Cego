import { Module } from '@nestjs/common';
import { GameController } from './games.controller';
import { GameService } from './game.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from './game.entity';
import { User } from '../user/user.entity';
import { Round } from '../round/round.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Game, User])],
  controllers: [GameController],
  providers: [GameService]
})
export class GameModule { }
