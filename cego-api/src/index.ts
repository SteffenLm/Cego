import "reflect-metadata";

import express from 'express';
import bodyParser from 'body-parser';

import { Request, Response } from "express";
import { createConnection } from 'typeorm';

import { Routes } from "./routes";
import { Authentication } from "./middlewares/Authentication";

createConnection().then(async connection => {
    const auth = new Authentication();
    // create express app
    const app: express.Application = express();
    app.use(bodyParser.json());
    app.use(auth.checkJwt);

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result
                    .then(result => result !== null && result !== undefined ? res.send(result) : undefined)
                    .catch(() => { res.status(500).send() });

            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });
    app.all('*', (req: Request, res: Response) => {
        res.status(404).end();
    })

    // start express server
    app.listen(3000);
}).catch(error => console.log(error));
