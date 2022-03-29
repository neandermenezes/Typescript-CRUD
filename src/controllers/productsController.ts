import { RequestHandler } from 'express';
import productsService from '../services/productsService';

const listAll:RequestHandler = async (req, res) => {
  const products = await productsService.listAll();

  res.status(200).json(products);
};

const create:RequestHandler = async (req, res) => {
  const { name, amount } = req.body;

  const createdProduct = await productsService.create({ name, amount });

  return res.status(201).json(createdProduct);
};

export default {
  listAll,
  create,
};