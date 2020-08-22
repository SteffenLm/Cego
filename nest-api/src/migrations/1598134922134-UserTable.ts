import { MigrationInterface, QueryRunner } from "typeorm";

export class UserTable1598134922134 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const createUserTable =
            `CREATE TABLE user (
            id INT(11) NOT NULL AUTO_INCREMENT,
            username VARCHAR(30) NOT NULL,
            password VARCHAR(64) NOT NULL,
            email VARCHAR(60) DEFAULT NULL,
            jwtkey VARCHAR(32) DEFAULT NULL,
            PRIMARY KEY (id),
            UNIQUE KEY INDEX_USERNAME (username),
            UNIQUE KEY INDEX_EMAIL (email)
        )`;
        return queryRunner.query(createUserTable);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        queryRunner.query('DROP TABLE user');
    }

}
