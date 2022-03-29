import IProduct from '../interfaces/IProduct';
import productsModel from '../models/productsModel';

const listAll = async (): Promise<IProduct[]> => {
  const products = await productsModel.listAll();

  return products;
};

export default {
  listAll,
};
