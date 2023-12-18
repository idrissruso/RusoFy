import { useContext } from 'react'
import { FilterContext } from '../feutures/product/filterContext'

function Input({ type = 'text', options, name, id, value, size }) {
  const { handleSearch, handleGetCategory, handleGetCompany } =
    useContext(FilterContext) || {}

  const inputStyles = `bg-primary-200 border-[1px] border-gray-500 rounded-lg px-2 py-1 text-primary-text focus:outline-none focus:ring-1 focus:ring-gray-500 active:ring-1 active:ring-gray-500 ${
    size && 'px-3.5 py-2.5'
  }`

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-primary-text">
        {name}
      </label>
      {type === 'text' ? (
        <input
          type={type}
          id={id}
          onChange={(e) => handleSearch(e.target.value)}
          value={value}
          className={inputStyles}
        />
      ) : (
        <select
          name={name}
          id={id}
          onChange={(e) => {
            if (name.includes('category')) {
              handleGetCategory(e.target.value)
            } else {
              handleGetCompany(e.target.value)
            }
          }}
          value={value}
          defaultValue="all"
          className={inputStyles}
        >
          {type !== 'amount' && <option value="">all</option>}

          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
    </div>
  )
}

export default Input
