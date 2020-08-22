import {MigrationInterface, QueryRunner} from "typeorm";

export class GamePlayersUserTable1598136913542 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
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
        return queryRunner.query(createGamePlayerUserTable);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        return queryRunner.query('DROP TABLE game_players_user');
    }
}
