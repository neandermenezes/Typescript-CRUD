import { RowDataPacket } from 'mysql2';
import ILogin from '../interfaces/ILogin';
import connection from './connection';

const login = async ({ username, password }: ILogin): Promise<ILogin[] | false> => {
  const query = 'SELECT * FROM Trybesmith.Users WHERE username=? AND password=?';

  const [result] = await connection.execute<RowDataPacket[]>(query, [username, password]);

  if (result.length === 0) return false;

  return result[0] as ILogin[];
};

export default {
  login,
};