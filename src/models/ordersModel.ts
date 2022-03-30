import { RowDataPacket } from 'mysql2';
import IOrder from '../interfaces/IOrder';
import connection from './connection';

const listAll = async () => {
  const queryOrders = 'SELECT * FROM Trybesmith.Orders';

  const [orders] = await connection.execute<RowDataPacket[]>(queryOrders);

  return orders as IOrder[];
};

const create = async (userId: number) => {
  const query = 'INSERT INTO Trybesmith.Orders (userId) VALUES (?)';

  await connection.execute(query, [userId]);
};

export default {
  listAll,
  create,
};
