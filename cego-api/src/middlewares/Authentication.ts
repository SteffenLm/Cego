import { Request, Response, NextFunction } from 'express';
import { verify, decode } from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import { User } from '../entity/User';

import { DecodedTokenPayload } from '../model/JWT';
import { BadRequestResponse, ErrorReasons, sendResponse, UnauthorizedResponse } from '../model/HTTPResponses';

export class Authentication {

    public async checkJwt(request: Request, response: Response, nextFunction: NextFunction) {
        if (request.path !== '/api/login') {
            Authentication.getToken(request)
                .then((encodedToken) => {
                    const decodedToken = <DecodedTokenPayload>decode(encodedToken);
                    const userRepository = getRepository(User);
                    userRepository.findOneOrFail(
                        {
                            select: ['username', 'jwtkey'],
                            where: { id: decodedToken.uid }
                        })
                        .then((user) => {
                            verify(encodedToken, user.jwtkey, (err) => {
                                if (err) {
                                    sendResponse(response, new UnauthorizedResponse());
                                } else {
                                    nextFunction();
                                }
                            })
                        })
                        .catch(() => { sendResponse(response, new UnauthorizedResponse()); });
                })
                .catch(() => {
                    sendResponse(response, new BadRequestResponse(ErrorReasons.TokenMissing))
                });
        } else {
            nextFunction();
        }
    }

    private static async getToken(request: Request): Promise<string> {
        return new Promise((resolve, reject) => {
            if (request.headers.authorization === undefined) {
                reject()
            } else {
                resolve(request.headers.authorization.substring(7));
            }
        });
    }

}
