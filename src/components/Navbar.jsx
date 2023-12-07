import Cart from './Cart'
import Logo from './Logo'
import NavItems from './NavItems'
import Toggle from './Toggle'

function Navbar() {
  return (
    <div className="px-[15%] py-2 flex items-center justify-between bg-primary-600 ">
      <Logo />
      <NavItems />
      <div className="text-primary-text flex items-center gap-[25%]">
        <Toggle />
        <Cart />
      </div>
    </div>
  )
}

export default Navbar
