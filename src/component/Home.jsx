import React from 'react'
import pic from "../../public/Raju.png"
import { ReactTyped} from "react-typed";

import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TbFileTypeCss } from "react-icons/tb";

export default function Home() {
  return (
    <div
    name="Home" className='NavBar max-w-screen-2xl container mx-auto px-8 md:px-20 my-20 mt-14'>
        <div className='flex flex-col md:flex-row'>
          {/* div left */}
          <div className='md:w-1/2 md:ml-30 md:mt-8 mt-6 order-1'>
          <img src={pic} className='rounded-full md:w-[450px] md:h-[450px]  border-8 border-red-500 bg-black mt-8' alt="Raju Developer" />
          </div>
          {/* div right */}
          <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2'>
          <span className='text-xl'>Welcom In My Feed</span>
          <div className='flex space-x-1 text-2xl md:text-4xl'>
          <h1>Hello, I'm a</h1>
          {/* <span className='text-red-700 font-bold'>Developer</span> */}
          <ReactTyped
          className='text-red-700 font-bold'
          strings={["Developer .", "Programmer .", "Coder ."]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
          </div>
          <br />
          <p className='text-sm md:text-md text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta optio quaerat praesentium eligendi inventore, sed aliquam eum at cupiditate nam alias consectetur dolores rem, magni voluptatibus minus expedita sequi vero.sed aliquam eum at cupiditate nam alias consectetur dolores rem, magni voluptatibus minus expedita sequi vero.</p>
          <br />
          {/* social media icons */}
          <div className='flex flex-col  items-center md:flex-row justify-between space-y-6 md:space-y-0'>
          <div className='space-y-1'>
            <h1 className='font-bold text-center'>Avaiable on</h1>
            <ul className='flex space-x-5'>
              <a href="https://www.facebook.com/ tar" target='_blank'>
              <li><FaFacebookSquare className='text-2xl cursor-pointer'/>
              </li>
              </a>
             <a href="https://www.linkedin.com/" target='_blank'>
             <li><FaLinkedin className='text-2xl cursor-pointer'/></li>
             </a>
              <a href="https://www.whatsapp.com/" target='_blank'>
                <li><FaWhatsappSquare className='text-2xl cursor-pointer'/></li>
              </a>
              <a href="https://web.telegram.org/" target='_blank'>
                <li><FaTelegram className='text-2xl cursor-pointer'/></li>
              </a>
            </ul>
          </div>
          <div className='space-y-2'>
          <h1 className='font-bold'>Currently working on</h1>
            <div className='flex space-x-5'>
                <FaHtml5 className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
                <TbFileTypeCss className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
                <IoLogoJavascript className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
                <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
            </div>
          </div>
          </div>
          </div>
        </div>
        <hr className='mt-14 bg-slate-500 md:bg-slate-500'/>
    </div>
  )
}
