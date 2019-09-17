import {MigrationInterface, QueryRunner, QueryFailedError} from "typeorm";

export class InitialTables1567893389612 implements MigrationInterface {

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
        queryRunner.query(createUserTable);
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
        queryRunner.query(createGameTable);
        const createGamePlayerUserTable = 
        `CREATE TABLE game_players_user (
            gameId INT(11) NOT NULL,
            userId INT(11) NOT NULL,
            PRIMARY KEY (gameId,userId),
            KEY INDEX_GAME (gameId),
            KEY INDEX_USER (userId),
            CONSTRAINT FK_GAME FOREIGN KEY (gameId) REFERENCES game (id) ON DELETE CASCADE ON UPDATE NO ACTION,
            CONSTRAINT FK_USER FOREIGN KEY (userId) REFERENCES user (id) ON DELETE CASCADE ON UPDATE NO ACTION
        )`;
        queryRunner.query(createGamePlayerUserTable);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        queryRunner.query('DROP TABLE game_players_user');
        queryRunner.query('DROP TABLE game');
        queryRunner.query('DROP TABLE user');
    }

}
