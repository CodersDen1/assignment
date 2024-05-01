/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAddressCard, faArrowLeft, faArrowRight, faGear, faHome, faList12, faMessage, faRecordVinyl, faVideo , faDashboard , faGifts} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function Sidebar() {
    
    const Menus = [
        {title:"Dashboard",icon:faDashboard ,gap:true , pageName:"dashboard"},
        {title:"Products" , icon:faGifts , pageName:"products"},
        
    ]

    const [isSideBarOpen,setIsSideBarOpen] = useState(true)

    

  return (
    <div className={`${isSideBarOpen ? 'w-44' : 'w-20'} duration-300 bg-blue-950 border-white text-2xl text-white  min-h-[calc(100vh)] pt-5 relative items-center`}>
        
            <FontAwesomeIcon onClick={()=> setIsSideBarOpen(!isSideBarOpen)} icon={isSideBarOpen ? faArrowLeft : faArrowRight} className={` duration-300 absolute cursor-pointer -right-3 top-2 bg-white  text-black rounded-full border-2 p-1 text-lg`} />
            <Link to="/">
            <div className='flex gap-x-4 items-center p-4'>
                <FontAwesomeIcon icon={faHome} className={`cursor-pointer duration-300`}/>
                <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!isSideBarOpen && 'scale-0'}`}>Home</h1>
            </div>  
            </Link>
            <ul className='pt-6'>
                {Menus.map((menu,index)=>(
                   
                   <Link key={index} to={`/api/${menu.pageName}`}> 
                   <li key={index} className={`flex gap-x-4 items-center cursor-pointer  mx-2  p-3 hover:bg-[rgba(255,255,255,0.17)] rounded-lg ${menu.gap ? 'mt-9':'mt-2'}`}> 
                        <FontAwesomeIcon icon={menu.icon}/>
                        <h1 className={`${!isSideBarOpen && 'scale-0'} duration-200 ${isSideBarOpen?'text-lg':'text-[0px]'} `}>{menu.title}</h1>
                   </li>
                   </Link>
                    
                ))}
            </ul>

    </div>
  )
}

export default Sidebar