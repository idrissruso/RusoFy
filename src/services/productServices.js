import { backendUrl } from '../utils/urls'

export async function getFeaturedProducts() {
  try {
    const response = await fetch(`${backendUrl}/products/getProducts`)

    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }

    const data = await response.json()

    return data.data
  } catch (error) {
    console.error(error.message)
    throw new Error('An error occurred while fetching data')
  }
}

export async function getProductById(id) {
  try {
    const response = await fetch(`${backendUrl}/products/getProduct/${id}`)

    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }

    const data = await response.json()

    return data.data
  } catch (error) {
    console.error(error.message)
    throw new Error('An error occurred while fetching data')
  }
}
