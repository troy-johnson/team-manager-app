import { useState, useEffect } from 'react';
import { useAuth0 } from './auth0';
import axios from 'axios';

export const useApi = (apiFunction, params) => {
  const [data, setData] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const { getTokenSilently } = useAuth0();

  useEffect(() => {
    getTokenSilently().then(token => {
      const http = axios.create({
        headers: {'Authorization': `Bearer ${token}`}
      })
      apiFunction(params, http)
        .then(data => {
          console.log('data', data)
          setData(data);
          setLoaded(true);
        })
        .catch(err => {
          setError({
            error: err,
            message: err.message || 'Something went wrong'
          });
          setLoaded(true);
        });
    });
  }, []);

  return [loaded, data, error];
};