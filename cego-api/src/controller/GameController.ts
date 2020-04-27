import { getRepository, DeleteResult } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Read, Create, Delete } from "./BaseController";
import { Game } from "../entity/Game";
import { User } from "../entity/User";
import { FoundResponse, CreatedResponse, NoContentResponse, NotFoundResponse } from "../model/HTTPResponses";

interface NetworkGame {
    name: string;
    creator: string;
    playerIds: number[];
}

interface NetworkGameResult {
    gameid: number;
}

export class GameController implements Read<Game>, Create {

    private gameRepository = getRepository(Game);
    private userRepository = getRepository(User);

    public async readAll(request: Request, response: Response, next: NextFunction): Promise<FoundResponse<Game[]>> {
        return new Promise(
            (resolve, reject) => {
                this.gameRepository.find({ order: { created: "DESC" } })
                    .then((games) => { resolve(new FoundResponse<Game[]>(games)); })
                    .catch(() => { reject(new NotFoundResponse()); });
            });
    }

    public async readOne(request: Request, response: Response, next: NextFunction): Promise<FoundResponse<Game>> {
        return new Promise(
            (resolve, reject) => {
                this.gameRepository.findOneOrFail(request.params.id, {
                    relations: ['players', 'creator', 'rounds', 'rounds.player']
                })
                    .then((game) => { resolve(new FoundResponse<Game>(game)) })
                    .catch(() => { reject(new NotFoundResponse()); });
            });
    }

    public async createOne(request: Request, response: Response, next: NextFunction): Promise<CreatedResponse> {
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
            const createdGame = await this.gameRepository.save(game);
            resolve(new CreatedResponse(createdGame.id));
        });
    }
    public async deleteOne(request: Request, response: Response, next: NextFunction): Promise<NoContentResponse> {
        return new Promise((resolve, reject) => {
            this.gameRepository.delete(request.params.id)
                .then((result) => {
                    if (result.affected === 1) {
                        resolve(new NoContentResponse());
                    } else {
                        reject()
                    }
                })
                .catch(() => {
                    reject()
                })
        });
    }
}