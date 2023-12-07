import ProductCard from '../feutures/product/ProductCard'

const SampleProduct = {
  name: 'Product Name',
  price: '$100',
  link: 'https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600',
}

function FeaturedProducts() {
  return (
    <div className="mt-20 flex flex-col">
      <h1 className="text-3xl text-primary-text border-b-[1.5px] py-5 border-btn-100">
        Featured Products
      </h1>
      <div className="flex gap-5">
        <ProductCard product={SampleProduct} />
        <ProductCard product={SampleProduct} />
        <ProductCard product={SampleProduct} />
      </div>
    </div>
  )
}

export default FeaturedProducts
