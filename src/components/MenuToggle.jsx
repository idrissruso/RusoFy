import { CgMenuLeftAlt } from 'react-icons/cg'
import NavItem from './NavItem'
import { useState, useRef, useEffect } from 'react'

function MenuToggle() {
  const [visible, setVisible] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setVisible(false)
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  function handleVisibility() {
    setVisible((value) => !value)
  }

  return (
    <div className="flex lg:hidden text-primary-text relative" ref={menuRef}>
      <span onClick={handleVisibility}>
        <CgMenuLeftAlt size={25} />
      </span>
      {visible && <NavMenu />}
    </div>
  )
}

function NavMenu() {
  return (
    <ul className="absolute z-10 top-12 bg-primary-100 px-4 py-2 flex flex-col shrink text-slate-200 rounded-sm min-w-[7rem]">
      <NavItem link="/Home" text="Home" />
      <NavItem link="/about" text="About" />
      <NavItem link="/products" text="Products" />
      <NavItem link="/orders" text="Orders" />
    </ul>
  )
}

export default MenuToggle
