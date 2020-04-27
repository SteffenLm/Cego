import { Response } from "express";

export enum StatusCodes {
    Found = 200,
    Created = 201,
    Accepted = 202,
    NoContent = 204,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404,
    InternalServerError = 500
}

export enum ErrorReasons {
    TokenMissing = 'Bearer Token is Missing'
}

export abstract class BaseResponse {
    constructor(public readonly statusCode: StatusCodes, public readonly responseBody: any) { }
}

export class FoundResponse<T> extends BaseResponse {
    constructor(public readonly responseBody: T | T[]) {
        super(StatusCodes.Found, responseBody);
    }
}
export class CreatedResponse extends BaseResponse {
    constructor(public readonly ressourceId: number) {
        super(StatusCodes.Created, { id: ressourceId });
        this.ressourceId = ressourceId;
    }
}

export class NoContentResponse extends BaseResponse {
    constructor() {
        super(StatusCodes.Created, '');
    }
}

export class BadRequestResponse extends BaseResponse {
    constructor(errorReason: ErrorReasons) {
        super(StatusCodes.BadRequest, {
            reason: errorReason
        });
    }
}

export class UnauthorizedResponse extends BaseResponse {
    constructor() {
        super(StatusCodes.Unauthorized, '');
    }
}

export class NotFoundResponse extends BaseResponse {
    constructor() {
        super(StatusCodes.NotFound, '');
    }
}

export function sendResponse(response: Response, customResponse: BaseResponse) {
    response.status(customResponse.statusCode).send(customResponse.responseBody);
}

