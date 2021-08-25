import { ColumnApiData } from '../../interface/BoardApiData';
import { FetchOptions } from '../../interface/FetchOptions';
import { baseUrl } from '../util';

const deleteColumn = async (columnId: string): Promise<ColumnApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };
  return await fetch(`${baseUrl}/column/${columnId}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: 'Unable to connect to server. Please try again',
    }));
};

export default deleteColumn;
