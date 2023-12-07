function ProductCard({ product }) {
  const { name, price, link } = product

  return (
    <div className="flex flex-col w-[22rem] bg-primary-200 p-4 drop-shadow-xl rounded-lg mt-10 gap-7 hover:drop-shadow-2xl transition-all duration-300 cursor-pointer">
      <img
        src={link}
        alt={name}
        className=" max-h-[10rem] object-cover rounded-lg"
      />
      <div className="flex flex-col items-center">
        <p className="text-primary-text text-lg object-cover">{name}</p>
        <p>{price}</p>
      </div>
    </div>
  )
}

export default ProductCard
