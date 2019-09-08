import { Response } from 'express';

export class Responses {
    public static BadRequest(response: Response) {
        response.status(400).end();
    }
}