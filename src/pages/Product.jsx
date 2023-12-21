import Button from '../components/Button'
import Input from '../components/Input'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getProductById } from '../services/productServices'
import Spinner from '../components/Spinner'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { getCompanyById } from '../services/companyService'
import { useEffect, useState } from 'react'

function Product() {
  const { id } = useParams()
  const Navigate = useNavigate()
  const [company, setCompany] = useState('')

  const { data, isLoading, isError } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductById(id),
  })
  const { name, price, image_url, company: compId, description } = data || {}
  useEffect(() => {
    if (compId) {
      getCompanyById(compId).then((res) => {
        setCompany(res.name)
      })
    }
  }, [compId, data])

  if (isLoading) {
    return <Spinner type={'page'} />
  }

  if (isError) {
    toast.error('Something went wrong')
  }

  return (
    <div>
      <h2 className="text-stone-500 mb-8">
        <span
          onClick={() => Navigate('/home')}
          className="text-sm hover:underline underline-offset-2 cursor-pointer"
        >
          Home
        </span>
        {' > '}
        <span className="text-sm hover:underline underline-offset-2 cursor-pointer">
          Products
        </span>
      </h2>
      <div className="flex gap-14 lg:flex-nowrap flex-wrap text-primary-text">
        <img
          src={image_url}
          alt={name}
          className="min-w-[30rem] h-[25rem] object-cover rounded-2xl "
        />
        <div className="flex flex-col gap-5">
          <h3 className="text-primary-text text-3xl font-bold">{name}</h3>
          <p className="text-xl text-stone-400 font-semibold">{company}</p>
          <p className=" font-thin">${price}</p>
          <p className=" leading-9">{description}</p>
          <p>Colors :</p>
          <div className="flex gap-2">
            <div className={`w-6 h-6 rounded-full bg-tertiary-100`}></div>
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
