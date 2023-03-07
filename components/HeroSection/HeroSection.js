import React,{useState} from 'react';
import { TiLightbulb } from 'react-icons/ti';
import { CiTempHigh } from 'react-icons/ci';
import { AiOutlineSetting, AiOutlineVideoCameraAdd } from 'react-icons/ai';
import { HiOutlineArrowSmDown } from 'react-icons/hi';
import LineChart from '../chart/LineChart';

import Link from "next/link";
import Image from 'next/image';




const HeroSection = () => {
 
 return (
   
           
    <div className='flex bg-[#090a0ac5] h-screen  '>
    <img    className="fixed min-h-screen w-full -z-20 object-cover "
             src="/images/herobg.jpg"
             alt="vetnow"
            />
       
       

        <div className=' flex flex-col py-4  pt-16  justify-center items-center  w-screen'>
        <h1 className='  text-center text-white text-xl'> وتنا پلتفرم  تخصصی </h1>
        <h2 className= ' text-white py-2 text-center text-md sm:text-sm mb-4 '>   پرورش دهندگان مرغ گوشتی </h2>
        
        <div className=' px-[15%] sm:px-0 sm:pr-12  w-full '>
          <LineChart />
        </div>
        <div className='flex space-x-4   justify-center items-center w-full'>

            <div className='flex justify-center items-center p-2 bg-[#00000009] w-10 h-10  ring-2 ring-white rounded-full'>
            <Image
                className="z-20 w-8   h-8 animate-spin object-contain "
                src="/images/fan04.png"
                width='100'
                height='100'
                alt="vetnow"
                />
            </div>

            <div className='my-2 flex justify-center items-center bg-[#00000009] w-10 h-10 p-2 ring-2 ring-white rounded-full'>
            <TiLightbulb className='text-white text-xl ' />
            </div>

            <div className='my-4  flex justify-center items-center bg-[#00000009] w-10 h-10 p-2 ring-2 ring-red-600 rounded-full'>
            <CiTempHigh className=' animate-pulse text-red-600 text-2xl ' />
            </div>

            <div className='my-2 flex justify-center items-center bg-[#00000009] w-10 h-10 p-2 ring-2 ring-white rounded-full'>
            <AiOutlineVideoCameraAdd className='text-white text-xl ' />
            </div>

            <div className='my-2 flex justify-center items-center bg-[#00000009] w-10 h-10 p-2 ring-2 ring-white rounded-full'>
            <AiOutlineSetting className='text-white text-xl ' />
            </div>

            </div>
{/*        
        
         
            <HiOutlineArrowSmDown className=' animate-bounce text-red-600 text-2xl ' />
            <h1 className= 'bg-[#102d46ab] text-white text-center px-10 border rounded-lg py-2 mb-10 '> ثبت نام یا ورود </h1> */}
        </div>
    </div>
   

    
    );
};

export default HeroSection;
