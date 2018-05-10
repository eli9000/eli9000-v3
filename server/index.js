import express from 'express';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { blue, yellow } from 'chalk';

import db from './db';
import schema from './db/postgres/handler.js';

// import twitter from './api/twitter';

const app = express();

const { NODE_ENV, API_PORT = 4000 } = process.env;

app.use('*', cors());

app.use(bodyParser.json());

app.use(
  '/graphql',
  graphqlExpress({
    schema,
    context: {
      db,
    },
    allowUndefinedInRosolve: true,
    graqhiql: true,
  }),
);

app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql',
  }),
);

app.use('/healthcheck', (req, res) => res.status(200).send('ok'));

app.listen(API_PORT, () =>
  console.log(blue('Server listening to PORT: ' + yellow(`${API_PORT}`))),
);
