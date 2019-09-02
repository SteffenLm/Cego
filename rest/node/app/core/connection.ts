import config = require('./../config/mariadb');
import mariadb = require('mariadb');

export class Connection {

    private static connection: mariadb.Connection;

    public static getConnection(): Promise<mariadb.Connection> {
        return new Promise((resolve, reject) => {
            if (this.connection === undefined) {
                mariadb.createConnection(config)
                    .then((connection) => {
                        this.connection = connection;
                        resolve(this.connection);
                    })
                    .catch(() => {
                        reject();
                        process.exit(0);
                    });

            } else {
                resolve(this.connection);
            }
        });
    }
}