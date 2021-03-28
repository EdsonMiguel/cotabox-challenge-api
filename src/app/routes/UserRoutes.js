import { Router } from 'express';
import { validate } from 'express-validation';
import {
  getFetchUserById, postCreateUser, putUpdateUser, deleteUser,
} from './User.validation';
import userController from '../controllers/UserController';

class UserRouter {
  constructor(path) {
    this.router = Router();
    this.path = path;
    this.init();
  }

  init() {
    this.router.get('/', userController.getFetchAllUsers);
    this.router.get('/:id', validate(getFetchUserById), userController.getFetchUserById);
    this.router.post('/', validate(postCreateUser), userController.postCreateUser);
    this.router.put('/:id', validate(putUpdateUser), userController.putUpdateUser);
    this.router.delete('/:id', validate(deleteUser), userController.deleteUser);
  }
}

export default UserRouter;
