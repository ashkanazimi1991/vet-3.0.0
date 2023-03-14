import React from 'react'
import { FaCommentMedical, FaTools } from "react-icons/fa";
import { GiRemedy, GiWheat, GiChicken } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineRight, AiOutlineVideoCameraAdd,AiOutlineLeft, AiOutlineUp, AiOutlineDown} from "react-icons/ai";
import {
   Accordion,
   AccordionItem,
   AccordionButton,
   AccordionPanel,
   AccordionIcon,Box, Switch
 } from '@chakra-ui/react';
 import dynamic from "next/dynamic";
import Ventilation from '../chart/Ventilation';
import Image from 'next/image';



import { Tooltip } from '@chakra-ui/react'


const Lux = dynamic(() => import('../chart/Lux'))
const Temp = dynamic(() => import('../chart/Temp'))


function Automation() {
  return (
    <div className='w-full bg-[#000000ea] '>
    <h2 className='text-center text-md sm:text-sm text-gray-400 py-2'>نمای کلی از داشبورد های اختصاصی و یکپارچه وتنا</h2>
        
    <div className='flex justify-between px-[5%] border-t-2 border-gray-700 '>
        <div className='flex justify-around items-center'>
               <Tooltip hasArrow label='دامپزشک من' bg='gray.300' color='black'>
                 <span>
                    <FaCommentMedical  className='text-white sm:text-sm  text-xl sm:mx-2 m-4'/>
                 </span>
               </Tooltip>

               <Tooltip hasArrow label=' داروخانه' bg='gray.300' color='black'>
                 <span>
                    <GiRemedy  className='text-white text-xl sm:text-sm sm:mx-2 m-4'/>
                 </span>
               </Tooltip>

               <Tooltip hasArrow label='دان و جیره' bg='gray.300' color='black'>
                 <span>
                    <GiWheat  className='text-white text-2xl sm:text-sm sm:mx-2 m-4'/>
                 </span>
               </Tooltip>

               <Tooltip hasArrow label='تجهیزات پرورشی' bg='gray.300' color='black'>
                 <span>
                    <FaTools  className='text-white text-xl sm:text-sm sm:mx-2 m-4'/>
                 </span>
               </Tooltip>

               <Tooltip hasArrow label='جوجه یک روزه' bg='gray.300' color='black'>
                 <span>
                    <GiChicken  className='text-white text-xl sm:text-sm sm:mx-2  m-4'/>
                 </span>
               </Tooltip>

            </div>

            <div className='flex justify-center items-center'>
            <h3 className='text-gray-400 sm:text-sm'>سالن شماره 10</h3>
            <IoIosArrowDown className='mx-2 text-white text-xl sm:text-sm'/>
            </div>
   </div>


    {/* ...............................................Camera,,,,,,,,,,,,,,,,,,,,,,,,,,,,, */}
<div className='flex px-[5%]  '>
                <div className='flex  justify-around   items-center border-t-2 border-gray-500    w-full'>
                 <div className='my-2  flex justify-center items-center '>
                <AiOutlineVideoCameraAdd className='text-white text-2xl ' />
                </div>      
                 <h2 className='text-gray-400 text-center text-sm'>مانیتورینگ سالن ها</h2>          
                
             </div>
 
         </div>
             <div className='flex md:flex-col justify-around mx-[5%]  items-center'>
                 <div className='flex justify-center w-1/2 md:w-full'>
                 <video   className="w-full h-1/2" autoPlay loop   >
                    <source   src="/videos/chick10.mp4"   type="video/mp4"  />
                    Your browser does not support the video tag.
                </video>
                 </div>
 
                 <div className='w-1/2 flex justify-around items-center sm:flex-col md:w-full'>
                    {/* ................ */}

                    <div className='flex justify-center items-center m-10 w-28 h-28 rounded-full border border-gray-700 hover:border-green-400   '>
                        <div className='grid grid-cols-2 gap-3 '>
                            <div className='cursor-pointer flex justify-center col-span-2'>
                            <AiOutlineUp className='text-white text-xl hover:text-green-400' />
                            </div>
                            <div className='  cursor-pointer '>
                            <AiOutlineLeft className='text-white hover:text-green-400 text-xl mx-3 ' />
                            </div>
                            <div className=' cursor-pointer '>
                            <AiOutlineRight className='text-white text-xl mx-3 hover:text-green-400' />
                            </div>
                            <div className='flex cursor-pointer justify-center col-span-2'>
                            <AiOutlineDown className='text-white text-xl hover:text-green-400' />
                            </div>
                        </div>
                    </div>

{/* ...............................Line2.......... */}
                 <div className='flex justify-center mr-4 sm:mr-0  '>
                        <div className='grid py-4 gap-4 grid-cols-2'>
                       
                            <div>
                             <div className='flex cursor-pointer border-green-400 justify-center py-2 px-4 border rounded-md items-center '>
                                <AiOutlineVideoCameraAdd className='text-white text-3xl mr-2 ' />
                                <h2 className='text-white text-xl px-2'>1</h2>
                                <div className='w-5 h-5 bg-green-400 rounded-full'></div>
                             </div>
                            </div>

                            <div>
                             <div className='flex cursor-pointer border-gray-700 hover:border-green-400  justify-center py-2 px-4 border rounded-md items-center '>
                                <AiOutlineVideoCameraAdd className='text-white text-3xl mr-2 ' />
                                <h2 className='text-white text-xl px-2'>2</h2>
                                <div className='w-5 h-5 bg-green-400 rounded-full'></div>
                             </div>
                            </div>

                            <div>
                             <div className='flex cursor-pointer border-gray-700 hover:border-green-400 justify-center py-2 px-4 border rounded-md items-center '>
                                <AiOutlineVideoCameraAdd className='text-white text-3xl mr-2 ' />
                                <h2 className='text-white text-xl px-2'>3</h2>
                                <div className='w-5 h-5 bg-green-400 rounded-full'></div>
                             </div>
                            </div>

                            <div>
                             <div className='flex cursor-pointer border-gray-700 hover:border-green-400 justify-center py-2 px-4 border rounded-md items-center '>
                                <AiOutlineVideoCameraAdd className='text-white text-3xl mr-2 ' />
                                <h2 className='text-white text-xl px-2'>4</h2>
                                <div className='w-5 h-5 bg-green-400 rounded-full'></div>
                             </div>
                            </div>


                            <div>
                             <div className='flex cursor-pointer border-gray-700 hover:border-green-400 justify-center py-2 px-4 border rounded-md items-center '>
                                <AiOutlineVideoCameraAdd className='text-white text-3xl mr-2 ' />
                                <h2 className='text-white text-xl px-2'>5</h2>
                                <div className='w-5 h-5 bg-gray-500 rounded-full'></div>
                             </div>
                            </div>

                            <div>
                             <div className='flex cursor-pointer border-gray-700 hover:border-green-400 justify-center py-2 px-4 border rounded-md items-center '>
                                <AiOutlineVideoCameraAdd className='text-white text-3xl mr-2 ' />
                                <h2 className='text-white text-xl px-2'>6</h2>
                                <div className='w-5 h-5 bg-green-400 rounded-full'></div>
                             </div>
                            </div>

                            <div>
                             <div className='flex cursor-pointer border-gray-700 hover:border-green-400 justify-center py-2 px-4 border rounded-md items-center '>
                                <AiOutlineVideoCameraAdd className='text-white text-3xl mr-2 ' />
                                <h2 className='text-white text-xl px-2'>7</h2>
                                <div className='w-5 h-5 bg-green-400 rounded-full'></div>
                             </div>
                            </div>

                            <div>
                             <div className='flex cursor-pointer border-gray-700 hover:border-green-400 justify-center py-2 px-4 border rounded-md items-center '>
                                <AiOutlineVideoCameraAdd className='text-white text-3xl mr-2 ' />
                                <h2 className='text-white text-xl px-2'>8</h2>
                                <div className='w-5 h-5 bg-gray-500  rounded-full'></div>
                             </div>
                            </div>

                        </div>
                    </div>



                 </div>
 
             </div>

    {/* ...............................................ventilation,,,,,,,,,,,,,,,,,,,,,,,,,,,,, */}
<div className='flex px-[5%] pt-4 '>
             
             <div className='flex  justify-around items-center border-t-2 border-gray-500  w-full'>
                            
                 <div className='flex justify-center items-center my-2  w-8 h-8 p-2 ring-2 ring-white rounded-full'>
                <Image
                    className=" z-20 w-6   h-6 animate-spin object-contain "
                    src="/images/fan04.png"
                    width='100'
                    height='100'
                    alt="vetnow"
                    />
                    
                 </div>   
                 <h2 className='text-gray-400 text-center text-سئ'>سیستم تهویه</h2>          
             </div>
 
         </div>
             <div className='flex md:flex-col justify-around mx-[5%]  items-center'>
                 <div className='w-1/2 md:w-full'>
                     <Ventilation/>
              
                 </div>
 
                 <div className='flex justify-around w-1/2 my-4 md:w-full items-center'>

                 <div className='grid grid-cols-3 w-full mx-5 sm:px-0 items-center justify-center border rounded h-60'>
                            <div className='flex justify-center  items-center'>
                                <p className='text-red-400'>28 درجه</p>
                               <div className='border rounded-full border-red-400 animate-ping mx-2 w-2 h-2'></div>
                            </div>
                      
                            <div className='flex justify-center  items-center'>
                                <p className='text-green-400'>24 درجه</p>
                               <div className='border rounded-full border-green-400 animate-ping mx-2 w-2 h-2'></div>
                            </div>

                            <div className='flex justify-center  items-center'>
                                <p className='text-green-400'>24 درجه</p>
                               <div className='border rounded-full border-green-400 animate-ping mx-2 w-2 h-2'></div>
                            </div>

                            <div className='flex justify-center  items-center'>
                                <p className='text-red-400'>28 درجه</p>
                               <div className='border rounded-full border-red-400 animate-ping mx-2 w-2 h-2'></div>
                            </div>


                            <div className='flex justify-center  items-center'>
                                <p className='text-red-400'>28 درجه</p>
                               <div className='border rounded-full border-red-400 animate-ping mx-2 w-2 h-2'></div>
                            </div>

                            <div className='flex justify-center  items-center'>
                                <p className='text-red-400'>28 درجه</p>
                               <div className='border rounded-full border-red-400 animate-ping mx-2 w-2 h-2'></div>
                            </div>

                       </div>
                    {/* ............................................................. */}
            
                    </div>
 
             </div>

{/* ...................................................................report.......................................... */}

<div >
<Accordion dir='rtl' defaultIndex={[0]} allowMultiple>
  <AccordionItem >
    <h2>
      <AccordionButton backgroundColor='blue.900' color='gray.50'>
        <Box color='gray.50' as="span" flex='1' textAlign='right'>
           گزارشات کلی
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <div className='w-full flex flex-col justify-center items-center '>
      <div className='grid grid-cols-3 gap-4 w-full border-b-2 border-gray-400 py-2  justify-center '>
         <p className='text-gray-400 text-center text-sm'>عنوان</p>
         <p className='text-gray-400 text-center text-sm'>24 ساعت گذشته</p>
         <p className='text-gray-400 text-center text-sm'>کل </p>
      </div>

      <div className='grid grid-cols-3 gap-4 w-full border-b-2 border-gray-400 py-2  justify-center '>
         <p className='text-gray-400 text-center text-sm whitespace-nowrap'>دان ورودی(کیلوگرم)</p>
         <p className='text-gray-400 text-center text-sm'>1750</p>
         <p className='text-gray-400 text-center text-sm'>8762 </p>
      </div>

      <div className='grid grid-cols-3 gap-4 w-full border-b-2 border-gray-400 py-2  justify-center '>
         <p className='text-gray-400 text-center text-sm whitespace-nowrap'>آب ورودی(لیتر)</p>
         <p className='text-gray-400 text-center text-sm'>750</p>
         <p className='text-gray-400 text-center text-sm'>2362 </p>
      </div>

      <div className='grid grid-cols-3 gap-4 w-full border-b-2 border-gray-400 py-2  justify-center '>
         <p className='text-gray-400 text-center text-sm'>تلفات</p>
         <p className='text-gray-400 text-center text-sm'>18</p>
         <p className='text-gray-400 text-center text-sm'>240</p>
      </div>

      <div className='grid grid-cols-3 gap-4 w-full  py-2  justify-center '>
         <p className='text-gray-400 text-center text-sm whitespace-nowrap'>میانگین وزن گله(گرم)</p>
         <p className='text-gray-400 text-center text-sm col-span-2'>200</p>
         {/* <p className='text-gray-400 text-center text-sm'>240</p> */}
      </div>

      </div>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton backgroundColor='blue.900' color='gray.50'>
        <Box as="span" color='gray.50' flex='1' textAlign='right'>
         تنظیمات
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <div className='flex  w-full sm:flex-col justify-center items-center bg-[#071a25d0]'>
      <div className='flex flex-col w-1/2 sm:w-full '>
         <Lux/>
         <p className='text-center text-gray-400 text-sm pb-2 '>وضعیت و میانگین نور سالن</p>
         <div className='flex justify-around  py-4 w-full'>
           <Switch isChecked  checked id='light' />
           <Switch id='light' />
         </div>

         <div className='flex justify-around  py-4 w-full'>
           <Switch id='light' />
           <Switch isChecked   checked id='light' />
         </div>

         <div className='flex justify-around py-4 w-full'>
           <Switch id='light' />
           <Switch isChecked  checked id='light' />
         </div>

         <div className='flex justify-around  py-4 w-full'>
           <Switch isChecked  checked id='light' />
           <Switch id='light' />
         </div>
            <div className='flex justify-around  py-4 w-full'>
           <Switch isChecked  checked id='light' />
           <Switch id='light' />
         </div>
         
         <p className='text-blue-400 text-sm border sm:hidden border-blue-400 rounded-md mx-5  cursor-pointer py-2 text-center '>ذخیره و اجرا تغییرات</p>
         <div>
         </div>
      </div>
     
     
     
     
     
     
      <div className='flex flex-col w-1/2 sm:w-full'>
      <Temp/>
         <p className='text-center text-gray-400 text-sm border-b-2 border-gray-500 pb-4 '>وضعیت دما و رطوبت</p>
         <div className='flex justify-around  py-4 w-full'>
         <div className='flex justify-center items-center my-2  w-8 h-8 p-2 ring-2 ring-white rounded-full'>
                <Image
                    className=" z-20 w-6  h-6  object-contain "
                    src="/images/fan04.png"
                    width='100'
                    height='100'
                    alt="vetnow"
                    />
                    
                 </div>

                 <div className='flex justify-center items-center my-2  w-8 h-8 p-2 ring-2 ring-white rounded-full'>
                <Image
                    className=" z-20 w-6  h-6 animate-spin object-contain "
                    src="/images/fan04.png"
                    width='100'
                    height='100'
                    alt="vetnow"
                    />
                    
                 </div>

                 <div className='flex justify-center items-center my-2  w-8 h-8 p-2 ring-2 ring-white rounded-full'>
                <Image
                    className=" z-20 w-6  h-6  object-contain "
                    src="/images/fan04.png"
                    width='100'
                    height='100'
                    alt="vetnow"
                    />
                    
                 </div>

                 <div className='flex justify-center items-center my-2  w-8 h-8 p-2 ring-2 ring-white rounded-full'>
                <Image
                    className=" z-20 w-6  h-6 animate-spin object-contain "
                    src="/images/fan04.png"
                    width='100'
                    height='100'
                    alt="vetnow"
                    />
                    
                 </div>

                 <div className='flex justify-center items-center my-2  w-8 h-8 p-2 ring-2 ring-white rounded-full'>
                <Image
                    className=" z-20 w-6  h-6  object-contain "
                    src="/images/fan04.png"
                    width='100'
                    height='100'
                    alt="vetnow"
                    />
                    
                 </div>
                 <div className='flex justify-center items-center my-2  w-8 h-8 p-2 ring-2 ring-white rounded-full'>
                <Image
                    className=" z-20 w-6  h-6 animate-spin object-contain "
                    src="/images/fan04.png"
                    width='100'
                    height='100'
                    alt="vetnow"
                    />
                    
                 </div>
         </div>

         <div className='flex justify-around  py-4 w-full'>
           <Switch id='light' />
           <Switch isChecked   checked id='light' />
           <Switch    checked id='light' />
           <Switch isChecked   checked id='light' />
           <Switch    checked id='light' />
           <Switch isChecked   checked id='light' />

         </div>
         <div className='flex justify-around  py-4 w-full'>
          <p className='text-gray-400 text-center text-sm'> فن 01</p>
          <p className='text-gray-400 text-center text-sm'> فن 02</p>
          <p className='text-gray-400 text-center text-sm'> فن 03</p>
          <p className='text-gray-400 text-center text-sm'> فن 04</p>
          <p className='text-gray-400 text-center text-sm'> فن 05</p>
          <p className='text-gray-400 text-center text-sm'> فن 06</p>


         </div>

     
         
         <p className='text-blue-400 text-sm border border-blue-400 rounded-md mx-5  cursor-pointer py-2 text-center '>ذخیره و اجرا تغییرات</p>

      </div>


    </div>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
</div>


{/* ......................................................./report.............. */}
    </div>
  )
}

export default Automation