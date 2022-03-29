import express from 'express';
import productsController from '../controllers/productsController';

const productsRouter = express.Router();

productsRouter.get('/', productsController.listAll);

export default productsRouter;