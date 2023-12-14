import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import toast from 'react-hot-toast'

function ProtectedRoute({ children }) {
  const user = useSelector((state) => state.user.user)

  if (user) {
    return children
  } else {
    toast.error('You need to login first')
    return (
      <Navigate
        replace
        to="/login"
        state={{ from: window.location.pathname }}
      />
    )
  }
}

export default ProtectedRoute
