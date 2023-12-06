import { Link } from 'react-router-dom'

function LoginBar() {
  const theme = 'dark'
  return (
    <div
      className={`bg-${theme}-primary-100 flex px-[13%] py-1.5 justify-end text-slate-300 text-sm gap-7`}
    >
      <Link to={'/login'}>
        <span className=" hover:underline cursor-pointer">Sign in/ Guest</span>
      </Link>
      <Link>
        <span className=" hover:underline cursor-pointer">Create Account</span>
      </Link>
    </div>
  )
}

export default LoginBar
