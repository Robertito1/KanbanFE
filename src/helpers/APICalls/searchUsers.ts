import { FetchOptions } from '../../interface/FetchOptions';
import { SearchUsersApiData } from '../../interface/User';
import { baseUrl } from '../util';

interface Props {
  search: string;
}

export async function searchUsers({ search }: Props): Promise<SearchUsersApiData> {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    credentials: 'same-origin',
  };
  return await fetch(`${baseUrl}/users?search=${search}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
}
