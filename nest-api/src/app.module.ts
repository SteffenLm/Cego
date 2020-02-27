import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameModule } from './games/game.module';
import { LoginModule } from './login/login.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    GameModule,
    LoginModule,
    UserModule
  ],
  providers: [],
})
export class AppModule { }
