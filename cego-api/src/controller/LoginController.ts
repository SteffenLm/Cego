import { getRepository } from 'typeorm';
import { NextFunction, Request, Response } from 'express';
import { User } from '../entity/User';
import { compare, genSalt } from 'bcrypt';
import { BaseController } from './BaseController';
import * as jwt from 'jsonwebtoken';
import { resolveSoa } from 'dns';

interface ClientRequest {
    username: string;
    password: string;
}


export class LoginController extends BaseController {

    private userRepository = getRepository(User);

    async createToken(request: Request, response: Response, next: NextFunction) {
        const body = <ClientRequest>request.body;
        const user = new User();
        user.username = body.username;
        const queriedUser = <User>await this.userRepository.findOneOrFail(user).catch(this.BadRequest);
        LoginController.passwordIsCorrect(body, queriedUser)
            .then(() => {
                genSalt(10).then((salt) => {
                    jwt.sign({ "username": user.username }, salt, (err, token) => {
                        response.status(200).send(token);
                    });
                });
            })
            .catch(this.BadRequest);
    }

    private static passwordIsCorrect(clearPassword: ClientRequest, queriedUser: User): Promise<boolean> {
        return compare(clearPassword, queriedUser.password);
    }

    private static generateToken() {

    }

    public static BadRequest(response: Response) {
        response.status(400).end();
    }
}