function ProductCard({ product, type }) {
  const { name, price, image_url, company } = product

  if (type === 'list') {
    return (
      <div className="flex flex-col w-full bg-primary-200 p-4 drop-shadow-xl rounded-xl mt-10 gap-5 hover:drop-shadow-2xl transition-all duration-300 cursor-pointer">
        <div className="flex flex-row items-center gap-5 w-full group">
          <img
            src={image_url}
            alt={name}
            className=" max-h-[9rem] w-[10rem] object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
          />
          <div className="flex justify-between w-full">
            <div className="flex flex-col items-start gap-2 pb-4">
              <p className="text-primary-text text-lg font-medium">{name}</p>
              <span className="text-sm primary-text-100 font-thin ">
                {company}
              </span>
            </div>
            <h1 className="text-lg font-semibold text-primary-text">
              ${price}
            </h1>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col bg-primary-200 p-4 drop-shadow-xl rounded-xl mt-10 gap-5 cursor-pointer hover:drop-shadow-2xl duration-300 transition-all">
      <img
        src={image_url}
        alt={name}
        className="max-h-[11.5rem] object-cover rounded-xl"
      />
      <div className="flex flex-col items-center gap-2 pb-4">
        <p className="text-primary-text text-lg font-medium">{name}</p>
        <p className="text-lg text-primary-text">{price}</p>
      </div>
    </div>
  )
}

export default ProductCard
