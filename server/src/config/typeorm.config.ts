import { TypeOrmModuleOptions } from "@nestjs/typeorm"

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: "postgres",
  host: "172.31.44.19",
  username: "postgres",
  password: "214470",
  port: 5432,
  database: "taskmanagement",
  entities: [__dirname + "/../**/*.entity.{js,ts}"],
  synchronize: true,
  logging: false,
  migrations: ["src/migrations/*.{js.ts}"],
  cli: {
    migrationsDir: "src/migrations"
  },
}