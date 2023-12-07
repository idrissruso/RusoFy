import { HiMoon } from 'react-icons/hi'
import { BsFillSunFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { getTheme } from '../theme/themeSlice'
import { useDispatch } from 'react-redux'
import { changeTheme } from '../theme/themeSlice'
import { useEffect } from 'react'

function Toggle() {
  const theme = useSelector(getTheme)
  const dispatch = useDispatch()

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark')
    }
  }, [theme])

  const rotationStyle = {
    transition: 'transform 0.3s ease', // Adjust the duration and easing as needed
    transform: theme === 'dark' ? 'rotate(0deg)' : 'rotate(180deg)',
  }
  return (
    <span
      style={rotationStyle}
      className="cursor-pointer text-"
      onClick={() => dispatch(changeTheme())}
    >
      {theme === 'dark' ? <HiMoon size={20} /> : <BsFillSunFill size={20} />}
    </span>
  )
}

export default Toggle
