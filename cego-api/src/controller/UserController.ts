import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { User } from "../entity/User";
import { RestController } from "./BaseController";

export class UserController implements RestController<User> {

    private userRepository = getRepository(User);

    async createOne(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.save(request.body);
    }

    async readAll(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find();
    }

    async readOne(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.findOne(request.params.id);
    }

    public updateOne(request: Request, response: Response, next: NextFunction) {
        return this.createOne(request, response, next);
    }

    async deleteOne(request: Request, response: Response, next: NextFunction) {
        const userToRemove = await this.userRepository.findOne(request.params.id);
        return this.userRepository.remove(userToRemove)
            .then(() => { return Promise.resolve(true); })
            .catch(() => { return Promise.reject(false); });
    }

}