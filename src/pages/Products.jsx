import { useState } from 'react'
import SearchForm from '../feutures/product/SearchForm'
import SearchResult from '../feutures/product/SearchResult'

function Products() {
  return (
    <div className="flex flex-col gap-10 select-none">
      <SearchForm />
      <SearchResult />
      <Pagination />
    </div>
  )
}

function Pagination() {
  const [page, setPage] = useState(1)

  function nextPage() {
    setPage((prev) => (prev >= 3 ? 1 : prev + 1))
  }

  function prevPage() {
    setPage((prev) => (prev <= 1 ? 3 : prev - 1))
  }

  function changePage(value) {
    setPage(value)
  }

  return (
    <div className="flex w-[15rem] bg-primary-600 self-end rounded-lg text-primary-text">
      <Page page={page} onClick={prevPage}>
        Prev
      </Page>
      <Page page={page} setCurrentPage={changePage}>
        1
      </Page>
      <Page page={page} setCurrentPage={changePage}>
        2
      </Page>
      <Page page={page} setCurrentPage={changePage}>
        3
      </Page>
      <Page page={page} onClick={nextPage}>
        Next
      </Page>
    </div>
  )
}

function Page({ children, onClick, setCurrentPage, page }) {
  return (
    <div
      className={`shrink hover:bg-primary-700 flex-1 flex justify-center px-3 py-2 cursor-pointer uppercase ${
        children === 'Prev'
          ? 'rounded-l-lg'
          : children === 'Next'
          ? 'rounded-r-lg'
          : ''
      } ${
        page && children && page.toString() === children.toString()
          ? 'bg-primary-700'
          : ''
      } transition-all duration-300`}
      onClick={() => {
        onClick ? onClick() : setCurrentPage(children)
      }}
    >
      {children}
    </div>
  )
}

export default Products
