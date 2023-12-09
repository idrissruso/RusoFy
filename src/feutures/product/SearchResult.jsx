import { useState } from 'react'
import Header from '../../components/Header'
import ProductCard from '../product/ProductCard'

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 100,
    link: 'https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600',
    company: 'Company 1',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 100,
    link: 'https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600',
    company: 'Company 2',
  },
  {
    id: 3,
    name: 'Product 3',
    price: 100,
    link: 'https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600',
    company: 'Company 3',
  },
  {
    id: 4,
    name: 'Product 4',
    price: 100,
    link: 'https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600',
    company: 'Company 4',
  },
  {
    id: 5,
    name: 'Product 5',
    price: 100,
    link: 'https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600',
    company: 'Company 5',
  },
  {
    id: 6,
    name: 'Product 6',
    price: 100,
    link: 'https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600',
    company: 'Company 6',
  },
  {
    id: 7,
    name: 'Product 7',
    price: 100,
    link: 'https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600',
    company: 'Company 7',
  },
  {
    id: 8,
    name: 'Product 8',
    price: 100,
    link: 'https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600',
    company: 'Company 8',
  },
  {
    id: 9,
    name: 'Product 9',
    price: 100,
    link: 'https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600',
    company: 'Company 9',
  },
]

function SearchResult() {
  const [view, setView] = useState('grid')
  function handleView(value) {
    setView(value)
  }

  return (
    <div className="text-primary-text mt-10">
      <Header view={view} handleView={handleView} />
      <div>
        {view === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
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
