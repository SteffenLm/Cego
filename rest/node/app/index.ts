import "reflect-metadata";
import express from 'express';

import { Connection } from './core/connection';

const app: express.Application = express();

Connection.getConnection()
  .then((connection) => {
    connection.query("SELECT * FROM users")
    .then((res) => {
      console.log(res);
  });
})

app.get('/', (req, res) => {
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});