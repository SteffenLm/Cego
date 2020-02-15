import {MigrationInterface, QueryRunner} from "typeorm";

export class AddRoundTable1578854237942 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const createUserTable = 
        `CREATE TABLE round (
            id INT(11) NOT NULL AUTO_INCREMENT,
            gameId INT(11) NOT NULL,
            playerId INT(11) NOT NULL,
            value INT(11) NOT NULL,
            PRIMARY KEY (id),
            CONSTRAINT FK_game_on_round FOREIGN KEY (gameId) REFERENCES game (id) ON DELETE CASCADE ON UPDATE NO ACTION,
            CONSTRAINT FK_player_on_round FOREIGN KEY (playerId) REFERENCES user (id) ON DELETE CASCADE ON UPDATE NO ACTION
        )`;        
        queryRunner.query(createUserTable);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        queryRunner.query('DROP TABLE round');
    }

}
