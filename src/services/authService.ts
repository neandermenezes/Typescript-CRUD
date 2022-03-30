import { sign } from 'jsonwebtoken';
import ILogin from '../interfaces/ILogin';

const JWT_SECRET = 'fofoca';

const genAuthToken = (userData: ILogin) => {
  const token = sign({ data: userData }, JWT_SECRET);
  console.log(token);
  return token; 
};

export default {
  genAuthToken,
};
