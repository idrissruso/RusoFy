import { useState } from 'react'
import Header from '../../components/Header'
import ProductCard from '../product/ProductCard'

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 100,
    link: 'https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 200,
    link: 'https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 3,
    name: 'Product 3',
    price: 300,
    link: 'https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 4,
    name: 'Product 4',
    price: 400,
    link: 'https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 5,
    name: 'Product 5',
    price: 500,
    link: 'https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 6,
    name: 'Product 6',
    price: 600,
    link: 'https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 7,
    name: 'Product 7',
    price: 700,
    link: 'https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 8,
    name: 'Product 8',
    price: 800,
    link: 'https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 9,
    name: 'Product 9',
    price: 900,
    link: 'https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 10,
    name: 'Product 10',
    price: 1000,
    link: 'https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600',
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
