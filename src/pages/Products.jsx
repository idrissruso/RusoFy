import SearchForm from '../feutures/product/SearchForm'
import SearchResult from '../feutures/product/SearchResult'
import Pagination from '../components/Pagination'

function Products() {
  return (
    <div className="flex flex-col gap-10 select-none">
      <SearchForm />
      <SearchResult />
      <Pagination />
    </div>
  )
}

export default Products
