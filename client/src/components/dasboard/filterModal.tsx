import './filterModal.style.scss'
import Input from '../input/Input';
import { dropdownIcon } from '../../static';
import Button from '../button/btn';

interface FilterProps {
    filterDetails: any;
    onChange: (v : any)=> void;
    onSubmit: ()=> void;
}


const FilterModal: React.FC<FilterProps> = ({ filterDetails, onChange, onSubmit }) => {
  return (
    <div className='filter-Modal'>
        <Input name="username" type="text" value={filterDetails.username} onChange={onChange} placeholder='Select' label='Organization' labelType='leftLabel' rightIcon={dropdownIcon} iconBgColor={false}/>
        <Input name="username" type="text" value={filterDetails.username} onChange={onChange} placeholder='user' label='username' labelType='leftLabel' />
        <Input name="email" type="text" value={filterDetails.email} onChange={onChange} placeholder='email' label='email' labelType='leftLabel'/>
        <Input name="date" type="text" value={filterDetails.date} onChange={onChange} placeholder='date' label='date' labelType='leftLabel'/>
        <Input name="phone" type="text" value={filterDetails.phone} onChange={onChange} placeholder='phone number' label='phone number' labelType='leftLabel'/>
        <div className='button-group'>
          <Button onClick={onSubmit} variant='outlined'>reset</Button>
          <Button onClick={onSubmit} >submit</Button>
        </div>
    </div>
  )
}

export default FilterModal
