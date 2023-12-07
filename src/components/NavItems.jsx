import MenuToggle from './MenuToggle'
import NavItem from './NavItem'
function NavItems() {
  return (
    <div>
      <ul className="lg:flex hidden text-primary-text">
        <NavItem link="/Home" text="Home" />
        <NavItem link="/about" text="About" />
        <NavItem link="/products" text="Products" />
        <NavItem link="/orders" text="Orders" />
      </ul>
      <MenuToggle />
    </div>
  )
}

export default NavItems
