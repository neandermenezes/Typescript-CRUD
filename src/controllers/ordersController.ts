import { RequestHandler } from 'express';
import ordersService from '../services/ordersService';

const listAll:RequestHandler = async (req, res) => {
  const orders = await ordersService.listAll();

  return res.status(200).json(orders);
};

// const create:RequestHandler = async (req, res) => {
//   const products
// }

export default {
  listAll,
  // create,
};