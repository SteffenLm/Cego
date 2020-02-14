import { getRepository, DeleteResult } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Read, Create, Delete } from "./BaseController";
import { Game } from "../entity/Game";
import { User } from "../entity/User";
import { Round } from "../entity/Round";

interface NetworkRoundResult {
    gameid: number;
}

export class RoundController implements Create<NetworkRoundResult> {

    private gameRepository = getRepository(Round);
    private userRepository = getRepository(User);

    public createOne(request: Request, response: Response, next: NextFunction) {
        return new Promise<NetworkRoundResult>((resolve, reject) => {
            console.log(request);
        });
    }

}