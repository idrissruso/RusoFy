import { backendUrl } from '../utils/urls'

export default async function getCompanies() {
  try {
    const response = await fetch(`${backendUrl}/companies/getCompanies`)
    const data = await response.json()
    if (response.ok) {
      return data.data
    } else throw new Error('Something went wrong')
  } catch (error) {
    return error.message
  }
}

export async function getCompanyById(id) {
  try {
    const response = await fetch(`${backendUrl}/companies/getCompany/${id}`)
    const data = await response.json()
    if (response.ok) {
      return data.data
    } else throw new Error('Something went wrong')
  } catch (error) {
    return error.message
  }
}
