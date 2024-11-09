import React from 'react'
import html from "../../public/html.png"
import css from '../../public/css.png'
import javascript from '../../public/javascript.png'
import react from '../../public/react.png'
import mysql from '../../public/mysql.png'

export default function Experiance() {
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
    name="Experiance"
    className='max-w-screen-2xl container mx-auto px-8 md:px-20 my-16'>
    <div>
        <h1 className='text-3xl font-bold mb-5'>Experiance</h1>
        <p className=''>I've more than 1 years of experiance in below technology.</p>
    <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3'>
    {
          cardItem.map(({ id, logo, name }) => (
                 <div  className ="flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300" key={id}>
                        <img src={logo} alt={name} className="w-[150px] rounded-full" /> {/* Added class for sizing */}
                  <div>
                 <div className=''>{name}</div>
                 </div>

                            </div>
                        ))
     }
    </div>
    </div>
    </div>
  )
}
