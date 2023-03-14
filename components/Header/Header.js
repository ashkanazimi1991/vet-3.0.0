import React from 'react'
import Image from 'next/image'
import { RiAccountPinBoxFill } from 'react-icons/ri';
import { BsCart } from 'react-icons/bs';

import logo from '../../public/images/logo02.png'


function Header() {
  return (
    <div className='fixed top-0 w-full z-20'>
    <div className='flex justify-between px-4 sm:px-2  items-center bg-[#142028]'>
        <div className='flex justify-between  items-center'>
        <Image  src={logo}  alt="logo" width='50' height='50'
                 className=" object-contain "/>

            <h2 className=' text-xl sm:text-lg font-md whitespace-nowrap px-2 shadow-lg text-[#ff9900]'>VET NOW</h2>
        </div>
        <div className='flex justify-between items-center'>
        <BsCart className='text-white mx-4 text-xl'/>
        <div className='flex  justify-center px-2  items-center border border-gray-500 py-2 rounded '>
            <h2 className='text-white text-sm px-4 whitespace-nowrap '>حساب کاربری</h2>
            <RiAccountPinBoxFill className='text-white'/>
        </div>
        {/* <HiMenuAlt3 className='text-white mx-4 text-2xl'/> */}

        </div>
    </div>
    </div>
  )
}

export default Header