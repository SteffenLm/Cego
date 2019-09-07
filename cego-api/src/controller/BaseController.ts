import { Request, Response, NextFunction } from 'express';

export interface RestController<T> {
    createOne(request: Request, response: Response, next: NextFunction): Promise<T>;
    readAll(request: Request, response: Response, next: NextFunction): Promise<T[]>;
    readOne(request: Request, response: Response, next: NextFunction): Promise<T>;
    updateOne(request: Request, response: Response, next: NextFunction): Promise<T>;
    deleteOne(request: Request, response: Response, next: NextFunction): Promise<boolean>;
}

export abstract class BaseController {

    private response: Response;

    constructor(response: Response) {
        this.response = response;        
    }

    public BadRequest(): void {
        this.response.status(400).end();
    }
}
