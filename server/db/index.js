import { Client } from 'pg';
import { magenta, red, cyan } from 'chalk';

const {
    NODE_ENV,
    API_PORT = 4000,
    USERNAME,
    PW,
    DB_HOST,
    DB_PORT,
    DATABASE,
} = process.env

const client = new Client({
    user: USERNAME,
    host: DB_HOST,
    database: DATABASE,
    password: PW,
    port: DB_PORT,
});

client.connect()
  .then(() => console.log(magenta("PostgreSQL is connected to database: " + cyan(`${DATABASE}`))))
  .catch((err) => {
    console.log(red('\nConnection to PostgreSQL failed!\n'));
    throw err;
  });

export default client;
