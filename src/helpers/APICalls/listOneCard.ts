import { CardApiData } from '../../interface/CardApiData';
import { FetchOptions } from '../../interface/FetchOptions';
import { baseUrl } from '../util';

const cardDetails = async (cardId: string): Promise<CardApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'same-origin',
  };
  return await fetch(`${baseUrl}/card/list/${cardId}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: 'Unable to connect to server. Please try again',
    }));
};

export default cardDetails;
