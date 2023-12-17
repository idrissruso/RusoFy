import { useState } from 'react'
import { useParams } from 'react-router-dom'

function Pagination() {
  const [page, setPage] = useState(1)
  const { page: currentPage } = useParams()
  console.log(currentPage)

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
    <form
      action={`${page}`}
      method="get"
      className="flex w-[15rem] bg-primary-600 self-end rounded-lg text-primary-text mt-5"
    >
      <Page currentPage={currentPage} page={page} onClick={prevPage}>
        Prev
      </Page>
      <Page currentPage={currentPage} page={page} setCurrentPage={changePage}>
        1
      </Page>
      <Page currentPage={currentPage} page={page} setCurrentPage={changePage}>
        2
      </Page>
      <Page currentPage={currentPage} page={page} setCurrentPage={changePage}>
        3
      </Page>
      <Page currentPage={currentPage} page={page} onClick={nextPage}>
        Next
      </Page>
    </form>
  )
}

function Page({ children, onClick, setCurrentPage, page, currentPage }) {
  return (
    <button
      type="submit"
      className={`shrink hover:bg-primary-700 flex-1 flex justify-center px-3 py-2 cursor-pointer uppercase ${
        children === 'Prev'
          ? 'rounded-l-lg'
          : children === 'Next'
          ? 'rounded-r-lg'
          : ''
      } ${
        currentPage &&
        children &&
        currentPage.toString() === children.toString()
          ? 'bg-primary-700'
          : ''
      } transition-all duration-300`}
      onClick={() => {
        onClick ? onClick() : setCurrentPage(children)
      }}
    >
      {children}
    </button>
  )
}

export default Pagination
