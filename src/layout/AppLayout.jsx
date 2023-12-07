import Navbar from '../components/Navbar'
import LoginBar from '../components/LoginBar'
import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen ">
      <LoginBar />
      <Navbar />
      <main className="bg-primary-200 flex-1 px-[15%] py-[5%]">
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout
