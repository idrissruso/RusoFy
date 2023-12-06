import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getTheme } from '../theme/themeSlice'

function LoginBar() {
  const theme = useSelector(getTheme)

  return (
    <div
      className={`flex px-[15%] py-2 sm:justify-end justify-center text-slate-300 text-sm gap-7 bg-${theme}-primary-100`}
    >
      <Link to={'/login'}>
        <span className=" hover:underline cursor-pointer">Sign in / Guest</span>
      </Link>
      <Link to={'/register'}>
        <span className=" hover:underline cursor-pointer">Create Account</span>
      </Link>
    </div>
  )
}

export default LoginBar
