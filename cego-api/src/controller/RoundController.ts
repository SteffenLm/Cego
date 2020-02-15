import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Read } from "./BaseController";
import { Game } from "../entity/Game";
import { Round } from "../entity/Round";
import { RequestHelper } from "../helpers/RequestHelper";
import { FoundResponse } from "../model/HTTPResponses";

interface NetworkRound {
    name: string;
    creator: string;
    playerIds: number[];
}

interface NetworkRoundResult {
    roundId: number;
}

export class RoundController implements Read<Round>{

    private roundRepository = getRepository(Round);
    private gameRepository = getRepository(Game);

    public readOne(request: Request, response: Response, next: NextFunction): Promise<FoundResponse<Round>> {
        return new Promise(async (resolve, reject) => {
            const gameId: string = <string>(await RequestHelper.getGameId(request).catch(reject));
            const roundId: string = <string>(await RequestHelper.getRoundId(request).catch(reject));
        });
    }
    public readAll(request: Request, response: Response, next: NextFunction): Promise<FoundResponse<Round[]>> {
        return new Promise(async (resolve, reject) => {
            RequestHelper.getGameId(request)
                .then((gameId) => {
                    return this.gameRepository.findOneOrFail(gameId);
                })
                .then((game) => {
                    return this.roundRepository.find({ where: { game: game } });
                })
                .then((rounds) => { resolve(new FoundResponse<Round[]>(rounds)) })
                .catch(reject);
        });
    }
}