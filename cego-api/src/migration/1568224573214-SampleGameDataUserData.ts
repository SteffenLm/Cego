import {MigrationInterface, QueryRunner} from "typeorm";

export class SampleGameDataUserData1568224573214 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const queries: string[] = [
            `INSERT INTO game(id, name, creatorid) VALUES(999, 'DER GEILE CEGO SHIT',  1)`,
            `INSERT INTO game_players_user VALUES (999,1)`,
            `INSERT INTO game_players_user VALUES (999,2)`,
            `INSERT INTO game_players_user VALUES (999,3)`,
            `INSERT INTO game_players_user VALUES (999,4)`
        ];
        queries.forEach(query => {
            queryRunner.query(query);
        });
    }

    public async down(queryRunner: QueryRunner): Promise<any> {

    }

}
