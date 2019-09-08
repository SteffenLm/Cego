import { getRepository } from 'typeorm';
import { NextFunction, Request, Response } from 'express';
import { User } from '../entity/User';
import { compare, genSalt } from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { Responses } from '../helpers/Responses';

interface ClientRequest {
    username: string;
    password: string;
}


export class LoginController {

    private userRepository = getRepository(User);

    async createToken(request: Request, response: Response, next: NextFunction) {
        const body = <ClientRequest>request.body;
        const user = new User();
        user.username = body.username;
        const queriedUser = <User>await this.userRepository.findOneOrFail(user).catch(() => {
            Responses.BadRequest(response);
        });
        LoginController.passwordIsCorrect(body, queriedUser)
            .then(() => {
                genSalt(10).then((salt) => {
                    jwt.sign({ "username": user.username }, salt, (err, token) => {
                        response.status(200).send({
                            jwt: token
                        });
                    });
                    queriedUser.jwtkey = salt;
                    this.userRepository.save(queriedUser);
                });
            })
            .catch(() => { Responses.BadRequest(response); });
    }

    private static passwordIsCorrect(clearPassword: ClientRequest, queriedUser: User): Promise<boolean> {
        return new Promise(
            (resolve, reject) => {
                compare(clearPassword.password, queriedUser.password)
                    .then((isCorrect) => {
                        isCorrect ? resolve(true) : reject(false);
                    });
            });
    }
}