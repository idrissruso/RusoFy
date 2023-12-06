import { NavLink } from 'react-router-dom'

function NavItems() {
  return (
    <div>
      <ul className="flex text-slate-50 gap-5">
        <li>
          <NavLink to="/Home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/orders">Orders</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default NavItems
