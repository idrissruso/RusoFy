import Cart from './Cart'
import Logo from './Logo'
import NavItems from './NavItems'
import Toggle from './Toggle'

function Navbar() {
  return (
    <div className="bg-slate-950 px-[15%] py-2 flex items-center justify-between">
      <Logo />
      <NavItems />
      <div className="text-stone-50 flex items-center">
        <Toggle />
        <Cart />
      </div>
    </div>
  )
}

export default Navbar
