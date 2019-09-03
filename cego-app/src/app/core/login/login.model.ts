export interface ServerLogin {
    username: string;
    password: string;
}

export interface ServerResponse {
    jwt: string;
}

export interface JwtPayload {
    username: string;
}
