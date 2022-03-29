import express from 'express';
import usersController from '../controllers/usersController';
import usersValidations from '../middlewares/usersValidations';

const usersRouter = express.Router();

usersRouter.post('/', usersValidations.create, usersController.create);

export default usersRouter;