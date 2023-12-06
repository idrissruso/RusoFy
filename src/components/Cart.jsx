import { GiShoppingCart } from 'react-icons/gi'

function Cart() {
  return (
    <span className="relative text-lg">
      <GiShoppingCart size={30} />
      <span className={`absolute bg-tertiary-100`}>0</span>
    </span>
  )
}

export default Cart
