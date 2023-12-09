import FrontImages from '../components/FrontImages'
import Heading from '../components/Heading'
import FeaturedProducts from '../feutures/product/FeaturedProducts'
function Home() {
  return (
    <>
      <div className="flex gap-7">
        <Heading />
        <FrontImages />
      </div>
      <FeaturedProducts />
    </>
  )
}

export default Home
