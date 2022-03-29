import { ResultSetHeader, RowDataPacket } from 'mysql2';
import IProduct from '../interfaces/IProduct';
import connection from './connection';

const listAll = async (): Promise<IProduct[]> => {
  const query = 'SELECT * FROM Trybesmith.Products';

  const [result] = await connection.execute<RowDataPacket[]>(query);

  return result as IProduct[];
};

const create = async ({ name, amount }: IProduct): Promise<{ item: IProduct }> => {
  console.log(name, amount);
  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';

  const [result] = await connection.execute<ResultSetHeader>(query, [name, amount]);

  return {
    item: {
      id: result.insertId,
      name,
      amount,
    },
  };
};

export default {
  listAll,
  create,
};