import Input from '../components/Input'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import register from '../services/registerService'
import toast from 'react-hot-toast'

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    const result = register(
      e.target.name.value,
      e.target.email.value,
      e.target.password.value
    )
    if ((await result).status === 200) {
      toast.success('Registered Successfully')
      navigate('/login')
    } else {
      toast.error((await result).error)
    }
  }

  return (
    <div className="min-h-screen bg-primary-200 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 md:w-[25rem] drop-shadow-xl bg-primary-200 p-14"
      >
        <h1 className="text-primary-text text-xl font-semibold text-center">
          Register
        </h1>
        <Input
          type={'text'}
          size={'lg'}
          name={'User Name'}
          id={'name'}
          value={name}
          onChange={(value) => {
            setName(value)
          }}
        />
        <Input
          type={'text'}
          size={'lg'}
          name={'Email'}
          id={'email'}
          value={email}
          onChange={(value) => {
            setEmail(value)
          }}
        />
        <Input
          type={'text'}
          size={'lg'}
          name={'Password'}
          id={'password'}
          value={password}
          onChange={(value) => {
            setPassword(value)
          }}
        />
        <Button type={'primary'} text={'REGISTER'} size={'md'} />
        <div className="text-primary-text text-sm text-center">
          <p className="flex justify-center">
            Already a member ? &nbsp;
            <span className="text-sm text-tertiary-100 hover:underline underline-offset-2 cursor-pointer">
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Register
