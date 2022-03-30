import { ResultSetHeader, RowDataPacket } from 'mysql2';
import IUser from '../interfaces/IUser';
import connection from './connection';

const create = async ({ username, classe, level, password }: IUser) => {
  const query = `INSERT INTO 
  Trybesmith.Users 
  (username, classe, level, password) 
  VALUES (?, ?, ?, ?)`;

  await connection.execute<ResultSetHeader>(query, [username, classe, level, password]);
};

const findOne = async (username: string): Promise<number> => {
  const query = 'SELECT id FROM Trybesmith.Users WHERE username=?';
  const [result] = await connection.execute<RowDataPacket[]>(query, [username]);

  return result[0].id;
};

export default {
  create,
  findOne,
};
