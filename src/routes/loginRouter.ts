import express, { Router } from 'express';
import loginController from '../controllers/loginController';
import loginValidations from '../middlewares/loginValidations';

const loginRouter:Router = express.Router();

loginRouter.post('/', loginValidations.login, loginController.login);

export default loginRouter;