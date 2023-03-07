import React from 'react';
import ActiveLink from "../ActiveLink/ActiveLink";
import Image from 'next/image';
import { MdOutlineMapsHomeWork, MdProductionQuantityLimits, MdOutlineMiscellaneousServices,MdOutlineHeadset,MdOutlineManageAccounts } from 'react-icons/md';


import logo from '../../public/images/logo02.png'




function Navbar() {
  return (
    <div>
      <div className='w-full h-12  hidden md:block bg-[#040f1491] fixed top-0'>
        <div className='flex justify-start items-center'>
          <Image  src={logo}  alt="logo" width='100' height='100'
                    className=" max-h-10  object-contain "/>
          <h1 className='text-left text-[#f7cd44]  text-xl pt-2  w-full' >VetNOW</h1>
        <div className='flex justify-center items-center'>
        <h1 className='text-right text-white  text-sm  whitespace-nowrap  mr-2' >حساب کاربری</h1>
        <MdOutlineManageAccounts className='text-white text-center text-2xl mr-4'/>
        </div>
        </div>
      </div>
    <div className='flex justify-center items-center w-full bg-[#040f1491] p-2'>
      <div className='flex justify-center items-center md:hidden  w-1/6'>
      <Image  src={logo}  alt="logo" width='100' height='100'
                 className=" max-h-12  object-contain "/>
      <h1 className='text-left text-[#f7cd44]  text-2xl pt-2  w-full' >VetNOW</h1>
      </div>


      <div className='w-4/6'>
          <ul className="list-reset flex flex-row justify-center  z-20 text-center md:text-center">
                          <ActiveLink href='/'>
                    
                              <li  className=" flex-1 border-x-2 border-gray-600 px-2 ">
                              <div className=" py-2 md:py-3 flex flex-row justify-center
                                items-center no-underline  ">
                                <h2 className=" text-center  text-sm tracking-wide"> 
                                  خانه</h2>
                                <MdOutlineMapsHomeWork className='mx-2'/>
                                  </div>
                              </li>
                          </ActiveLink>
                        
                 
                          <ActiveLink href='/services'>
                          
                              <li  className=" flex-1 px-2 border-r-2 border-gray-600 ">
                              <div className=" py-2 md:py-3 flex flex-row justify-center
                                items-center no-underline  ">
                                <h2 className=" text-center  text-sm tracking-wide"> 
                                  خدمات</h2>
                                <MdOutlineMiscellaneousServices className='mx-2'/>
                                  </div>
                              </li>
                          </ActiveLink>

                          <ActiveLink href='/store'>
                          <li  className=" flex-1  px-2">
                              <div className=" py-2 md:py-3 flex flex-row justify-center
                                items-center no-underline  ">
                                <h2 className=" text-center  text-sm tracking-wide"> 
                                  سفارشات</h2>
                                <MdProductionQuantityLimits className='mx-2'/>
                                  </div>
                              </li>
                          </ActiveLink>
          
                          <ActiveLink href='/contact'>
                              <li  className=" flex-1 border-x-2 border-gray-600 px-2 ">
                              <div className=" py-2 md:py-3 flex flex-row justify-center
                                items-center no-underline  ">
                                <h2 className=" text-center  text-sm tracking-wide"> 
                                  پشتیبانی</h2>
                                <MdOutlineHeadset className='ml-2'/>
                                  </div>
                              </li>
                          </ActiveLink>
                  </ul>
      </div>

      <div className='flex justify-center items-center md:hidden  w-1/6'>
        <h1 className='text-right text-white  text-md  whitespace-nowrap' >حساب کاربری</h1>
        <MdOutlineManageAccounts className='text-white text-center text-2xl w-12'/>
      </div>
    </div>

    </div>
  )
}

export default Navbar