import { Request, Response, NextFunction } from 'express';
import { FoundResponse, CreatedResponse, NoContentResponse } from '../model/HTTPResponses';

export interface Create<T> {
    createOne(request: Request, response: Response, next: NextFunction): Promise<CreatedResponse>;
}

export interface Read<T> {
    readAll(request: Request, response: Response, next: NextFunction): Promise<FoundResponse<T[]>>;
    readOne(request: Request, response: Response, next: NextFunction): Promise<FoundResponse<T>>;
}

export interface Update<T> {
    updateOne(request: Request, response: Response, next: NextFunction): Promise<NoContentResponse>;
}

export interface Delete<T> {
    deleteOne(request: Request, response: Response, next: NextFunction): Promise<NoContentResponse>;
}
