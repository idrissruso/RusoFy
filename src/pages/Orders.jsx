import PageHeader from '../components/PageHeaders'
import Table from '../components/Table'
import Pagination from '../components/Pagination'
import ProtectedRoute from '../feutures/auth/ProtectedRoute'

function Orders() {
  return (
    <ProtectedRoute>
      <PageHeader>Your Orders</PageHeader>
      <div className="flex flex-col gap-3 mt-5">
        <h1 className="font-thin mb-4 text-primary-text">Total Orders: 127</h1>
        <Table />
        <Pagination />
      </div>
    </ProtectedRoute>
  )
}

export default Orders
