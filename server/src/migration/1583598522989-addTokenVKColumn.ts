import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class addTokenVKColumn1583598522989 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const column = new TableColumn({
            type: "varchar",
            name: "tokenVK",
            isNullable: true,
        })

        if (!await queryRunner.hasColumn("user", "tokenVK")) {
            await queryRunner.addColumn("user", column)
        }
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        if (await queryRunner.hasColumn("user", "tokenVK")) {
            await queryRunner.dropColumn("user", "tokenVK")
        }
    }

}
