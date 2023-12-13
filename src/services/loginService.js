import { backendUrl } from '../utils/urls'
import { setLoading } from '../reducers/loadingSlice'

export default async function login(username, password, dispatch) {
  const data = {
    username,
    password,
  }

  try {
    dispatch(setLoading(true))
    const response = await fetch(`${backendUrl}/auth/token/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    dispatch(setLoading(false))
    const result = await response.json()

    if (!response.ok) {
      try {
        return {
          status: response.status,
          result:
            result.username ||
            result.password ||
            result.detail ||
            'Something went wrong. Please try again.',
        }
      } catch (error) {
        return {
          status: response.status,
          result: 'Something went wrong. Please try again.',
        }
      }
    } else {
      return {
        status: response.status,
        result: 'Logged in successfully.',
        data: result,
      }
    }
  } catch (error) {
    return {
      status: 500, // Internal Server Error
      result: 'Something went wrong. Please try again.',
    }
  }
}
