import { Request, Response, NextFunction } from 'express';
import { verify, decode } from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import { User } from '../entity/User';
import { Responses } from '../helpers/Responses';

interface TokenPayload {
    exp: number;
    iat: number;
    uid: number;
}

export class Authentication {

    public async checkJwt(request: Request, response: Response, nextFunction: NextFunction): Promise<null> {
        return new Promise(
            async (resolve, reject) => {
                if (request.path !== '/api/login') {
                    const encodedToken = <string>(await Authentication.getToken(request, response).catch((r) => {
                        Responses.BadRequest(response);
                    }));
                    const decodedToken = <TokenPayload>decode(encodedToken);

                    const userRepository = getRepository(User);

                    userRepository.findOneOrFail(
                        {
                            select: ['username', 'jwtkey'],
                            where: { id: decodedToken.uid }
                        }
                    )
                        .then((user) => {
                            verify(encodedToken, user.jwtkey, (err, result) => {
                                if (err) {
                                    response.status(401).end();
                                } else {
                                    nextFunction();
                                }
                            })
                        })
                        .catch((err) => {
                            response.status(401).end();
                        });
                } else {
                    nextFunction();
                }
            });
    }

    private static async getToken(request: Request, response: Response): Promise<string> {
        return new Promise(
            (resolve, reject) => {
                if (request.headers.authorization === undefined) {
                    reject()
                } else {
                    resolve(request.headers.authorization.substring(7));
                }
            });
    }

}
