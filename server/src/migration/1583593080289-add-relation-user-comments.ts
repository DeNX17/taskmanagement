import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class addRelationUserComments1583593080289 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const column = new TableColumn({
            type: "uuid",
            name: "authorId",
            isNullable: true,
        })

        await queryRunner.addColumn("comment", column)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropColumn("comment", "authorId")
    }

}
