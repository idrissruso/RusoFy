import PageHeader from '../components/PageHeaders'
import Input from '../components/Input'
import OrderSum from '../components/OrderSum'
import ProtectedRoute from '../feutures/auth/ProtectedRoute'
import { useDispatch, useSelector } from 'react-redux'
import { removeItemFromCart } from '../feutures/cart/cartSlice'
import toast from 'react-hot-toast'

function Cart() {
  const cart = useSelector((state) => state.cartSlice)
  const { items } = cart

  return (
    <ProtectedRoute>
      {cart.totalQuantity > 0 ? (
        <>
          <PageHeader>Shopping Cart</PageHeader>
          <div className="flex gap-3">
            <div className=" flex-1">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            <OrderSum />
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-">
          <h2 className="text-3xl font-semibold">Your cart is empty</h2>
          <p className="text-xl font-thin">Please add some items</p>
        </div>
      )}
    </ProtectedRoute>
  )
}

function CartItem({ item }) {
  const dispatch = useDispatch()

  const { name, price, image_url, company, quantity } = item
  return (
    <div className="flex justify-between text-primary-text mt-5 flex-wrap">
      <img
        src={image_url}
        alt=""
        className="w-[8rem] h-[8rem] object-cover rounded-lg"
      />
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold">{name}</h2>
        <p className=" font-thin text-sm">{company}</p>
        <p>
          <span>Color:</span>
          <span></span>
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className='" font-thin text-sm"'>1</h2>
        <Input
          type="amount"
          options={Array.from({ length: 10 }, (_, i) => i + 1)}
          value={quantity}
        />
        <span
          onClick={() => {
            dispatch(removeItemFromCart(item.id))
            toast.success('Removed from cart')
          }}
          className="text-sm text-tertiary-100 hover:underline underline-offset-2 cursor-pointer"
        >
          Remove
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className=" font-thin text-sm">Price</h2>
        <p className=" font-semibold">${price}</p>
      </div>
    </div>
  )
}

export default Cart
