import { RowDataPacket } from 'mysql2';
import IProduct from '../interfaces/IProduct';
import connection from './connection';

const listAll = async (): Promise<IProduct[]> => {
  const query = 'SELECT * FROM Trybesmith.Products';

  const [result] = await connection.execute<RowDataPacket[]>(query);

  return result as IProduct[];
};

export default {
  listAll,
};