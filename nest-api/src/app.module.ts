import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameModule } from './games/game.module';
import { LoginModule } from './login/login.module';
import { UserModule } from './user/user.module';
import { RoundModule } from './round/round.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    GameModule,
    LoginModule,
    UserModule,
    RoundModule
  ],
  providers: [],
  controllers: [],
})
export class AppModule { }
