import Button from './Button'
import { useNavigate } from 'react-router-dom'

function Heading() {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col justify-center gap-10">
      <h1 className="text-2xl tracking-wider font-bold text-primary-text lg:text-6xl">
        RusoFy Changes the way people shop
      </h1>
      <p className="text-primary-text lg:text-base text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque amet
        molestias eligendi sunt porro nobis mollitia non maxime modi. Libero
        doloremque earum est, enim quidem incidunt corporis reprehenderit neque
        nam?
      </p>
      <Button
        type={'primary'}
        text={'OUR PRODUCTS'}
        size={'lg'}
        onClick={() => navigate('/products/1')}
      />
    </div>
  )
}

export default Heading
