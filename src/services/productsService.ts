import IProduct from '../interfaces/IProduct';
import productsModel from '../models/productsModel';

const listAll = async (): Promise<IProduct[]> => {
  const products = await productsModel.listAll();

  return products;
};

const create = async ({ name, amount }: IProduct): Promise<{ item: IProduct }> => {
  const createdProduct = await productsModel.create({ name, amount });

  return createdProduct;
};

export default {
  listAll,
  create,
};
