function PageHeader({ children }) {
  return (
    <div>
      <h1 className="text-3xl text-primary-text border-b-[1.5px] py-5 border-btn-100">
        {children}
      </h1>
    </div>
  )
}

export default PageHeader
