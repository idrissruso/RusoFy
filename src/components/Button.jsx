function Button({ type, text, onClick, size }) {
  const color = type === 'primary' ? 'bg-tertiary-100' : 'bg-tertiary-300'
  const hoverColor =
    type === 'primary' ? 'hover:bg-tertiary-200' : 'hover:bg-tertiary-400'
  const sizeClass =
    size === 'lg'
      ? 'lg:px-5 lg:py-3 px-3 py-1.5'
      : 'lg:px-2 lg:py-1 px-1 py-1.5'
  return (
    <button
      className={`self-start ${color} ${sizeClass} rounded-lg text-sm drop-shadow-lg text-btn-100 animate-fadeUp font-medium ${hoverColor} hover:shadow-none transition-all duration-300 ease-in-out ${
        size !== 'lg' && 'w-full'
      }`}
    >
      {text}
    </button>
  )
}

export default Button
