import { Module } from '@nestjs/common';
import { RoundService } from './round.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Round } from './round.entity';
import { Game } from 'src/games/game.entity';
import { RoundsController } from './rounds.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Round, Game])],
  controllers: [RoundsController],
  providers: [RoundService]
})
export class RoundModule { }
