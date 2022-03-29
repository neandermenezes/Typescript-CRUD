import { RequestHandler } from 'express';
import productsService from '../services/productsService';

const listAll:RequestHandler = async (req, res) => {
  const products = await productsService.listAll();

  res.status(200).json(products);
};

export default {
  listAll,
};