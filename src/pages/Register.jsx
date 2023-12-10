import Input from '../components/Input'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="min-h-screen bg-primary-200 flex justify-center items-center">
      <div className="flex flex-col gap-8 md:w-[25rem] drop-shadow-xl bg-primary-200 p-14">
        <h1 className="text-primary-text text-xl font-semibold text-center">
          Register
        </h1>
        <Input type={'text'} size={'lg'} name={'User Name'} id={'name'} />
        <Input type={'text'} size={'lg'} name={'Email'} id={'email'} />
        <Input type={'text'} size={'lg'} name={'Password'} id={'password'} />
        <Button type={'primary'} text={'REGISTER'} size={'md'} />
        <div className="text-primary-text text-sm text-center">
          <p className="flex justify-center">
            Already a member ? &nbsp;
            <span className="text-sm text-tertiary-100 hover:underline underline-offset-2 cursor-pointer">
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
