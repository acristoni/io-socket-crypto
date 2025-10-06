import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1759402517957 implements MigrationInterface {
    name = 'Init1759402517957'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "encryptedName" character varying NOT NULL, "iv" character varying NOT NULL, "authTag" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
