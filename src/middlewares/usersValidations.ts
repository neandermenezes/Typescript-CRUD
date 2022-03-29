import { RequestHandler } from 'express';
import IUser from '../interfaces/IUser';
import userSchemas from '../schema/userSchemas';

const create:RequestHandler = (req, res, next) => {
  const { username, classe, level, password }: IUser = req.body;

  const { error } = userSchemas.create.validate({ username, classe, level, password });
  
  if (error) {
    const [status, message] = error.message.split('|');
    
    return res.status(+status).json({ error: message });
  }

  if (typeof level !== 'number') return res.status(422).json({ error: 'Level must be a number' });

  next();
};

export default {
  create,
};