import { useState } from 'react'

function Slider({ onChange }) {
  const [value, setValue] = useState(10000)
  const normalizedValue = (value / 10000) * 100

  return (
    <div className="flex flex-col gap-5">
      <label
        htmlFor="slider"
        className="text-primary-text flex justify-between"
      >
        <span>Select Price</span>
        <span>${value},00</span>
      </label>
      <div className="relative w-full flex items-center flex-col justify-center">
        <div className="w-full h-1 bg-gray-300 absolute"></div>
        <input
          type="range"
          min="0"
          max="10000"
          step="1"
          value={value}
          className="absolute appearance-none w-full rounded-full outline-none focus:outline-none active:outline-none h-6"
          onChange={(e) => {
            setValue(e.target.value)
          }}
          style={{
            background: `linear-gradient(to right, var(--tertiary-100), var(--tertiary-100) ${normalizedValue}%, transparent ${normalizedValue}%, transparent 100%)`,
          }}
        />
      </div>
      <div className="text-primary-text flex justify-between">
        <span>0</span>
        <span>max:$10000,00</span>
      </div>
    </div>
  )
}

export default Slider
