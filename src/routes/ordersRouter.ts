import express from 'express';
import ordersController from '../controllers/ordersController';
import auth from '../middlewares/auth';
import orderValidations from '../middlewares/orderValidations';

const ordersRouter = express.Router();

ordersRouter.get('/', ordersController.listAll);
ordersRouter.post('/', auth.validateAuthToken, orderValidations.create, ordersController.create);

export default ordersRouter;