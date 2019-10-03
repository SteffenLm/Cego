import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Read } from "./BaseController";
import { Game } from "../entity/Game";

export class GameController implements Read<Game> {

    private gameRepository = getRepository(Game);

    async readAll(request: Request, response: Response, next: NextFunction) {
        return this.gameRepository.find();
    }

    async readOne(request: Request, response: Response, next: NextFunction) {
        return this.gameRepository.findOne(request.params.id);
    }
}