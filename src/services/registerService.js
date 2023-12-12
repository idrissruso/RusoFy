import { backendUrl } from '../utils/urls'

export default async function register(name, email, password) {
  const data = {
    name,
    email,
    password,
  }

  try {
    const response = await fetch(`${backendUrl}/auth/register/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error(`Registration failed with status ${response.status}`)
    }

    return { status: response.status }
  } catch (error) {
    return {
      status: 400,
      error:
        error.message === 'Failed to fetch'
          ? 'Origin is not allowed by Access-Control-Allow-Origin, try running the backend server or use a CORS plugin'
          : 'Email already exists',
    }
  }
}
