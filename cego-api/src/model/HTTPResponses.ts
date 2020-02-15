export enum StatusCodes {
    Found = 200,
    Created = 201,
    Accepted = 202,
    NoContent = 204,
    BadRequest = 400,
    NotFound = 404,
    InternalServerError = 500
}

export abstract class BaseResponse {
    constructor(public readonly statusCode: StatusCodes, public readonly responseBody: any) {

    }
}

export class FoundResponse<T> extends BaseResponse {

    constructor(public readonly responseBody: T | T[]) {
        super(StatusCodes.Found, responseBody);
    }
}

export class NotFoundResponse<T> extends BaseResponse {
    constructor() {
        super(StatusCodes.NotFound, '');
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

