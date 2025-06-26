import {useState, useEffect} from 'react'

export const useApi = (apiFunction, initialArgs = null) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(initialArgs !== null)
  const [error, setError] = useState(null)

  const callApi = async (args) => {
    setLoading(true)
    setError(null)

    try {
      const response = await apiFunction(args)
      setData(response.data)
      return response.data
    } catch (err) {
      const error = err.response?.data?.message
        ? new Error(err.response.data.message)
        : err instanceof Error
        ? err
        : new Error('An unknown error occurred')
      setError(error)
      throw error
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (initialArgs !== null) {
      callApi(initialArgs)
    }
  }, [apiFunction])

  return {
    data,
    loading,
    error,
    callApi, // if you want to refetch manually
  }
}
