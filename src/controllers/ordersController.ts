import { RequestHandler } from 'express';
import ordersService from '../services/ordersService';

const listAll:RequestHandler = async (req, res) => {
  const orders = await ordersService.listAll();

  return res.status(200).json(orders);
};

export default {
  listAll,
};