import ProductCard from './ProductCard'
import PageHeader from '../../components/PageHeaders'
import { getFeaturedProducts } from '../../services/productServices'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

function randomGenerator(max, min) {
  return Math.floor(Math.random() * (max - min) + min)
}

function FeaturedProducts() {
  const [products, setProducts] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    async function fetchProducts() {
      const { data } = await getFeaturedProducts(dispatch)
      const temp = []
      for (let i = 0; i < 3; i++) {
        const random = randomGenerator(data.length, 0)
        temp.push(data[random])
      }
      if (temp.length > 0) {
        setProducts(temp)
      }
    }
    fetchProducts()
  }, [dispatch, setProducts])

  return (
    <div className="mt-20 flex flex-col">
      <PageHeader>Featured Products</PageHeader>
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts
