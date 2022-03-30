import ILogin from '../interfaces/ILogin';
import loginModel from '../models/loginModel';
import authService from './authService';

const login = async ({ username, password }: ILogin) => {
  const loginInfo = await loginModel.login({ username, password });

  if (!loginInfo) return false;

  const token = authService.genAuthToken({ username, password });

  return token;
};

export default {
  login,
};
