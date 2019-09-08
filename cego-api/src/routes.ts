import { UserController } from "./controller/UserController";
import { LoginController } from "./controller/LoginController";

interface Route {
    method: 'get' | 'post' | 'put' | 'delete';
    route: string;
    controller: any;
    action: any;
}

export const Routes: Route[] = [
    {
        method: "get",
        route: "/api/users",
        controller: UserController,
        action: "readAll"
    },
    {
        method: "get",
        route: "/api/users/:id",
        controller: UserController,
        action: "readOne"
    },
    {
        method: "delete",
        route: "/api/users/:id",
        controller: UserController,
        action: "deleteOne"
    },
    {
        method: "post",
        route: "/api/login",
        controller: LoginController,
        action: "createToken"
    }
];