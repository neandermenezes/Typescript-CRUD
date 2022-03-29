import { ResultSetHeader } from 'mysql2';
import IUser from '../interfaces/IUser';
import connection from './connection';

const create = async ({ username, classe, level, password }: IUser) => {
  const query = `INSERT INTO 
  Trybesmith.Users 
  (username, classe, level, password) 
  VALUES (?, ?, ?, ?)`;

  await connection.execute<ResultSetHeader>(query, [username, classe, level, password]);
};

export default {
  create,
};
