import { sign, verify } from 'jsonwebtoken';
import ILogin from '../interfaces/ILogin';
import IToken from '../interfaces/IToken';

const JWT_SECRET = 'fofoca';

const genAuthToken = (userData: ILogin) => {
  const token = sign({ data: userData }, JWT_SECRET);

  return token; 
};

const verifyToken = (token: string) => {
  try {
    const decoded = verify(token, JWT_SECRET) as IToken;
    
    const { username } = decoded.data;

    return username;
  } catch (err) {
    return false;
  }
};

export default {
  genAuthToken,
  verifyToken,
};
