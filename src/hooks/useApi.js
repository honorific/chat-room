import {useState, useEffect} from 'react'

export const useApi = (
  apiFunction,
  {autoFetch = true, initialArgs = undefined} = {},
) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(autoFetch)
  const [error, setError] = useState(null)

  const callApi = async (args = initialArgs) => {
    setLoading(true)
    setError(null)

    try {
      const response =
        args === undefined ? await apiFunction() : await apiFunction(args)
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

  // Auto-fetch on mount if enabled
  useEffect(() => {
    // if (autoFetch && initialArgs !== undefined)
    if (autoFetch) {
      callApi(initialArgs)
    }
  }, [apiFunction]) // Only re-fetch if `apiFunction` changes

  return {
    data,
    loading,
    error,
    callApi, // Manual trigger
  }
}
