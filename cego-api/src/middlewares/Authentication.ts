import { Request, Response, NextFunction } from 'express';
import { verify, decode } from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import { User } from '../entity/User';

interface TokenPayload {
    username: string;
}

export class Authentication {

    public checkJwt(request: Request, response: Response, nextFunction: NextFunction): void {
        if (request.url !== '/api/login') {
            const encodedToken = Authentication.getToken(request);
            const decodedToken = <TokenPayload>decode(encodedToken);
            const userRepository = getRepository(User);
            userRepository.findOneOrFail(
                {
                    select: ['username', 'jwtkey'],
                    where: { username: decodedToken.username }
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
    }

    private static getToken(request: Request): string {
        return request.headers.authorization.substring(7);
    }

}
