import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { logout } from '../feutures/auth/loginSlice'

function LoginBar() {
  const user = useSelector((state) => state.user.user)
  const dispatch = useDispatch()

  function handleLogout() {
    localStorage.removeItem('activeUser')
    dispatch(logout())
  }

  if (user) {
    return (
      <div className="flex px-[15%] py-2 sm:justify-end justify-center text-slate-300 text-sm gap-7 bg-primary-100">
        <span>Hello ! {user} 😊</span>
        <span
          className=" cursor-pointer hover:underline underline-offset-2"
          onClick={handleLogout}
        >
          <Link to="/login">Logout</Link>
        </span>
      </div>
    )
  }
  return (
    <div className="flex px-[15%] py-2 sm:justify-end justify-center text-slate-300 text-sm gap-7 bg-primary-100">
      <Link to={'/login'}>
        <span className="hover:underline cursor-pointer">Sign in / Guest</span>
      </Link>
      <Link to={'/register'}>
        <span className="hover:underline cursor-pointer">Create Account</span>
      </Link>
    </div>
  )
}

export default LoginBar
