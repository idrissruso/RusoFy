function Button({ type, text, onClick, size, outlined }) {
  const color =
    type === 'primary'
      ? 'bg-tertiary-100'
      : type === 'secondary'
      ? 'bg-tertiary-400'
      : 'bg-transparent border-2 border-tertiary-100 text-tertiary-100 hover:bg-tertiary-100 hover:text-primary-text'
  const hoverColor =
    type === 'primary' ? 'hover:bg-tertiary-200' : 'hover:bg-tertiary-400'
  const sizeClass =
    size === 'lg' ? 'px-6 py-3' : size === 'md' ? 'px-4 py-2' : 'px-2 py-1'

  return (
    <button
      className={`self-start ${color} ${sizeClass} rounded-lg text-sm drop-shadow-lg text-btn-100 animate-fadeUp font-medium ${hoverColor} hover:shadow-none transition-all duration-300 ease-in-out ${
        size !== 'lg' && 'w-full'
      } ${size === 'md' && 'w-full'}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
