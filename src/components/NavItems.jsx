import { NavLink } from 'react-router-dom'

function NavItems() {
  return (
    <div>
      <ul className="flex">
        <NavItem link="/Home" text="Home" />
        <NavItem link="/about" text="About" />
        <NavItem link="/products" text="Products" />
        <NavItem link="/orders" text="Orders" />
      </ul>
    </div>
  )
}

function NavItem({ link, text }) {
  return (
    <li className="">
      <NavLink
        className={
          'hover:bg-primary-400 rounded-md px-5 py-2 text-xs transition-colors duration-300 text-primary-text'
        }
        to={link}
      >
        {text}
      </NavLink>
    </li>
  )
}

export default NavItems
