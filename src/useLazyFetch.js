import { useState } from 'react';
import axios from 'axios';

export default config => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios(config);
      setData(res.data);
      setLoading(false);
      setError('');
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  };

  return [getData, { data, error, loading }];
};