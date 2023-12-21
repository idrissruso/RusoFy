import { HiOutlineCheck } from 'react-icons/hi'
import { useState } from 'react'
import { useContext } from 'react'
import { FilterContext } from '../feutures/product/filterContext'

function CheckBox() {
  const [checked, setChecked] = useState(false)
  const { handleFreeShipping } = useContext(FilterContext) || {}

  function handleCheckBox() {
    setChecked(!checked)
    handleFreeShipping?.(!checked)
  }

  return (
    <div className="flex items-center justify-center flex-col gap-3">
      <span className="text-primary-text ml-2">Free Shipping</span>
      <div
        className={`w-[1.5rem] h-[1.5rem] border-[1px] border-tertiary-100 ${
          checked ? 'bg-tertiary-100' : ''
        } rounded-md cursor-pointer flex items-center justify-center`}
        onClick={() => handleCheckBox()}
      >
        {checked && (
          <HiOutlineCheck size={20} className="animate-goUp text-btn-100" />
        )}
      </div>
    </div>
  )
}

export default CheckBox
