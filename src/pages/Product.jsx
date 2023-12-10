import Button from '../components/Button'
import Input from '../components/Input'

function Product() {
  return (
    <div>
      <h2 className="text-stone-500 mb-8">
        <span className="text-sm hover:underline underline-offset-2 cursor-pointer">
          Home
        </span>
        {' > '}
        <span className="text-sm hover:underline underline-offset-2 cursor-pointer">
          Products
        </span>
      </h2>
      <div className="flex gap-14 lg:flex-nowrap flex-wrap text-primary-text">
        <img
          src="https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="min-w-[30rem] h-[25rem] object-cover rounded-2xl "
        />
        <div className="flex flex-col gap-5">
          <h3 className="text-primary-text text-3xl font-bold">
            Avant-Garde Lamp
          </h3>
          <p className="text-xl text-stone-400 font-semibold">Modenza</p>
          <p className=" font-thin">$179.99</p>
          <p className=" leading-9">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            voluptate repellendus, vel, illo nulla reprehenderit eum fugiat,
            iusto quam vitae excepturi exercitationem sunt? Ducimus, a sapiente.
            Suscipit at laboriosam consectetur?
          </p>
          <p>Colors :</p>
          <div className="flex gap-2">
            <div className="w-6 h-6 rounded-full bg-tertiary-100"></div>
            <div className="w-6 h-6 rounded-full bg-primary-400"></div>
          </div>
          <div className="w-1/6">
            <Input name={'amount'} type={'amount'} options={['1', '2', '3']} />
          </div>
          <Button text="ADD TO BAG" type={'primary'} size={'lg'} />
        </div>
      </div>
    </div>
  )
}

export default Product
