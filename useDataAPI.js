import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

const useDataAPI = (initialData, initialURL) => {
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url);

        setData(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return [{ data, isLoading, isError }, sutUrl];
};
