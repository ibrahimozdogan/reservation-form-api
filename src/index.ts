import 'module-alias/register';
import express, {Application} from 'express';
import { EnvironmentEnums } from '@enums';
import { AppDataSource, Router } from '@core';

const app: Application = express();
const port = EnvironmentEnums.SERVER_PORT;

AppDataSource.initialize().then(() => {
    console.log('Data Source has been initialized!');
}).catch((err) => {
    console.error('Error during Data Source initialization', err);
});

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', Router);

app.listen(port);

