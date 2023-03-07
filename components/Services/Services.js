import React from 'react';
import Image from 'next/image';
import { HiOutlineInformationCircle, HiOutlineShoppingCart, HiOutlinePhoneMissedCall } from 'react-icons/hi';


import img1 from '../../public/images/chick103.jpg'
import img2 from '../../public/images/poultry010.jpg'
import img3 from '../../public/images/35day.jpg'
import img4 from '../../public/images/tools1002.jpg'
import img5 from '../../public/images/slid3.jpg'
import img6 from '../../public/images/iot091.jpg'












const Services = () => {
  return (
    <div className='min-h-screen flex justify-center items-center  bg-[#090a0ac5]'>
      <div className='grid px-[15%]  grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 py-[5%]  gap-8 '>
     
      <div className='flex flex-col max-w-[300px] rounded-xl bg-[#102d46ab] h-[300px] w-full'>
       <Image  src={img1}  alt="carnet" width='350' height='220'
                  className=" h-3/4 rounded-t-xl w-full object-cover "/>
          <div className='flex  flex-col px-4 py-2'>
            <div className='flex flex-row-reverse justify-between'>
              <h1 className='text-right py-2  text-white'>جوجه گوشتی</h1>
              <div className='flex space-x-6 items-center'>
              <HiOutlineShoppingCart className='text-gray-400 text-2xl'/>
              <HiOutlinePhoneMissedCall className='text-gray-400 text-2xl'/>
              <HiOutlineInformationCircle className='text-gray-400 text-2xl'/>
              </div>
            </div>
              <p className="text-gray-400 border-t-2 py-2 leading-8 text-right text-sm">جامع تریرن فروشگاه تخصصی جوجه یک روزه گوشتی</p>
          </div>
      </div>


      <div className='flex flex-col max-w-[300px] rounded-xl bg-[#102d46ab] h-[300px] w-full'>
        <Image  src={img2}  alt="carnet" width='350' height='220'
                className=" h-3/4 rounded-t-xl w-full object-cover "/>
        <div className='flex  flex-col px-4 py-2'>
          <div className='flex flex-row-reverse justify-between'>
            <h1 className='text-right py-2  text-white'>تجهیزات </h1>
            <div className='flex space-x-6 items-center'>
            <HiOutlineShoppingCart className='text-gray-400 text-2xl'/>
            <HiOutlinePhoneMissedCall className='text-gray-400 text-2xl'/>
            <HiOutlineInformationCircle className='text-gray-400 text-2xl'/>
            </div>
          </div>
            <p className="text-gray-400 border-t-2 py-2 leading-8 text-right text-sm">فروشگاه تخصصی  مزارع صنعتی پرورش طیور گوشتی</p>
        </div>
    </div>


    <div className='flex flex-col max-w-[300px] rounded-xl bg-[#102d46ab] h-[300px] w-full'>
        
        <Image  src={img3}  alt="carnet" width='350' height='220'
                className=" h-3/4 rounded-t-xl w-full object-cover "/>
        <div className='flex  flex-col px-4 py-2'>
          <div className='flex flex-row-reverse justify-between'>
            <h1 className='text-right py-2  text-white'>کنسانتره</h1>
            <div className='flex space-x-6 items-center'>
            <HiOutlineShoppingCart className='text-gray-400 text-2xl'/>
            <HiOutlinePhoneMissedCall className='text-gray-400 text-2xl'/>
            <HiOutlineInformationCircle className='text-gray-400 text-2xl'/>
            </div>
          </div>
            <p className="text-gray-400 border-t-2 py-2 leading-8 text-right text-sm">
              تامین کنساتره های گوشتی با آنالیز و تضمین کیفیت 
              </p>
        </div>
    </div>




    <div className='flex flex-col max-w-[300px]  rounded-xl bg-[#102d46ab] h-[300px] w-full'>
        
        <Image  src={img4}  alt="carnet" width='350' height='220'
                className=" h-3/4 rounded-t-xl w-full object-cover "/>
        <div className='flex  flex-col px-4 py-2'>
          <div className='flex flex-row-reverse justify-between'>
            <h1 className='text-right py-2  text-white'>دان و پلت</h1>
            <div className='flex space-x-6 items-center'>
            <HiOutlineShoppingCart className='text-gray-400 text-2xl'/>
            <HiOutlinePhoneMissedCall className='text-gray-400 text-2xl'/>
            <HiOutlineInformationCircle className='text-gray-400 text-2xl'/>
            </div>
          </div>
            <p className="text-gray-400 border-t-2 py-2 leading-8 text-right text-sm">
    انواع دان و پلت آماده از برندهای مطمئن مستیم از کارخانجات تولیدی
            </p>
        </div>
    </div>



    <div className='flex flex-col max-w-[300px]  rounded-xl bg-[#102d46ab] h-[300px] w-full'>
        
        <Image  src={img5}  alt="carnet" width='350' height='220'
                className=" h-3/4 rounded-t-xl w-full object-cover "/>
        <div className='flex  flex-col px-4 py-2'>
          <div className='flex flex-row-reverse justify-between'>
            <h1 className='text-right py-2  text-white'>داروخانه</h1>
            <div className='flex space-x-6 items-center'>
            <HiOutlineShoppingCart className='text-gray-400 text-2xl'/>
            <HiOutlinePhoneMissedCall className='text-gray-400 text-2xl'/>
            <HiOutlineInformationCircle className='text-gray-400 text-2xl'/>
            </div>
          </div>
            <p className="text-gray-400 border-t-2 py-2 leading-8 text-right text-sm">   
  ارائه انواع مکمل ها , ویتامین ها و  دارو های  مورد نیاز مزارع
          </p>
        </div>
    </div>

    <div className='flex flex-col max-w-[300px] rounded-xl bg-[#102d46ab] h-[300px] w-full'>
        
        <Image  src={img6}  alt="carnet" width='350' height='220'
                className=" h-3/4 rounded-t-xl w-full object-cover "/>
        <div className='flex  flex-col px-4 py-2'>
          <div className='flex flex-row-reverse justify-between'>
            <h1 className='text-right py-2  text-white'>هوشمندسازی</h1>
            <div className='flex space-x-6 items-center'>
            <HiOutlineShoppingCart className='text-gray-400 text-2xl'/>
            <HiOutlinePhoneMissedCall className='text-gray-400 text-2xl'/>
            <HiOutlineInformationCircle className='text-gray-400 text-2xl'/>
            </div>
          </div>
            <p className="text-gray-400 border-t-2 py-2 leading-8 text-right text-sm">
              کنترل و مانیتورینگ فارم ها بصورت آنلاین و از راه دور
            </p>
        </div>
    </div>

      </div>

    </div>
  )
}

export default Services