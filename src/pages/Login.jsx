import Input from '../components/Input'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="min-h-screen bg-primary-200 flex justify-center items-center">
      <form
        onSubmit={() => {}}
        className="flex flex-col gap-8 w-[25rem] drop-shadow-xl bg-primary-200 p-14"
      >
        <h1 className="text-primary-text text-xl font-semibold text-center">
          Login
        </h1>
        <Input type={'text'} size={'lg'} name={'User Name'} id={'name'} />
        <Input type={'text'} size={'lg'} name={'Password'} id={'password'} />
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
