import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';

dotenv.config();

const { env } = process;

export default new DataSource({
    type: 'postgres',
    host: env.TYPEORM_HOST,
    port: parseInt(env.TYPEORM_PORT),
    username: env.TYPEORM_USER,
    password: env.TYPEORM_PASSWORD,
    database: env.TYPEORM_DB_NAME,
    migrations: [`${__dirname}/migrations/**/*.migration.ts`],
});
