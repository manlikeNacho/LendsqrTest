import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { businessRoutes, customerRoutes, settingsRoutes } from '../../utils/sideBarRoutes';
import "../../styling/sideBar.style.scss"
import { briefcaseIcon, dropdownIcon } from '../../static';

interface sideTabsProps {
  text: string;
  data: any;
  setShow: (state: boolean) => void;
  classname?: string;
}



const SideTabs:React.FC<sideTabsProps> = ({text, data, classname, setShow}) => {
  const navigate = useNavigate()

  const handlerClick = (to: string) => {
    setShow(false)
    navigate(to)
  }

  return (  
  <div className={`links ${classname}`}>
      <h2>{text}</h2>
      {data.map((item: any, i: any) => (
        <div
          onClick={() => handlerClick(item.to)}
          // to={item.to}
          key={i}
          className={`link`}
        >
          <img src={item.img} alt="/" />
          <span>{item.text}</span>
        </div>
      ))}
  </div>
  )
}

interface sideBarProps {
  show: boolean;
  setShow: (state: boolean) => void;
}


const SideBar:React.FC<sideBarProps> = ({show, setShow}) => {

  return (
    <div className="sideBar-wrapper">
      <div className={`links`}>
        <div
            className={`link`}
          >
            <img src={briefcaseIcon} alt="/" />
            <span style={{opacity:1}}>Switch Organization</span>
            <img src={dropdownIcon} alt="/" />
          </div>
    </div>
      <SideTabs text='Customers' data={customerRoutes} setShow={setShow}/>
      <SideTabs text='Business' data={businessRoutes} setShow={setShow}/>
      <SideTabs text='Settings' data={settingsRoutes} setShow={setShow} classname='settings'/>
    </div>
  )
}

export default SideBar