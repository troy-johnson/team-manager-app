import { useState, useEffect } from 'react';
import { useAuth0 } from './auth0';

export const useApi = (apiFunction, params) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { getTokenSilently } = useAuth0();

  useEffect(() => {
    getTokenSilently().then(token => {
      apiFunction(params, token)
        .then(data => {
          setData(data);
          setIsLoading(false);
        })
        .catch(err => {
          setError({
            error: err,
            message: err.message || 'Something went wrong'
          });
          setIsLoading(false);
        });
    });
  }, [apiFunction, params]);

  return [isLoading, data, error];
};