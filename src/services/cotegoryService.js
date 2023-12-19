import { backendUrl } from '../utils/urls'

export default async function getCategories() {
  try {
    const response = await fetch(`${backendUrl}/categories/getCategories`)
    const data = await response.json()
    if (response.ok) {
      return data
    } else throw new Error('Something went wrong')
  } catch (error) {
    return error.message
  }
}
