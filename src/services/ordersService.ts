import IOrder, { IOrderCreate } from '../interfaces/IOrder';
import ordersModel from '../models/ordersModel';
import productsModel from '../models/productsModel';
import usersModel from '../models/usersModel';

const listAll = async (): Promise<IOrder[]> => {
  const orders: IOrder[] = await ordersModel.listAll();

  const products = await Promise.all(orders.map(({ id }) => productsModel.listById(+id)));

  orders
    .map((order, index) => Object.assign(order, { products: [products[index]] }));

  return orders;
};

const create = async (products: Array<number>, username: string): Promise<IOrderCreate> => {
  const userId = await usersModel.findOne(username);

  await ordersModel.create(userId);

  return {
    order: {
      userId,
      products,
    },
  };
};

export default { 
  listAll,
  create,
};