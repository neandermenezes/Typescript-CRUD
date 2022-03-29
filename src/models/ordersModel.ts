import { RowDataPacket } from 'mysql2';
import IOrder from '../interfaces/IOrder';
import connection from './connection';

const listAll = async () => {
  const queryOrders = 'SELECT * FROM Trybesmith.Orders';
  // const queryProducts = `SELECT p.id as product_id, o.id as order_id FROM Trybesmith.Products as p
  // JOIN Trybesmith.Orders as o
  // ON p.id = o.id`;

  const [orders] = await connection.execute<RowDataPacket[]>(queryOrders);

  return orders as IOrder[];
};

export default {
  listAll,
};
