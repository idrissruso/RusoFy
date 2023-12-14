import PageHeader from '../components/PageHeaders'
import Input from '../components/Input'
import Button from '../components/Button'
import OrderSum from '../components/OrderSum'
import ProtectedRoute from '../feutures/auth/ProtectedRoute'

function Checkout() {
  return (
    <ProtectedRoute>
      <PageHeader>Place your Order</PageHeader>
      <div className="grid md:grid-cols-2 mt-5 gap-10 ">
        <div className="flex flex-col gap-4">
          <h1 className="text-lg font-semibold text-primary-text">
            Shipping Information
          </h1>

          <Input type="text" name="First Name" id="name" size="lg" />
          <Input type="text" name="Address" id="address" size="lg" />
          <Button type="primary" size="lg" text="PLACE YOUR ORDER" />
        </div>
        <div>
          <OrderSum />
        </div>
      </div>
    </ProtectedRoute>
  )
}

export default Checkout
