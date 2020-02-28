import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Round } from './round.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RoundService extends TypeOrmCrudService<Round>{
    constructor(@InjectRepository(Round) roundRepository: Repository<Round>) {
        super(roundRepository);
    }
}
