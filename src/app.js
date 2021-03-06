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
    this.server.get('/api', (req, res) => {
      res.status(200).json({
        aplication: 'Cotabox Challenge API',
        status: 'OK',
      });
    });
    const userRouter = new UserRouter('/api/user');
    this.server.use(userRouter.path, userRouter.router);
  }
}

export default new App().server;
