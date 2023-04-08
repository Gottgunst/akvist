import axios, { AxiosError } from "axios"
import { useEffect, useState } from "react"

interface IUseDataProps {
  page?: string
  city?: string
}

export function useData({page, city}:IUseDataProps) {

  const base:string = "https://script.google.com/macros/s/AKfycbxB0tRe1l1VQiRQ6Bmi9mGXSxPOj9BP3Kh2-5jk9Ov8Ocz87LdUJtYdok7k6c5hbu79/exec"

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function fetchDirections() {
    try {
      setError('')
      setLoading(true)

      let url:string = page ?  base + "?page=" + page : base;
      url = city ?  url + "&city=" + city : url;

      const response =  await axios.get(url)

      setData(response.data)
      setLoading(false)

    } catch (e: unknown) {
        const error = e as AxiosError
        setLoading(false)
        setError(error.message)
    }

  }

  useEffect( () => {

    fetchDirections()

  }, [])

  return {data , error , loading}
}
