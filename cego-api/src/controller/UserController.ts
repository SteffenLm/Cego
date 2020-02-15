import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { User } from "../entity/User";
import { Read } from "./BaseController";
import { FoundResponse } from "../model/HTTPResponses";

export class UserController implements Read<User> {

    private userRepository = getRepository(User);

    async readAll(request: Request, response: Response, next: NextFunction): Promise<FoundResponse<User[]>> {
        return new Promise(
            (resolve, reject) => {
                this.userRepository.find()
                    .then((users) => { resolve(new FoundResponse<User[]>(users)); })
                    .catch(reject);
            });
    }

    async readOne(request: Request, response: Response, next: NextFunction): Promise<FoundResponse<User>> {
        return new Promise(
            (resolve, reject) => {
                this.userRepository.findOne(request.params.id)
                    .then((user) => { resolve(new FoundResponse(user)); })
                    .catch(reject);
            });
    }
}