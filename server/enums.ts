import express from 'express';

const app = express();

// Enums are named constants that we NEVER want to change
enum HttpStatus {
  SUCCESS = 200,
  NO_CONTENT = 204,
  NOT_AUTHORIZED = 401,
  NOT_FOUND = 404,
  TEST = 'TEST',
}

app.use((req: express.Request, res: express.Response, next) => {
  // On a successful query we can respond with the right status
  res.sendStatus(HttpStatus.SUCCESS);
  // On a not found we can throw a not found
  // res.sendStatus(HttpStatus.NOT_FOUND);
});
