import ProductCard from './ProductCard'
import PageHeader from '../../components/PageHeaders'

const SampleProduct = {
  name: 'Product Name',
  price: '$100',
  link: 'https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600',
}

function FeaturedProducts() {
  return (
    <div className="mt-20 flex flex-col">
      <PageHeader>Featured Products</PageHeader>
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <ProductCard product={SampleProduct} />
        <ProductCard product={SampleProduct} />
        <ProductCard product={SampleProduct} />
      </div>
    </div>
  )
}

export default FeaturedProducts
