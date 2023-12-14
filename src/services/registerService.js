import { backendUrl } from '../utils/urls'
import { setLoading } from '../reducers/loadingSlice'

export default async function register(name, email, password, dispatch) {
  const data = {
    username: name,
    email,
    password1: password,
    password2: password,
  }

  try {
    dispatch(setLoading(true))
    const response = await fetch(`${backendUrl}/auth/register/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    dispatch(setLoading(false))

    if (!response.ok) {
      let result

      try {
        // Attempt to parse response as JSON
        result = await response.json()
      } catch (error) {
        // Handle cases where response is not JSON
        return {
          status: response.status,
          result: 'Something went wrong. Please try again.',
        }
      }

      if (
        result.message &&
        (result.message.password1 || result.message.password2)
      ) {
        return {
          status: response.status,
          result: 'Password must be at least 8 characters.',
        }
      } else if (result.message && result.message.email) {
        return {
          status: response.status,
          result: 'Email already exists.',
        }
      } else if (result.message && result.message.username) {
        return {
          status: response.status,
          result: 'Username already exists.',
        }
      } else {
        return {
          status: response.status,
          result: 'Something went wrong.',
        }
      }
    } else {
      return {
        status: response.status,
        result: 'Registration successful.',
      }
    }
  } catch (error) {
    return {
      status: 500, // Internal Server Error
      result: 'Something went wrong. Please try again.',
    }
  }
}
