import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class createdAtUser1583521954588 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const date = new Date()
        const created_atColumn = new TableColumn({
            name: "created_at",
            isNullable: true,
            type: "varchar",
        })


        await queryRunner.addColumn("user", created_atColumn)
        await queryRunner.query(`UPDATE "user" SET "created_at" = '${date.toISOString()}' WHERE "created_at" IS NULL`)

        created_atColumn.isNullable = false

        await queryRunner.changeColumn("user", "created_at", created_atColumn)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropColumn("user", "created_at")
    }

}
