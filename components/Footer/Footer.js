import React from 'react';
import Link from "next/link";
import { FiPhone} from "react-icons/fi";
import { TbBrandTelegram } from "react-icons/tb";
import { FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from "react-icons/hi";

function Footer() {
  return (
    <div className='flex flex-col w-full justify-center items-center  bg-[#071c22e5] '>
       
        <div className='grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 p-[5%]'>
            <h3 className='text-gray-400 text-right text-sm p-2'>
            گواهی و افتخارات
            </h3>
            <h3 className='text-gray-400 text-right text-sm p-2'>
            گالری تصاویر
            </h3>
            <h3 className='text-gray-400 text-right text-sm p-2'>
            منابع آموزشی
            </h3>
            <h3 className='text-gray-400 text-right text-sm p-2'>
            اخبار صنعت طیور
            </h3>
            <h3 className='text-gray-400 text-right text-sm p-2'>
            دامپزشک تخصصی
            </h3>
            <h3 className='text-gray-400 text-right text-sm p-2'>
            مشاوره آنلاین
            </h3>
            <h3 className='text-gray-400 text-right text-sm p-2'>
            پشتیبانی محصولات
            </h3>
            <h3 className='text-gray-400 text-right text-sm p-2'>
            پشتیبانی خدمات
            </h3>
            <h3 className='text-gray-400 text-right text-sm p-2'>
            همکاری با ما
            </h3>
            <h3 className='text-gray-400 text-right text-sm p-2'>
            انتقاد و پیشنهاد
            </h3>
            <h3 className='text-gray-400 text-right text-sm p-2'>
            تماس با مدیریت
            </h3>
            <h3 className='text-gray-400 text-right text-sm p-2'>
            تماس با اپراتور
            </h3>
        </div>

        <div className='flex flex-col justify-center w-full  bg-[#071c22e5] p-6'>
            <p className='text-center text-sm text-gray-400 '>تمام حقوق این پلتفرم به شرکت ویرا تجارت تعلق دارد </p>
            <div className="flex justify-center md:w-full  ">
                <ul className="flex items-center justify-center gap-4  ">
                    <li>
                        <Link href='tel:+989141472686'>
                            <FiPhone className='text-xl text-[#f7f7f7] transition hover:text-teal-700/75 '/> 
                        </Link> 
                    </li>
                    <li>
                        <Link href='https://www.instagram.com/onlineceo_' target='_blank'  aria-label='Instagram'>
                            <FaInstagram className='my-4 w-10 text-2xl text-[#fff] cursor-pointer transition hover:text-teal-700/75'/> 
                        </Link>
                    </li>
                
                    <li>
                        <Link href='https://t.me/AshkanAzimiii' target='_blank'  aria-label='telegram'>
                            <TbBrandTelegram className='my-4 w-10 text-2xl text-[#fff] cursor-pointer transition hover:text-teal-700/75 '/> 
                        </Link>  
                    </li>
                    <li>
                        <Link href="mailto:info@onlineceo.org" target='_blank'  aria-label='mail'>
                            <HiOutlineMail className=' my-4 w-10 text-2xl text-[#fff] cursor-pointer transition hover:text-teal-700/75 '/> 
                        </Link>  
                    </li>
            
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer