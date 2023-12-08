import Input from '../../components/Input'
import SSlider from '../../components/Slider'
import CheckBox from '../../components/CheckBox'
import Button from '../../components/Button'

function SearchForm() {
  return (
    <div className="bg-primary-600 grid gap-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 p-7 select-none rounded-md">
      <Input type={'text'} name={'Search Product'} />
      <Input
        type={'select'}
        name={'Select category'}
        options={['1', '2', '3']}
      />
      <Input
        type={'select'}
        name={'Select Company'}
        options={['1', '2', '3']}
      />
      <Input type={'select'} options={['1', '2', '3']} name={'Sort By'} />
      <SSlider />
      <CheckBox />

      <div className="flex items-center justify-center flex-col">
        <Button text={'Search'} type={'primary'} />
      </div>
      <div className="flex items-center justify-center flex-col">
        <Button text={'Reset'} />
      </div>
    </div>
  )
}

export default SearchForm
