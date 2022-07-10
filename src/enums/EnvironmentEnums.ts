import * as dotenv from 'dotenv';

dotenv.config();

declare const process: {
    env: {
        DATABASE_HOST: string;
        DATABASE_PORT: number;
        DATABASE_NAME: string;
        DATABASE_USERNAME: string;
        DATABASE_PASSWORD: string;
        SERVER_PORT: string
    };
};

const { env } = process;

const EnvironmentEnums = {
    DATABASE_HOST: env.DATABASE_HOST,
    DATABASE_PORT: env.DATABASE_PORT,
    DATABASE_USERNAME: env.DATABASE_USERNAME,
    DATABASE_PASSWORD: env.DATABASE_PASSWORD,
    DATABASE_NAME: env.DATABASE_NAME,
    SERVER_PORT: env.SERVER_PORT,
};

export default EnvironmentEnums;
