import PageHeader from '../components/PageHeaders'
import Input from '../components/Input'
import OrderSum from '../components/OrderSum'
import ProtectedRoute from '../feutures/auth/ProtectedRoute'

function Cart() {
  return (
    <ProtectedRoute>
      <PageHeader>Shopping Cart</PageHeader>
      <div className="flex justify-between text-primary-text mt-5 gap-9 flex-wrap">
        <img
          src="https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="w-[8rem] h-[8rem] object-cover rounded-lg"
        />
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold">Chick Chair</h2>
          <p className=" font-thin text-sm">Luxora</p>
          <p>
            <span>Color:</span>
            <span></span>
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className='" font-thin text-sm"'>Quantity</h2>
          <Input type="amount" options={['1', '2', '3']} />
          <span className="text-sm text-tertiary-100 hover:underline underline-offset-2 cursor-pointer">
            Remove
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className=" font-thin text-sm">Price</h2>
          <p className=" font-semibold">$ 100</p>
        </div>
        <OrderSum />
      </div>
    </ProtectedRoute>
  )
}

export default Cart
