import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Setting } from "./entity/Settings";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "My-account",
    synchronize: false,
    logging: false,
    entities: [User, Setting],
    migrations: ['src/migrations/*.ts'],
});
