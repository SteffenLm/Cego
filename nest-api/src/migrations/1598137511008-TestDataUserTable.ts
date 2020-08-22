import {MigrationInterface, QueryRunner} from "typeorm";

export class TestDataUserTable1598137511008 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const queries: string[] = [
            `INSERT INTO user (id, username, password) VALUES (1, 'steffen', '$2b$12$yGbuMfZF86KcsfMvhBbKouADeWg67hO/gZPsbc88LwRc7kzB48yT6')`,
            `INSERT INTO user (id, username, password) VALUES (2, 'peter', '$2b$12$yGbuMfZF86KcsfMvhBbKouADeWg67hO/gZPsbc88LwRc7kzB48yT6')`,
            `INSERT INTO user (id, username, password) VALUES (3, 'yanner', '$2b$12$yGbuMfZF86KcsfMvhBbKouADeWg67hO/gZPsbc88LwRc7kzB48yT6')`,
            `INSERT INTO user (id, username, password) VALUES (4, 'lader', '$2b$12$yGbuMfZF86KcsfMvhBbKouADeWg67hO/gZPsbc88LwRc7kzB48yT6')`,
            `INSERT INTO user (id, username, password) VALUES (5, 'hanni', '$2b$12$yGbuMfZF86KcsfMvhBbKouADeWg67hO/gZPsbc88LwRc7kzB48yT6')`,
            `INSERT INTO user (id, username, password) VALUES (6, 'dennis', '$2b$12$yGbuMfZF86KcsfMvhBbKouADeWg67hO/gZPsbc88LwRc7kzB48yT6')`,
            `INSERT INTO user (id, username, password) VALUES (7, 'mayer', '$2b$12$yGbuMfZF86KcsfMvhBbKouADeWg67hO/gZPsbc88LwRc7kzB48yT6')`,
            `INSERT INTO user (id, username, password) VALUES (8, 'manu', '$2b$12$yGbuMfZF86KcsfMvhBbKouADeWg67hO/gZPsbc88LwRc7kzB48yT6')`,
            `INSERT INTO user (id, username, password) VALUES (9, 'alu', '$2b$12$yGbuMfZF86KcsfMvhBbKouADeWg67hO/gZPsbc88LwRc7kzB48yT6')`
        ];
        queries.forEach(query => {
            queryRunner.query(query);
        });
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        return queryRunner.query('DELETE FROM user WHERE id <= 8');
    }

}
