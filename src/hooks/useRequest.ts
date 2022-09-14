import { useState, useEffect } from 'react';

interface AxiosResponse<T>  {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
  request?: any;
}

export function useRequest<T, V> (request: () => Promise<AxiosResponse<T> | undefined>) {
  const [data, setData] = useState<T>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true)

    setTimeout(
      () => {

        request()
        .then(response => {if (response?.data)setData(response.data)})
        .catch(e => setError(e))
        .finally(() => setLoading(false))

      }, 2000 // special for checking
    )
  
  }, [])

  return [data, loading, error]
}
