import { spiral } from 'ldrs'
import { useSelector } from 'react-redux'
spiral.register()

function Spinner({ type }) {
  const isLoading = useSelector((state) => state.loading.loading)
  console.log(isLoading)

  if (type === 'page') {
    console.log('page')
    return (
      <div>
        <div className="spinner">
          <l-spiral color={'white'} />
        </div>
      </div>
    )
  }

  return (
    <div>
      {isLoading && (
        <div className="spinner">
          <l-spiral color={'white'} />
        </div>
      )}
    </div>
  )
}

export default Spinner

// Default values shown
