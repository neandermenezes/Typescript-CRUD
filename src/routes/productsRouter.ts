import express from 'express';
import productsController from '../controllers/productsController';
import productValidations from '../middlewares/productValidations';

const productsRouter = express.Router();

productsRouter.get('/', productsController.listAll);
productsRouter.post('/', productValidations.create, productsController.create);

export default productsRouter;