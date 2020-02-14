import { UserController } from "./controller/UserController";
import { LoginController } from "./controller/LoginController";
import { GameController } from "./controller/GameController";
import { RoundController } from "./controller/RoundController";

interface Route {
    method: 'get' | 'post' | 'put' | 'delete';
    route: string;
    controller: any;
    action: any;
}

export const Routes: Route[] = [
    {
        method: "get",
        route: "/api/games",
        controller: GameController,
        action: "readAll"
    },
    {
        method: "get",
        route: "/api/games/:id",
        controller: GameController,
        action: "readOne"
    },
    {
        method: "delete",
        route: "/api/games/:id",
        controller: GameController,
        action: "deleteOne"
    },
    {
        method: "post",
        route: "/api/games",
        controller: GameController,
        action: "createOne"
    },
    // {
    //     method: "post",
    //     route: "/api/games/:gameId/round",
    //     controller: RoundController,
    //     action: "createOne"
    // },
    {
        method: "get",
        route: "/api/games/:gameId/rounds",
        controller: RoundController,
        action: "readAll"
    },
    {
        method: "get",
        route: "/api/users",
        controller: UserController,
        action: "readAll"
    },
    {
        method: "post",
        route: "/api/login",
        controller: LoginController,
        action: "createToken"
    }
];