/* eslint-disable import/first */
import express, { NextFunction, Request, Response } from 'express';
import pino from 'pino-http';
import helmet from 'helmet';
import PokemonRouterAdapter from './_adapters/PokemonRouteAdapter';
import logger from './utility/logger';

const port = process.env.SERVER_PORT || 3000;
const app = express();

app.use(helmet());
app.use(pino());
app.use(express.json());

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function errorHandler(error: any, req: Request, res: Response, next: NextFunction) {
  logger.error(error);
  res.status(error.code || 500).send({ error: error.message || 'Internal server error' });
}

app.use('/', PokemonRouterAdapter);

app.use(errorHandler);

app.get('/', (req: Request, res: Response) => {
  res.send('Im alive');
});

app.listen(port, () => logger.info(`Server listening at port ${port}`));