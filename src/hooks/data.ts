import axios, { AxiosError } from 'axios'
import { useEffect, useState } from 'react'

interface IUseDataProps {
  page?: string
  city?: string
}

export function useData({page, city}:IUseDataProps) {

  const base:string = 'https://script.google.com/macros/s/AKfycbypu3-sj7VlCJnixJyTxmdhBDdzo-9KWHzKKLYcRLlp_6HJ5aLkFCF3tEe6zgOfpGYb/exec';

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function fetchData() {
    try {
      setError('')
      setLoading(true)
      console.log('Loading '+page);

      let url:string = page ?  base + '?page=' + page : base;
      url = city ?  url + '&city=' + city : url;

      const response =  await axios.get(url);

      setData(response.data);
      setLoading(false);

    } catch (e: unknown) {
        const error = e as AxiosError;
        setLoading(false);
        setError(error.message);
    }

  }

  useEffect( () => {

    fetchData();

  }, [])

  return {data , error , loading}
}
