import { backendUrl } from '../utils/urls'

export default async function register(e) {
  e.preventDefault()

  const data = {
    email: e.target.email.value,
    password: e.target.password.value,
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
    return { status: 400, error: error.message }
  }
}
