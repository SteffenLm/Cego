import { MigrationInterface, QueryRunner } from "typeorm";

export class TestDataGameTable1598137587930 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        return queryRunner.query(`INSERT INTO game(id, name, creatorid) VALUES(1, 'DER GEILE CEGO SHIT',  1)`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        return queryRunner.query('DELETE FROM game WHERE id = 1');
    }

}
