import { CreateCard } from '../../interface/Board';
import { CardApiData } from '../../interface/CardApiData';
import { FetchOptions } from '../../interface/FetchOptions';
import { baseUrl } from '../util';

const postCard = async (card: CreateCard): Promise<CardApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(card),
    credentials: 'same-origin',
  };
  return await fetch(`${baseUrl}/card/create`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: 'Unable to connect to server. Please try again',
    }));
};

export default postCard;
