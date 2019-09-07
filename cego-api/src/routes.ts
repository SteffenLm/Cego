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
        route: "/users",
        controller: UserController,
        action: "readAll"
    },
    {
        method: "get",
        route: "/users/:id",
        controller: UserController,
        action: "readOne"
    },
    {
        method: "delete",
        route: "/users/:id",
        controller: UserController,
        action: "deleteOne"
    },
    {
        method: "post",
        route: "/login",
        controller: LoginController,
        action: "createToken"
    }
];