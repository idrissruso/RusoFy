import { GiShoppingCart } from 'react-icons/gi'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Cart() {
  const cart = useSelector((state) => state.cartSlice)
  const { totalQuantity } = cart

  return (
    <Link to="/cart">
      <span className="relative text-lg cursor-pointer">
        <GiShoppingCart size={35} />
        <span className="absolute bg-tertiary-100 rounded-full px-2 py-0.5 text-xs right-[0] translate-y-[-5px] translate-x-[7px] top-0 text-btn-100">
          {totalQuantity}
        </span>
      </span>
    </Link>
  )
}

export default Cart
