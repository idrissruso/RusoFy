import Button from './Button'

function Heading() {
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
      <Button />
    </div>
  )
}

export default Heading
