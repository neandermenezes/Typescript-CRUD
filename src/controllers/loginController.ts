import { RequestHandler } from 'express';
import ILogin from '../interfaces/ILogin';
import loginService from '../services/loginService';

const login:RequestHandler = async (req, res) => {
  const { username, password }: ILogin = req.body;

  const loginInfo = await loginService.login({ username, password });
  
  if (!loginInfo) return res.status(401).json({ error: 'Username or password invalid' });

  return res.status(200).json({ token: loginInfo });
};

export default {
  login,
};
