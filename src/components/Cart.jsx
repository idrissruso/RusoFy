import { GiShoppingCart } from 'react-icons/gi'

function Cart() {
  return (
    <span className="relative text-lg">
      <GiShoppingCart size={35} />
      <span className="absolute bg-tertiary-100 rounded-full px-1 py-0.5 text-xs right-[0] translate-y-[-5px] translate-x-[7px] top-0 text-btn-100">
        10
      </span>
    </span>
  )
}

export default Cart
