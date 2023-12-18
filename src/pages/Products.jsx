import SearchForm from '../feutures/product/SearchForm'
import SearchResult from '../feutures/product/SearchResult'
import Pagination from '../components/Pagination'
import Filter from '../feutures/product/filterContext'

function Products() {
  return (
    <div className="flex flex-col gap-10 select-none">
      <Filter>
        <SearchForm />
        <SearchResult />
        <Pagination />
      </Filter>
    </div>
  )
}

export default Products
