import { RequestHandler } from 'express';
import authService from '../services/authService';

const validateAuthToken:RequestHandler = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ error: 'Token not found' });

  const user = await authService.verifyToken(authorization);

  if (!user) return res.status(401).json({ error: 'Invalid token' });
  
  req.body.username = user;

  next();
};

export default {
  validateAuthToken,
};