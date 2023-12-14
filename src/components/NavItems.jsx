import MenuToggle from './MenuToggle'
import NavItem from './NavItem'
import { useSelector } from 'react-redux'

function NavItems() {
  const user = useSelector((state) => state.user.user)

  return (
    <div>
      <ul className="lg:flex hidden text-primary-text">
        <NavItem link="/Home" text="Home" />
        <NavItem link="/about" text="About" />
        <NavItem link="/products" text="Products" />
        {user && (
          <>
            <NavItem link="/cart" text="Cart" />
            <NavItem link="/checkout" text="Checkout" />
            <NavItem link="/orders" text="Orders" />
          </>
        )}
      </ul>
      <MenuToggle />
    </div>
  )
}

export default NavItems
