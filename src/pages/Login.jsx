import Input from '../components/Input'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import login from '../services/loginService'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import { login as loginAction } from '../feutures/auth/loginSlice'

function Login() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  async function handleSubmit(e) {
    e.preventDefault()
    const username = e.target.name.value
    const password = e.target.password.value
    const result = await login(username, password, dispatch)

    if (result.status === 200) {
      toast.success(result.result)
      navigate('/home')
      const accessToken = result.data.access
      const loggedInUser = jwtDecode(accessToken)
      dispatch(loginAction(loggedInUser.userName))
      localStorage.setItem('activeUser', loggedInUser.userName)
    } else {
      toast.error(result.result)
    }
  }

  return (
    <div className="min-h-screen bg-primary-200 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 w-[25rem] drop-shadow-xl bg-primary-200 p-14"
      >
        <h1 className="text-primary-text text-xl font-semibold text-center">
          Login
        </h1>
        <Input
          type={'text'}
          size={'lg'}
          name={'User Name'}
          id={'name'}
          value={userName}
          onChange={(value) => setUserName(value)}
        />
        <Input
          type={'text'}
          size={'lg'}
          name={'Password'}
          id={'password'}
          value={password}
          onChange={(value) => setPassword(value)}
        />
        <Button type={'primary'} text={'LOGIN'} size={'md'} />
        <div className="text-primary-text text-sm text-center">
          <p className="flex justify-center">
            Not a Member Yet ? &nbsp;
            <span className="text-sm text-tertiary-100 hover:underline underline-offset-2 cursor-pointer">
              <Link to={'/register'}>Register</Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Login
