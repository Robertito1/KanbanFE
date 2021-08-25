import { AuthApiData } from '../../interface/AuthApiData';
import { FetchOptions } from '../../interface/FetchOptions';
import { baseUrl } from '../util';

const logout = async (): Promise<AuthApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    credentials: 'same-origin',
  };
  return await fetch(`${baseUrl}/auth/logout`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default logout;
