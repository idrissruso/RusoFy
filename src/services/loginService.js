import { backendUrl } from '../utils/urls'

export default async function login(username, password) {
  const data = {
    username,
    password,
  }

  try {
    const response = await fetch(`${backendUrl}/auth/token/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      try {
        const result = await response.json()
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
      }
    }
  } catch (error) {
    return {
      status: 500, // Internal Server Error
      result: 'Something went wrong. Please try again.',
    }
  }
}
