import { useState, useEffect } from 'react';

function useDataFetching (dataSource) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  // const error = '';
  const url = dataSource;
  // console.log(url);
  useEffect(() => {
      const fetchJSON = async () => {
        await fetch(url)
          .then(response => response.json())
          .then(data => setData(data))
      }
      try {
        fetchJSON();
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
  }, [url]);
  return [data, loading, error, setData];
}

export default useDataFetching;
