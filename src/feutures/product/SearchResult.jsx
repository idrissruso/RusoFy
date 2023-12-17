import { useState } from 'react'
import Header from '../../components/Header'
import ProductCard from '../product/ProductCard'
import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../../services/productServices'
import { useParams } from 'react-router-dom'
import Spinner from '../../components/Spinner'
import toast from 'react-hot-toast'

function SearchResult() {
  const [view, setView] = useState('grid')
  const { page } = useParams()
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['products'],
    queryFn: () => getProducts(page),
  })

  function handleView(value) {
    setView(value)
  }

  if (isLoading) {
    return <Spinner type={'page'} />
  }

  if (isError) {
    toast.error('Something went wrong')
  }

  if (!products.length) {
    return (
      <div className="text-primary-text mt-10">
        <Header view={view} handleView={handleView} />
        <div className="flex justify-center items-center h-[50vh]">
          <h2 className="text-3xl">No products found</h2>
        </div>
      </div>
    )
  }

  return (
    <div className="text-primary-text mt-10">
      <Header view={view} handleView={handleView} />
      <div>
        {view === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-1">
            {products.map((product) => (
              <ProductCard product={product} key={product.id} type={'list'} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchResult
