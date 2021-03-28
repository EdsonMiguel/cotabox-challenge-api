import express from 'express';
import cors from 'cors';
import UserRouter from './app/routes/UserRoutes';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: false }));
    this.server.use(cors());
  }

  routes() {
    const userRouter = new UserRouter('/api/user');
    this.server.use(userRouter.path, userRouter.router);
  }
}

export default new App().server;
