function PageHeader({ children }) {
  return (
    <div>
      <h1 className="text-3xl text-primary-text border-b-[1.5px] pb-7 border-btn-100 font-semibold">
        {children}
      </h1>
    </div>
  )
}

export default PageHeader
