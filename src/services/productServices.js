import { backendUrl } from '../utils/urls'
import { setLoading } from '../reducers/loadingSlice'

export async function getFeaturedProducts(dispatch) {
  try {
    dispatch(setLoading(true))
    const response = await fetch(`${backendUrl}/products/getProducts`)
    dispatch(setLoading(false))

    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }

    const data = await response.json()

    return data
  } catch (error) {
    console.error(error.message)
    throw new Error('An error occurred while fetching data')
  }
}
