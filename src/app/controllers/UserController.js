import User from '../models/UserModel';
import { USER_ERRORS } from '../errors';

// eslint-disable-next-line consistent-return
const checkParticipationValue = (participation, res) => {
  if (participation < 0) {
    return res.status(400).json({ error: USER_ERRORS.PARTICIPATION_LESS_THAN_0 });
  }

  if (participation > 100) {
    return res.status(400).json({ error: USER_ERRORS.PARTICIPATION_GREATER_THAN_100 });
  }
};

class UserController {
  async getFetchUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findById(id).exec();
      if (!user) {
        return res.status(404).json({ error: USER_ERRORS.NOT_FOUND });
      }

      return res.json(user);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  async getFetchAllUsers(req, res) {
    try {
      const users = await User.find().exec();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  async postCreateUser(req, res) {
    try {
      const reqUser = req.body;
      checkParticipationValue(reqUser?.participation, res);

      const user = await User.create(reqUser);
      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  async putUpdateUser(req, res) {
    try {
      const { id } = req.params;
      const reqUser = req.body;
      checkParticipationValue(reqUser?.participation, res);

      const updatedUser = await User.findByIdAndUpdate(id, reqUser);
      if (!updatedUser) {
        return res.status(404).json({ error: USER_ERRORS.NOT_FOUND });
      }

      return res.status(200).json(updatedUser);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const deletedUser = await User.findByIdAndDelete(id);
      if (!deletedUser) {
        return res.status(404).json({ error: USER_ERRORS.NOT_FOUND });
      }

      return res.status(200).json(deletedUser);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
}

export default new UserController();
