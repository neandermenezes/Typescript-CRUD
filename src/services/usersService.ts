import IUser from '../interfaces/IUser';
import usersModel from '../models/usersModel';

const create = async ({ username, classe, level, password }: IUser) => {
  await usersModel.create({ username, classe, level, password });
};

export default {
  create,
};