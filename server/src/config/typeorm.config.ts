import { TypeOrmModuleOptions } from "@nestjs/typeorm"
// 172.31.39.130

const isProduction = process.env.NODE_ENV === "production"

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: "postgres",
  host: isProduction ? "172.31.39.130" : "localhost",
  username: "postgres",
  password: "214470",
  port: 5432,
  database: "taskmanagement",
  entities: [__dirname + "/../**/*.entity.{js,ts}"],
  synchronize: true,
  logging: !isProduction,
  migrations: ["src/migrations/*.{js.ts}"],
  cli: {
    migrationsDir: "src/migrations"
  },
}