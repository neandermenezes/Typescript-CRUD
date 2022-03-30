import { RequestHandler } from 'express';
import orderSchemas from '../schema/orderSchemas';

const create:RequestHandler = (req, res, next) => {
  const { products } = req.body;

  const { error } = orderSchemas.create.validate({ products });

  if (error) {
    const [status, message] = error.message.split('|');

    return res.status(+status).json({ error: message });
  }

  next();
};

export default {
  create,
};