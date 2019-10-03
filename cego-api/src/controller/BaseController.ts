import { Request, Response, NextFunction } from 'express';

export interface Create<T> {
    createOne(request: Request, response: Response, next: NextFunction): Promise<T>;
}

export interface Read<T> {
    readAll(request: Request, response: Response, next: NextFunction): Promise<T[]>;
    readOne(request: Request, response: Response, next: NextFunction): Promise<T>;
}

export interface Update<T> {
    updateOne(request: Request, response: Response, next: NextFunction): Promise<T>;
}

export interface Delete {
    deleteOne(request: Request, response: Response, next: NextFunction): Promise<boolean>;
}
