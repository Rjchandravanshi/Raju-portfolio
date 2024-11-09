import React from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios'
import { toast } from'react-hot-toast';

export default function Contect() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async(data) => 
      {
        const userInfo={
            name: data.name,
            email: data.email,
            message: data.message
        }
        try {
           await axios.post('https://getform.io/f/bwngzxwa', userInfo)
           toast.success('Message sent successfully!')
        } catch (error) {
            console.log(error)
            toast.error('Failed to send message!')
        }
      }
  return (
    <>
    <div
    name="Contect" className='max-w-screen-2xl container mx-auto px-8 md:px-20 my-16'>
        <h1 className='text-3xl font-bold mb-4'>Contect me</h1>
        <span>Please fill out the form below to contect me</span>
        <div className='flex flex-col items-center justify-center mt-5'>
            <form 
            onSubmit={handleSubmit(onSubmit)}
            // action="https://getform.io/f/bwngzxwa"
            // method="POST"
             className='bg-gray-500 w-96 px-8 py-6 rounded-xl'>
                <h1 className='text-xl font-semibold '>Send Your Massage</h1>
                <div className='flex flex-col mt-4'>
                    <label className='block text-gray-700'>Full Name </label>
                    <input 
                    {...register("name", { required: true })}
                    className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id="name"
                    name="name"
                    type="text"  
                    placeholder='Enter your full name'/>
                    {errors.name && <span>This field is required</span>}
                </div>
                <div className='flex flex-col mt-4'>
                    <label className='block text-gray-700'>Email Address</label>
                    <input 
                    {...register("email", { required: true })}
                    className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id="email" 
                    name="email"
                    type="text"  
                    placeholder='Enter your email address'/>
                    {errors.email && <span>This field is required</span>}
                </div>
                <div className='flex flex-col mt-4'>
                    <label className='block text-gray-700'>Massage</label>
                    <input 
                    {...register("massage", { required: true })}
                    className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id="massage" 
                    name="massage"
                    type="text"  
                    placeholder='Type your massage here'/>
                    {errors.massage && <span>This field is required</span>}
                </div>
                <button className='bg-black text-white rounded-xl px-3 py-2 mt-5 hover:bg-slate-700 duration-300'>Send</button>
            </form>
        </div>
    </div>
    </>
  )
}
