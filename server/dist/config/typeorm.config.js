"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = {
    type: "postgres",
    host: process.env.DB_HOST || "localhost",
    username: "postgres",
    password: "214470",
    port: 5432,
    database: "taskmanagement",
    entities: [__dirname + "/../**/*.entity.{js,ts}"],
    synchronize: false,
    logging: true,
    migrations: ["src/migrations/*.{js.ts}"],
    cli: {
        migrationsDir: "src/migrations"
    },
};
//# sourceMappingURL=typeorm.config.js.map