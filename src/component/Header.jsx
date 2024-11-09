import React, { useState } from 'react'
import pic from "../../public/Raju.png"
import { TiThMenuOutline } from "react-icons/ti";
import { IoIosCloseCircleOutline } from "react-icons/io";
import {Link} from "react-scroll"

export default function Header() {
  const [menu,setMenu]=useState(false);
  const navItems=[
    {
      id:1,
      text:"Home"
    },
    {
      id:2,
      text:"About"
    },
    {
      id:3,
      text:"Portfolio"
    },
    {
      id:4,
      text:"Experiance"
    },
    {
      id:5,
      text:"Contect"
    },
  ]
  return (
    <>
    <div
     className='NavBar max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 bg-white'>
      <div className='flex justify-between items-center h-19 '>
        {/* logo and web Name div */}
          <div className='flex space-x-2'> 
            <img src={pic} className='h-14 w-14  rounded-full cursor-pointer mt-1'alt=" Raju Photo" />
            <h1 className='font-semibold text-xl cursor-pointer mt-1'>Raj<span className='text-green-500 text-2xl'>u</span>
            <p className='text-sm'>Web Developer</p>
            </h1>
          </div>
          {/* Menu bar div  for desktop*/}
          <div className='max-sm:hidden'>
            <ul className='flex space-x-8 text-xl cursor-pointer'>
            {
                  navItems.map(({id,text}) =>(
                    <li className='hover:scale-105 duration-200 cursor-pointer' 
                    key={id}>
                      <Link to={text}
                      smooth={true} 
                      duration={500}
                      offset={-70}
                      activeClass="active"
                      >
                      {text}</Link>  
                    </li>
                  ) )}
            </ul>
          </div>
          <div onClick={()=>setMenu(!menu)} className=' md:hidden cursor-pointer'>{menu?<IoIosCloseCircleOutline size={24}/>:< TiThMenuOutline size={24}/>}</div>
      </div>
       {/* Menu bar div  for Mobile*/}
       {
        menu &&(
            <div className='bg-white'>
              <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl '>
              {
                  navItems.map(({id,text}) =>(
                    <li className='hover:scale-105 duration-200 cursor-pointer font-semibold' key={id}>
                      <Link 
                      onClick={() => setMenu(!menu)}
                      to={text}
                      smooth={true} 
                      duration={500}
                      offset={-70}
                      activeClass="active"
                      >
                      {text}</Link> 
                    </li>
                  ) )
                }
              </ul>
          </div>
        )
       }
    </div>
    </>
  )
}
