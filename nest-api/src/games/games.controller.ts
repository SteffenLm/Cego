import { Controller, Get, Param, Post, Delete, Body } from '@nestjs/common';
import { GamesService } from './game.service';
import { CreateGameDTO } from './game.dto';

@Controller('games')
export class GamesController {

    constructor(private readonly gamesService: GamesService) {

    }

    @Post()
    public create(@Body() createGameDTO: CreateGameDTO) {
        this.gamesService.createOne(createGameDTO);
    }


    @Get()
    readAll() {
        return this.gamesService.findAll();
    }

    @Get(':id')
    readOne(@Param('id') id: string) {
        return this.gamesService.findOne(id);
    }

    @Delete(':id')
    deleteOne(@Param('id') id: string) {
        return `This action removes a #${id} cat`;
    }
}
