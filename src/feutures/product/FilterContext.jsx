import { createContext, useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../../services/productServices'
import { useParams } from 'react-router-dom'

const FilterContext = createContext()

function Filter({ children }) {
  const { page } = useParams()
  const [products, setProducts] = useState([])
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['products', page],
    queryFn: () => getProducts(page),
  })

  useEffect(() => {
    if (isSuccess) {
      setProducts(data)
    }
  }, [isSuccess, isError, data])

  const query = { isLoading, isError }

  function handleSearch(value) {
    if (value) {
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      )
      setProducts(filteredProducts)
    } else {
      setProducts(data)
    }
  }

  function handleGetCategory(value) {
    if (value) {
      console.log(value)
      const filteredProducts = data.filter(
        (product) => product.category == value
      )
      setProducts(filteredProducts)
    } else if (value === '' || value === 'all') {
      setProducts(data)
    }
  }

  function handleGetPrice(value) {
    if (value) {
      const filteredProducts = data.filter(
        (product) => product.price <= Number(value)
      )
      setProducts(filteredProducts)
    } else if (value === '' || value === 'all') {
      setProducts(data)
    }
  }

  function handleGetCompany(value) {
    if (value) {
      console.log(value)
      const filteredProducts = data.filter((product) => {
        console.log(product.company)
        return product.company == value
      })
      setProducts(filteredProducts)
    } else if (value === '' || value === 'all') {
      setProducts(data)
    }
  }

  return (
    <FilterContext.Provider
      value={{
        query,
        products,
        handleSearch,
        handleGetCategory,
        handleGetPrice,
        handleGetCompany,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export { FilterContext }
export default Filter
