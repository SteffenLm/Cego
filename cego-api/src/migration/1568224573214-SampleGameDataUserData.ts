import {MigrationInterface, QueryRunner} from "typeorm";

export class SampleGameDataUserData1568224573214 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const queries: string[] = [
            `INSERT INTO game(id, name, creatorid) VALUES(1, 'DER GEILE CEGO SHIT',  1)`,
            `INSERT INTO game_players_user VALUES (1,1)`,
            `INSERT INTO game_players_user VALUES (1,2)`,
            `INSERT INTO game_players_user VALUES (1,3)`,
            `INSERT INTO game_players_user VALUES (1,4)`
        ];
        queries.forEach(query => {
            queryRunner.query(query);
        });
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        queryRunner.query('DELETE FROM game_players_user WHERE gameId = 1');
        queryRunner.query('DELETE FROM game WHERE id = 1');

    }

}
