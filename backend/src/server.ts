import express from 'express';
import routes from './routes';

import './database/connection';

const server = express();

server.use(express.json());
server.use(routes);

server.listen(3333);