function ProductCard({ product }) {
  const { name, price, link } = product

  return (
    <div className="flex flex-col w-[21rem] bg-primary-200 p-4 drop-shadow-xl rounded-xl mt-10 gap-5 hover:drop-shadow-2xl transition-all duration-300 cursor-pointer">
      <img
        src={link}
        alt={name}
        className=" max-h-[11.5rem] object-cover rounded-xl"
      />
      <div className="flex flex-col items-center gap-2 pb-4">
        <p className="text-primary-text text-lg font-medium">{name}</p>
        <p className="text-lg text-secondary-100">{price}</p>
      </div>
    </div>
  )
}

export default ProductCard
