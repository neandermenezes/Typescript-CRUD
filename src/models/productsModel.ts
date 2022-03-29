import { ResultSetHeader, RowDataPacket } from 'mysql2';
import IProduct from '../interfaces/IProduct';
import connection from './connection';

const listAll = async (): Promise<IProduct[]> => {
  const query = 'SELECT * FROM Trybesmith.Products';

  const [result] = await connection.execute<RowDataPacket[]>(query);

  return result as IProduct[];
};

const listById = async (id: number): Promise<number> => {
  const query = 'SELECT id FROM Trybesmith.Products WHERE orderId=?';
  const [result] = await connection.execute<RowDataPacket[]>(query, [id]);

  return result[0].id;
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
  listById,
};