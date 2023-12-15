import ProductCard from './ProductCard'
import PageHeader from '../../components/PageHeaders'
import { getFeaturedProducts } from '../../services/productServices'
import { useQuery } from '@tanstack/react-query'
import Spinner from '../../components/Spinner'
import toast from 'react-hot-toast'

function FeaturedProducts() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getFeaturedProducts,
  })

  // get 3 random products
  const random3Products = data
    ?.sort(() => Math.random() - Math.random())
    .slice(0, 3)

  if (isLoading) return <Spinner type={'page'} />
  if (error) toast.error('Error fetching products')

  return (
    <div className="mt-20 flex flex-col">
      <PageHeader>Featured Products</PageHeader>
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {random3Products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts
