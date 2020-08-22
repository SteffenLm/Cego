import {MigrationInterface, QueryRunner} from "typeorm";

export class GameTable1598136883321 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const createGameTable = 
        `CREATE TABLE game (
            id INT(11) NOT NULL AUTO_INCREMENT,
            name VARCHAR(30) NOT NULL,
            created datetime(6) NOT NULL DEFAULT current_timestamp(6),
            creatorId INT(11) NOT NULL,
            PRIMARY KEY (id),
            KEY INDEX_CREATOR (creatorId),
            CONSTRAINT FK_CREATOR FOREIGN KEY (creatorId) REFERENCES user (id) ON DELETE NO ACTION ON UPDATE NO ACTION
        )`;
        return queryRunner.query(createGameTable);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        return queryRunner.query('DROP TABLE game');
    }

}
