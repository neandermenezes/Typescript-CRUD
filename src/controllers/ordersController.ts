import { RequestHandler } from 'express';
import ordersService from '../services/ordersService';

const listAll:RequestHandler = async (req, res) => {
  const orders = await ordersService.listAll();

  return res.status(200).json(orders);
};

const create:RequestHandler = async (req, res) => {
  const { products } = req.body;
  const { username } = req.body;

  const createdOrder = await ordersService.create(products, username);

  return res.status(201).json(createdOrder);
};

export default {
  listAll,
  create,
};