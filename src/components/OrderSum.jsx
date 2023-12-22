import { useSelector } from 'react-redux'

function OrderSum() {
  const { totalPrice, shippingFee,tax } = useSelector((state) => state.cartSlice)
  return (
    <div className="flex flex-col gap-2 bg-primary-600 min-w-[20rem] px-7 py-8 rounded-2xl text-xs text-primary-text drop-shadow-xl max-h-[13rem]">
      <Row title="Subtotal" value={totalPrice} />
      <Row title="Shipping" value={shippingFee} />
      <Row title="Tax" value={tax} />
      <div className="text-sm mt-3">
        <Row
          title="Total"
          value={totalPrice + shippingFee + tax}
          total={true}
        />
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
