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
    document.querySelector('html').classList.toggle('dark')
  })

  const rotationStyle = {
    transition: 'transform 0.3s ease', // Adjust the duration and easing as needed
    transform: theme === 'dark' ? 'rotate(180deg)' : 'rotate(0deg)',
  }
  return (
    <span
      style={rotationStyle}
      className="cursor-pointer"
      onClick={() => dispatch(changeTheme())}
    >
      {theme === 'dark' ? <BsFillSunFill /> : <HiMoon />}
    </span>
  )
}

export default Toggle
