import { TypeOrmModuleOptions } from "@nestjs/typeorm"

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  username: "postgres",
  password: "214470",
  port: 5432,
  database: "taskmanagement",
  entities: [__dirname + "/../**/*.entity.{js,ts}"],
  synchronize: false,
  migrations: ["src/migrations/*.{js.ts}"],
  cli: {
    migrationsDir: "src/migrations"
  },
}