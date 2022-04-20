/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState({});
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url) return;

    async function fetchData() {
      try {
        const response = await fetch(url);
        const datas = await response.json();
        setData(datas);
        setIsDataLoading(false);
        setError(false);
      }
      catch (err) {
        console.log('fetch error', error);
        setError(true);
        setData({});
      }
      finally {
        setIsDataLoading(false);
      }
    }
    fetchData();
  }, []);

  return { isDataLoading, data, error };
};
