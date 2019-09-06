import { Request, Response, NextFunction } from "express";

export interface BaseController<T> {
    createOne(request: Request, response: Response, next: NextFunction): Promise<T>;
    readAll(request: Request, response: Response, next: NextFunction): Promise<T[]>;
    readOne(request: Request, response: Response, next: NextFunction): Promise<T>;
    updateOne(request: Request, response: Response, next: NextFunction): Promise<T>;
    deleteOne(request: Request, response: Response, next: NextFunction): Promise<boolean>;
}
