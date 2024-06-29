import { UsersInterface, filterUsers } from '../../utils/usersFilter';
import { useState } from 'react';
import Input from '../input/Input';

interface FilterProps {
    filterDetails: any;
    onChange: (v : any)=> void;
    onSubmit: (v :boolean)=> void;
}


const FilterModal:React.FC<FilterProps> = ({filterDetails, onChange, onSubmit})=> {
  return (
    <div>
        <Input type="text" value={filterDetails.username} onChange={onChange} placeholder='user' label='username'/>
        <Input type="text" value={filterDetails.email} onChange={onChange} placeholder='email'/>
        <Input type="text" value={filterDetails.date} onChange={onChange} placeholder='date'/>
        <Input type="text" value={filterDetails.phone} onChange={onChange} placeholder='date'/>
    </div>
  )
}

export default FilterModal