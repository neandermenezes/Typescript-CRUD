import { RequestHandler } from 'express';
import IProduct from '../interfaces/IProduct';
import productSchemas from '../schema/productSchemas';

const create:RequestHandler = (req, res, next) => {
  const { name, amount }: IProduct = req.body;

  const { error } = productSchemas.create.validate({ name, amount });

  if (error) {
    const [status, message] = error.message.split('|');

    return res.status(+status).json({ error: message });
  }

  next();
};

export default {
  create,
};