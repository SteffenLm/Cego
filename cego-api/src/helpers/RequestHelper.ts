import { Request } from "express";

export class RequestHelper {
    public static getGameId(request: Request): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            if (request.params.gameId !== undefined) {
                resolve(request.params.gameId);
            } else {
                reject()
            }
        });
    }

    public static getRoundId(request: Request): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            if (request.params.gameId !== undefined) {
                resolve(request.params.roundId);
            } else {
                reject()
            }
        });
    }
}