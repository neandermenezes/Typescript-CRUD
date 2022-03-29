import IOrder from '../interfaces/IOrder';
import ordersModel from '../models/ordersModel';
import productsModel from '../models/productsModel';

const listAll = async (): Promise<IOrder[]> => {
  const orders: IOrder[] = await ordersModel.listAll();

  const products = await Promise.all(orders.map(({ id }) => productsModel.listById(id)));

  orders
    .map((order, index) => Object.assign(order, { products: [products[index]] }));

  return orders;
};

export default { 
  listAll,
};