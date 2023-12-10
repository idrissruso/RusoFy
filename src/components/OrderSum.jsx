function OrderSum() {
  return (
    <div className="flex flex-col gap-2 bg-primary-600 min-w-[20rem] px-7 py-8 rounded-2xl text-xs text-primary-text drop-shadow-xl">
      <Row title="Subtotal" value="$ 100" />
      <Row title="Shipping" value="$ 10" />
      <Row title="Tax" value="$ 10" />
      <div className="text-sm mt-3">
        <Row title="Total" value="$ 120" total={true} />
      </div>
    </div>
  )
}

function Row({ title, value, total }) {
  return (
    <div
      className={`flex justify-between ${
        !total && 'border-b-[1.5px] border-btn-100 py-1'
      }`}
    >
      <p className="font-thin">{title}</p>
      <p className="font-semibold">{value}</p>
    </div>
  )
}

export default OrderSum
