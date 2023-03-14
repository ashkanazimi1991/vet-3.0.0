import React from 'react';
import Image from 'next/image'
import Desend from '../chart/Desend';


import logo from '../../public/images/way.png'

function Body2() {
  return (
    <div className='flex flex-col justify-center px-4 py-4 bg-[#090a0ac5] space-y-6 items-center w-full min-h-screen'>
  
      <div className='flex md:flex-col-reverse justify-around items-center w-full'>
        <div className=' w-1/2 md:w-full px-[5%] py-[5%]'>
          <p className='text-white text-md sm:text-sm sm:leading-8  text-right px-6 py-4 leading-9'>
          وتنا با حذف کامل لایه های دلالی باعث می شود تا کاربران صنعت طیور نیازهای خود را بدون واسطه و مستقیم از تولیدکننده یا واردکننده تهیه نمایند. برای برخورداری از این مزیت کافی است به خانواده بزرگ وتنا بپیوندید 
          </p>
        </div>

        <div className='bg-[#071c22af] flex justify-center w-1/2 md:w-full p-4 mt-6 rounded-xl'>
        <Image  src={logo}  alt="logo" width='380' height='250'
                 className=" object-contain "/>
        </div>
      </div>

      <div className='flex md:flex-col justify-around items-center w-full'>
        <div className='bg-[#071c22af] w-1/2  md:w-full p-4 rounded-xl'>
          <Desend/>
        </div>

        <div className=' w-1/2 md:w-full'>
          <h2 className='text-right text-yellow-500 pt-6 text-xl'>
            کاهش هزینه , افزایش راندمان
          </h2>
          <p className='text-white text-md sm:text-sm sm:leading-8  text-right px-6 py-4 leading-9'>
          تیم دانش بنیان وتنا با استفاده از علم روز و کنترل دقیق فرآیند پرورش باعث کاهش مصرف انرژی و افزایش راندمان گله می شود و علاوه بر آن مرغدار منابع با کیفیت را با هزینه کمتر از طریق وتنا تامین میکند باعث می شود سود حاصله مرغدار بصورت چشمگیری افزایش یابد 
          </p>
        </div>
      </div>
        
    </div>
  )
}

export default Body2