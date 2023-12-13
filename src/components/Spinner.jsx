import { spiral } from 'ldrs'
import { useSelector } from 'react-redux'
spiral.register()

function Spinner() {
  const isLoading = useSelector((state) => state.loading.loading)
  console.log(isLoading)

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
