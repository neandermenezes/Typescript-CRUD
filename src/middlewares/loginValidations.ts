import { RequestHandler } from 'express';
import ILogin from '../interfaces/ILogin';
import loginSchemas from '../schema/loginSchemas';

const login:RequestHandler = async (req, res, next) => {
  const { username, password }: ILogin = req.body;

  const { error } = loginSchemas.login.validate({ username, password });

  if (error) {
    const [status, message] = error.message.split('|');

    return res.status(+status).json({ error: message });
  }

  next();
};

export default {
  login,
};
