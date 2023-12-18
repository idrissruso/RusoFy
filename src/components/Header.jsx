import { AiFillAppstore, AiOutlineUnorderedList } from 'react-icons/ai'
import { useState } from 'react'

function Header({ view, handleView, products }) {
  const [shakeAnimation, setShakeAnimation] = useState(false)

  function setValue(value) {
    handleView(value)
    setShakeAnimation(true)
    setTimeout(() => {
      setShakeAnimation(false)
    }, 300)
  }
  return (
    <div className="flex justify-between pb-5 border-b-[1px] border-btn-100">
      <h1>{products} products</h1>
      <div className="flex justify-between text-btn-100">
        <Icon
          key="grid"
          view={view}
          type="grid"
          handleView={setValue}
          shakeAnimation={shakeAnimation}
        >
          <AiFillAppstore size={24} className="cursor-pointer" />
        </Icon>
        <Icon
          key="list"
          view={view}
          handleView={setValue}
          type="list"
          shakeAnimation={shakeAnimation}
        >
          <AiOutlineUnorderedList size={24} className="cursor-pointer" />
        </Icon>
      </div>
    </div>
  )
}

function Icon({ children, view, handleView, type, shakeAnimation }) {
  return (
    <div
      className={`rounded-full p-1.5 transition-all duration-300 ${
        view === type ? 'bg-tertiary-100' : 'text-primary-text'
      } drop-shadow-lg`}
      onClick={() => handleView(type)}
    >
      <div
        className={shakeAnimation && view === type ? 'animate-shakeLeft' : ''}
      >
        {children}
      </div>
    </div>
  )
}

export default Header
