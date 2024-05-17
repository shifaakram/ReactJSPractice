import React from 'react'
import { TypeAnimation } from 'react-type-animation'
//import {FaTwitter,FaFacebbok,FaInstagram,FaLinkedinIn} from 'react-icons/fa'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";


const main = () => {
  return (
    <div>
      <img className='w-full h-screen object-cover object-left' src='https://phantomtradingfx.com/wp-content/uploads/2023/10/ideal-routine-for-pro-forx-trader.jpg'/>
      <div className='w-full h-screen absolute top-0 left-0 bg-white/25'>
        <div className=' max-w-[500px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
<h1 className='sm:text-5xl text-4xl font-bold text-orange-400'>I am Owais Siddiqui</h1>
       <h2 className='flex sm:text-4xl text-2xl pt-4 text-gray-800'>I'm a  <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        ' Trader',
        1000,
        ' Teacher',
        1000,
        ' Trainer',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', paddingLeft: '5px', display: 'inline-block' }}
      repeat={Infinity}
    /></h2>
    <div className='flex justify-between pt-6 max-w-[200px] w-full'>
    <FaFacebook className='cursor-pointer' size={20}/>
    <FaInstagram className='cursor-pointer' size={20}/>
    <FaLinkedinIn className='cursor-pointer' size={20}/>
    <FaTwitter className='cursor-pointer' size={20}/>
    </div>
        </div>
      </div>
    </div>
  )
}

export default main
