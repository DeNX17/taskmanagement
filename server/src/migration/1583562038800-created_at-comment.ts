import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class createdAtComment1583562038800 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const column = new TableColumn({
            type: "varchar",
            name: "created_at",
            isNullable: false,
        })
        if (await queryRunner.hasColumn("comment", "date")) {
            await queryRunner.changeColumn("comment", "date", column)
        }
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        const column = new TableColumn({
            type: "varchar",
            name: "date",
            isNullable: false,
        })

        if (await queryRunner.hasColumn("comment", "date")) {
            await queryRunner.dropColumn("comment", "date")
        }
        if (await queryRunner.hasColumn("comment", "created_at")) {
            await queryRunner.changeColumn("comment", "created_at", column)
        }
    }

}
