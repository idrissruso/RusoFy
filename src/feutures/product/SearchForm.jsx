import Input from '../../components/Input'
import SSlider from '../../components/Slider'
import CheckBox from '../../components/CheckBox'
import Button from '../../components/Button'
import { useQuery } from '@tanstack/react-query'
import getCategories from '../../services/categoryService'
import Spinner from '../../components/Spinner'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import getCompanies from '../../services/companyService'

function SearchForm() {
  const Navigate = useNavigate()
  const {
    data: categories,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: () => getCategories(),
  })

  const {
    data: companies,
    isError: cError,
    isLoading: cLoading,
  } = useQuery({
    queryKey: ['companies'],
    queryFn: () => getCompanies(),
  })

  if (isLoading || cLoading) {
    return <Spinner type={'page'} />
  }

  if (isError || cError) {
    toast.error('Error fetching categories')
    Navigate('/home')
  }

  return (
    <div className="bg-primary-600 grid gap-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 p-7 select-none rounded-md">
      <Input type={'text'} name={'Search Product'} />
      <Input type={'select'} name={'Select category'} options={categories} />
      <Input type={'select'} name={'Select Company'} options={companies} />
      <Input
        type={'select'}
        options={['price-lowest', 'price-highest', 'name-a', 'name-z']}
        name={'Sort By'}
      />
      <SSlider />
      <CheckBox />

      <div className="flex items-center justify-center flex-col"></div>
      <div className="flex items-center justify-center flex-col">
        <Button text={'Search'} type={'primary'} />
      </div>
    </div>
  )
}

export default SearchForm
