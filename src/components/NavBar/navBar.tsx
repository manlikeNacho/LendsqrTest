import React, { useState } from 'react'
import { logoIcon, bellIcon, avatarImg, searchIcon } from '../../static'
import Input from '../input/Input'
import AvatarHandler from './avartarHandler'
import '../../styling/navBar.style.scss'

const NavBar:React.FC = ()=> {
    const [searchValue, setSearchValue] = useState('')
  return (
    <div className='top-navBar'>
        <div className="logo-wrapper">
            <img
            src={logoIcon}
            alt='lendsqr-logo'
            className='logo'
            />
            <div className="searchHandler">
              <Input
              placeholder='Search for anything'
              type='text'
              value={searchValue}
              onChange={(e)=> setSearchValue(e.target.value)}
              rightIcon={searchIcon}
              />
            </div>
        </div>

        <div className='avatar-wrapper'>
            <span className="docs-link">docs</span>
            <img src={bellIcon} alt='notification-icon' className='notification-icon'/>
            <AvatarHandler src={avatarImg} alt='user-name' name='nacho' />
        </div>
    </div>
  )
}

export default NavBar


