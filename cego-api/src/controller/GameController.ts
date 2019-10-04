import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Read, Create } from "./BaseController";
import { Game } from "../entity/Game";
import { User } from "../entity/User";

interface NetworkGame {
    name: string;
    creator: string;
    playerIds: number[];
}

interface NetworkGameResult {
    gameid: number;
}

export class GameController implements Read<Game>, Create<NetworkGameResult> {

    private gameRepository = getRepository(Game);
    private userRepository = getRepository(User);

    public async readAll(request: Request, response: Response, next: NextFunction): Promise<Game[]> {
        return this.gameRepository.find({
            order: { created: "DESC" }
        });
    }

    public async readOne(request: Request, response: Response, next: NextFunction): Promise<Game> {
        return this.gameRepository.findOne(request.params.id);
    }

    public async createOne(request: Request, response: Response, next: NextFunction): Promise<NetworkGameResult> {
        return new Promise(async (resolve, reject) => {
            const body: NetworkGame = request.body;
            const creator = <User>(await this.userRepository.findOneOrFail({
                select: ['id'],
                where: { username: body.creator }
            }).catch(reject));
            const players = <User[]>(await this.userRepository.findByIds(body.playerIds))
            const game = new Game();
            game.name = body.name;
            game.creator = creator;
            game.players = players;
            const result = await this.gameRepository.save(game);
            const response = {
                gameid: result.id
            }
            resolve(response);
        });
    }
}