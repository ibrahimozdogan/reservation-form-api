import 'module-alias/register';
import express, { Application } from 'express';
import { EnvironmentEnums } from '@enums';
import { AppDataSource, Router } from '@core';

const app: Application = express();
const port = EnvironmentEnums.SERVER_PORT;

AppDataSource.initialize().then(() => {
    console.log('Data Source has been initialized!');
}).catch((err) => {
    console.error('Error during Data Source initialization', err);
});

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Added for temporary another solution will be checked later

app.use('/', Router);

app.listen(port);

