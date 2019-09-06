import {UserController} from "./controller/UserController";

interface Route {
    method: 'get' | 'post' | 'put' | 'delete';
    route: string;
    controller: any;
    action: any;
}

export const Routes: Route[] = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
}];