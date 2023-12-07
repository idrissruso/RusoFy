import { NavLink } from 'react-router-dom'

function NavItem({ link, text }) {
  return (
    <li className="">
      <NavLink
        className={
          'hover:bg-primary-400 rounded-md px-5 py-2 text-xs transition-colors duration-300'
        }
        to={link}
      >
        {text}
      </NavLink>
    </li>
  )
}

export default NavItem
