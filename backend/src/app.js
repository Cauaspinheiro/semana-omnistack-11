import express from 'express';
import cors from 'cors';

import { errors } from 'celebrate';
import routes from './routes/routes';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: true }));
  }

  routes() {
    this.server.use(routes);
    this.server.use(errors());
  }
}

export default new App().server;
