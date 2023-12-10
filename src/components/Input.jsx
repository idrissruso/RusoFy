function Input({ type, options, name, id, onChange, value }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-primary-text">
        {name}
      </label>
      {type === 'text' ? (
        <input
          type="text"
          id={id}
          onChange={onChange}
          value={value}
          className="bg-primary-200 border-[1px] border-gray-500 rounded-lg px-2 py-1 text-primary-text focus:outline-none focus:ring-1 focus:ring-gray-500 active:ring-1 active:ring-gray-500"
        />
      ) : (
        <select
          name={name}
          id={id}
          onChange={onChange}
          value={value}
          defaultValue={'all'}
          className="bg-primary-200 border-[1px] border-gray-500 rounded-lg px-2 py-1 text-primary-text focus:outline-none focus:ring-1 focus:ring-gray-500 active:ring-1 active:ring-gray-500"
        >
          {type === 'amount' ? null : <option value="">all</option>}

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
