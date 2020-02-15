import { getRepository } from 'typeorm';
import { NextFunction, Request, Response } from 'express';
import { User } from '../entity/User';
import { compare, genSalt } from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { CreatedResponse, FoundResponse } from '../model/HTTPResponses';

interface ClientRequest {
    username: string;
    password: string;
}

interface LoginToken {
    jwt: string;
}


export class LoginController {

    private userRepository = getRepository(User);

    async createToken(request: Request, response: Response, next: NextFunction): Promise<FoundResponse<LoginToken>> {
        return new Promise(async (resolve, reject) => {
            const body = <ClientRequest>request.body;
            let user = new User();
            user.username = body.username;
            const queriedUser = <User>await this.userRepository.findOneOrFail(user, {
                select: ['id', 'jwtkey', 'password', 'username']
            }).catch(reject);
            LoginController.passwordIsCorrect(body, queriedUser)
                .then(() => {
                    genSalt(10).then((salt) => {
                        jwt.sign({ "uid": queriedUser.id }, salt, (err, token) => {
                            if (err) {
                                reject();
                            } else {
                                this.userRepository.update({ username: queriedUser.username }, { jwtkey: salt });
                                resolve(new FoundResponse({ jwt: token }));
                            }
                        });
                    });
                })
                .catch(reject);
        });
    }

    private static passwordIsCorrect(clearPassword: ClientRequest, queriedUser: User): Promise<boolean> {
        return new Promise(
            (resolve, reject) => {
                compare(clearPassword.password, queriedUser.password)
                    .then((isCorrect) => {
                        isCorrect ? resolve(true) : reject(false);
                    })
                    .catch(reject);
            });
    }
}