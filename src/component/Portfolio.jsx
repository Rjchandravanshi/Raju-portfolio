import React from 'react'
import html from "../../public/html.png"
import css from '../../public/css.png'
import javascript from '../../public/javascript.png'
import react from '../../public/react.png'
import mysql from '../../public/mysql.png'

export default function Portfolio() {
    const cardItem = [
        {
            id:1 ,
            logo: html,
            name: "Html"
        },
        {
            id: 2,
            logo: css,
            name: "CSS"
        },
        {
            id: 3,
            logo: javascript,
            name: "JavaScript"
        },
        {
            id:4,
            logo: react,
            name: "React Js"
        },
        {
            id: 5,
            logo: mysql,
            name: "MySql"
        }
    ];
  return (
    <div
    name="Portfolio" className='max-w-screen-2xl container mx-auto px-8 md:px-20 my-16 mt-10'>
    <div>
        <h1 className='text-3xl font-bold mb-5'>Portfolio</h1>
        <span className='underline font-semibold'>Featured Project</span>
    <div className='grid grid-cols-1 md:grid-cols-4 gap-4 my-5'>
    {
          cardItem.map(({ id, logo, name }) => (
                 <div  className ="md:[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300" key={id}>
                        <img src={logo} alt={name} className="w-[120px] h-[120px] p-1 rounded-full border-[2px]" /> {/* Added class for sizing */}
                  <div>
                 <div className='font-bold text-lg mb-2 px-2'>{name}</div>
                       <p className='px-2 text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ad.</p>
                 </div>
                 <div className='px-6 py-4 space-x-3 justify-around'>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>Video</button>
                        <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'>Source Code</button>
                                </div>
                            </div>
                        ))
     }
    </div>
    </div>
    </div>
  )
}
