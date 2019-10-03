import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { User } from "../entity/User";
import { Read } from "./BaseController";

export class UserController implements Read<User> {

    private userRepository = getRepository(User);

    async readAll(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find();
    }

    async readOne(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.findOne(request.params.id);
    }
}