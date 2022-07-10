import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { EnvironmentEnums } from '@enums';
import * as Tables from '@entities';

const { DATABASE_HOST, DATABASE_PORT, DATABASE_USERNAME, DATABASE_PASSWORD, DATABASE_NAME } = EnvironmentEnums;

const AppDataSource = new DataSource({
    type: 'mysql',
    host: DATABASE_HOST,
    port: DATABASE_PORT,
    username: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME,
    entities: [
        ...Object.values(Tables),
    ],
    synchronize: false,
    logging: 'all',
    logger: 'file',
    cache: {
        duration: 100,
    },
});

AppDataSource.initialize()
    .then(() => {
        console.log('Data Source has been initialized!');
    })
    .catch((err) => {
        console.error('Error during Data Source initialization', err);
    });

export default AppDataSource;
