import { RequestHandler } from 'express';
import IUser from '../interfaces/IUser';
import usersService from '../services/usersService';

const TEMP_TOKEN = {
  token: 'aaaaaaaaaaaaaaaaaaaaaaaaa',
};

const create:RequestHandler = async (req, res) => {
  const { username, classe, level, password }: IUser = req.body;

  await usersService.create({ username, classe, level, password });

  return res.status(201).json(TEMP_TOKEN);
};

export default {
  create,
};