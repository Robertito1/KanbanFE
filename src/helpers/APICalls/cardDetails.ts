import { CardApiData, UpdatedCard } from '../../interface/CardApiData';
import { FetchOptions } from '../../interface/FetchOptions';
import { baseUrl } from '../util';

const cardDetails = async (card: UpdatedCard): Promise<CardApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(card),
    credentials: 'include',
  };
  return await fetch(`${baseUrl}/card/edit/${card._id}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: 'Unable to connect to server. Please try again',
    }));
};

export default cardDetails;
