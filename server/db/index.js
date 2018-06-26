import { Client } from 'pg';
import { magenta, red, cyan } from 'chalk';

const { USERNAME, PW, DB_HOST, DB_PORT, DATABASE } = process.env;

const client = new Client({
  user: USERNAME,
  password: PW,
  host: DB_HOST,
  port: DB_PORT,
  database: DATABASE,
});

client
  .connect()
  .then(() =>
    console.log(
      magenta('PostgreSQL is connected to database: ' + cyan(`${DATABASE}`)),
    ),
  )
  .catch(err => {
    console.log(red('\nConnection to PostgreSQL failed!\n'));
    throw err;
  });

export default client;
