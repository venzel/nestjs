import { DataSource } from 'typeorm';
import typeorm from '../../configs/typeorm.config';

const tpo = typeorm();

export const datasourceProvider = [
    {
        provide: 'TYPEORM_CONNECTION',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'postgres',
                host: tpo.TYPEORM_HOST,
                port: tpo.TYPEORM_PORT,
                username: tpo.TYPEORM_USER,
                password: tpo.TYPEORM_PASSWORD,
                database: tpo.TYPEORM_DB_NAME,
                entities: [
                    __dirname + '/../../../modules/**/infra/typeorm/entities/*.entity{.ts,.js}',
                ],
                // synchronize: true,
                connectTimeoutMS: 3000,
            });

            return await dataSource.initialize();
        },
    },
];
