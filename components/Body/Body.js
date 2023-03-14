import React from 'react';
import Link from "next/link";
import { BsArrowRight } from 'react-icons/bs';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';


function Body() {
  return (
    <div className='flex flex-col w-full bg-[#090a0ac5] '>
 <div className='border-gray-800 border  py-5 w-full h-full bg-[#000000c4]'>
               
               <h2 className='text-white text-center px-5 pt-4 pb-2'>فروش تخصصی جوجه های گوشتی</h2>
               <p className='text-gray-400 text-center text-sm px-5 py-2 mb-2'> لیست قیمت جوجه های گوشتی ایران (تومان)  </p>
   
               
               <Tabs isLazy isFitted dir='rtl'  >
               <TabList  color="gray.500">
                       <Tab> راس 308</Tab>
                       <Tab>  کاب 500 </Tab>
                       <Tab>هوبارد</Tab>
                       <Tab>کاب 500</Tab>
   
                   </TabList>
                   
                   <TabPanels>
                       {/* ...................................................ras................................................... */}
                       <TabPanel>
                   
                        
                           <div className='flex flex-col  justify-between py-2  items-center w-full'>
                         
                         
   
                               <div className='flex flex-row justify-between py-2 w-full'>
                                       <div className='flex justify-center items-center'>
                                           <p className='text-right w-full pr-4 text-sm text-gray-400'>جوجه راس فارم نمونه </p>
                                       </div>
                                       <div className='flex justify-center  items-center '>
                                         <h2 className='text-gray-500 text-right whitespace-nowrap text-sm'> دانلود آنالیز</h2>
                                       </div>
                                       
                                       <div className='flex justify-center items-center '>
                                         <h2 className='text-red-500 pl-4  whitespace-nowrap'>10000 </h2>
                                       </div>
                               </div>
   
                               <div className='flex flex-row justify-between border-t-2 border-gray-600 py-2 w-full'>
                                       <div className='flex justify-center items-center'>
                                           <p className='text-right w-full pr-4 text-sm text-gray-400'>جوجه راس فارم نمونه </p>
                                       </div>
                                       <div className='flex justify-center  items-center '>
                                         <h2 className='text-gray-500 text-right px-4 whitespace-nowrap text-sm'> دانلود آنالیز</h2>
                                       </div>
                                       
                                       <div className='flex justify-center items-center '>
                                         <h2 className='text-red-500 pl-4  whitespace-nowrap'>10000 </h2>
                                       </div>
                               </div>
   
                               <div className='flex flex-row justify-between border-t-2 border-gray-600 py-2 w-full'>
                                       <div className='flex justify-center items-center'>
                                           <p className='text-right w-full pr-4 text-sm text-gray-400'>جوجه راس فارم نمونه </p>
                                       </div>
                                       <div className='flex justify-center  items-center '>
                                         <h2 className='text-gray-500 text-right whitespace-nowrap text-sm'> دانلود آنالیز</h2>
                                       </div>
                                       
                                       <div className='flex justify-center items-center '>
                                         <h2 className='text-green-500 pl-4  whitespace-nowrap'>10000 </h2>
                                       </div>
                               </div>
   
   
                               <div className='flex flex-row justify-between border-t-2 border-gray-600 py-2 w-full'>
                                       <div className='flex justify-center items-center'>
                                           <p className='text-right w-full pr-4 text-sm text-gray-400'>جوجه راس فارم نمونه </p>
                                       </div>
                                       <div className='flex justify-center  items-center '>
                                         <h2 className='text-gray-500 text-right whitespace-nowrap text-sm'> دانلود آنالیز</h2>
                                       </div>
                                       
                                       <div className='flex justify-center items-center '>
                                         <h2 className='text-red-500 pl-4  whitespace-nowrap'>10000 </h2>
                                       </div>
                               </div>
   
   
                               <div className='flex flex-row justify-between border-t-2 border-gray-600 py-2 w-full'>
                                       <div className='flex justify-center items-center'>
                                           <p className='text-right w-full pr-4 text-sm text-gray-400'>جوجه راس فارم نمونه </p>
                                       </div>
                                       <div className='flex justify-center  items-center '>
                                         <h2 className='text-gray-500 text-right whitespace-nowrap text-sm'> دانلود آنالیز</h2>
                                       </div>
                                       
                                       <div className='flex justify-center items-center '>
                                         <h2 className='text-red-500 pl-4  whitespace-nowrap'>10000 </h2>
                                       </div>
                               </div>
   
                               <div className='flex flex-row justify-between border-t-2 border-gray-600 py-2 w-full'>
                                       <div className='flex justify-center items-center'>
                                           <p className='text-right w-full pr-4 text-sm text-gray-400'>جوجه راس فارم نمونه </p>
                                       </div>
                                       <div className='flex justify-center  items-center '>
                                         <h2 className='text-gray-500 text-right whitespace-nowrap text-sm'> دانلود آنالیز</h2>
                                       </div>
                                       
                                       <div className='flex justify-center items-center '>
                                         <h2 className='text-red-500 pl-4  whitespace-nowrap'>10000 </h2>
                                       </div>
                               </div>
   
                               <div className='flex flex-row justify-between border-t-2 border-gray-600 py-2 w-full'>
                                       <div className='flex justify-center items-center'>
                                           <p className='text-right w-full pr-4 text-sm text-gray-400'>جوجه راس فارم نمونه </p>
                                       </div>
                                       <div className='flex justify-center  items-center '>
                                         <h2 className='text-gray-500 text-right whitespace-nowrap text-sm'> دانلود آنالیز</h2>
                                       </div>
                                       
                                       <div className='flex justify-center items-center '>
                                         <h2 className='text-green-500 pl-4  whitespace-nowrap'>10000 </h2>
                                       </div>
                               </div>
   
                               <div className='flex flex-row justify-between border-t-2 border-gray-600 py-2 w-full'>
                                       <div className='flex justify-center items-center'>
                                           <p className='text-right w-full pr-4 text-sm text-gray-400'>جوجه راس فارم نمونه </p>
                                       </div>
                                       <div className='flex justify-center  items-center '>
                                         <h2 className='text-gray-500 text-right whitespace-nowrap text-sm'> دانلود آنالیز</h2>
                                       </div>
                                       
                                       <div className='flex justify-center items-center '>
                                         <h2 className='text-red-500 pl-4  whitespace-nowrap'>10000 </h2>
                                       </div>
                               </div>
   
                               <div className='flex flex-row justify-between border-t-2 border-gray-600 py-2 w-full'>
                                       <div className='flex justify-center items-center'>
                                           <p className='text-right w-full pr-4 text-sm text-gray-400'>جوجه راس فارم نمونه </p>
                                       </div>
                                       <div className='flex justify-center  items-center '>
                                         <h2 className='text-gray-500 text-right whitespace-nowrap text-sm'> دانلود آنالیز</h2>
                                       </div>
                                       
                                       <div className='flex justify-center items-center '>
                                         <h2 className='text-green-500 pl-4  whitespace-nowrap'>10000 </h2>
                                       </div>
                               </div>
   
                               <div className='flex flex-row justify-between border-t-2 border-gray-600 py-2 w-full'>
                                       <div className='flex justify-center items-center'>
                                           <p className='text-right w-full pr-4 text-sm text-gray-400'>جوجه راس فارم نمونه </p>
                                       </div>
                                       <div className='flex justify-center  items-center '>
                                         <h2 className='text-gray-500 text-right whitespace-nowrap text-sm'> دانلود آنالیز</h2>
                                       </div>
                                       
                                       <div className='flex justify-center items-center '>
                                         <h2 className='text-red-500 pl-4  whitespace-nowrap'>10000 </h2>
                                       </div>
                               </div>
   
   
                               <div className='flex flex-row justify-between border-t-2 border-gray-600 py-2 w-full'>
                                       <div className='flex justify-center items-center'>
                                           <p className='text-right w-full pr-4 text-sm text-gray-400'>جوجه راس فارم نمونه </p>
                                       </div>
                                       <div className='flex justify-center  items-center '>
                                         <h2 className='text-gray-500 text-right whitespace-nowrap text-sm'> دانلود آنالیز</h2>
                                       </div>
                                       
                                       <div className='flex justify-center items-center '>
                                         <h2 className='text-green-500 pl-4  whitespace-nowrap'>10000 </h2>
                                       </div>
                               </div>
   
   
                               <div className='flex flex-row justify-between border-t-2 border-gray-600 py-2 w-full'>
                                       <div className='flex justify-center items-center'>
                                           <p className='text-right w-full pr-4 text-sm text-gray-400'>جوجه راس فارم نمونه </p>
                                       </div>
                                       <div className='flex justify-center  items-center '>
                                         <h2 className='text-gray-500 text-right whitespace-nowrap text-sm'> دانلود آنالیز</h2>
                                       </div>
                                       
                                       <div className='flex justify-center items-center '>
                                         <h2 className='text-green-500 pl-4  whitespace-nowrap'>10000 </h2>
                                       </div>
                               </div>
   
                               <div className='flex flex-row justify-between border-t-2 border-gray-600 py-2 w-full'>
                                       <div className='flex justify-center items-center'>
                                           <p className='text-right w-full pr-4 text-sm text-gray-400'>جوجه راس فارم نمونه </p>
                                       </div>
                                       <div className='flex justify-center  items-center '>
                                         <h2 className='text-gray-500 text-right whitespace-nowrap text-sm'> دانلود آنالیز</h2>
                                       </div>
                                       
                                       <div className='flex justify-center items-center '>
                                         <h2 className='text-red-500 pl-4  whitespace-nowrap'>10000 </h2>
                                       </div>
                               </div>
   
                           
                           </div>
                       </TabPanel>
   {/* ............................................................cobb........................................................... */}
   <TabPanel>
                   
                        
                   <div className='flex flex-col  justify-between py-2  items-center w-full'>
                 
                 
   
                       <div className='flex flex-row justify-between border-t-2 border-gray-600 py-2 w-full'>
                               <div className='flex justify-center items-center'>
                                   <p className='text-right w-full pr-4 text-sm text-gray-400'>جوجه کاب فارم نمونه </p>
                               </div>
                               <div className='flex justify-center  items-center '>
                                 <h2 className='text-gray-500 text-right whitespace-nowrap text-sm'> دانلود آنالیز</h2>
                               </div>
                               
                               <div className='flex justify-center items-center '>
                                 <h2 className='text-red-500 pl-4  whitespace-nowrap'>9000 </h2>
                               </div>
                       </div>
   
                       <div className='flex flex-row justify-between border-t-2 border-gray-600 py-2 w-full'>
                               <div className='flex justify-center items-center'>
                                   <p className='text-right w-full pr-4 text-sm text-gray-400'>جوجه کاب فارم نمونه </p>
                               </div>
                               <div className='flex justify-center  items-center '>
                                 <h2 className='text-gray-500 text-right px-4 whitespace-nowrap text-sm'> دانلود آنالیز</h2>
                               </div>
                               
                               <div className='flex justify-center items-center '>
                                 <h2 className='text-green-500 pl-4  whitespace-nowrap'>9500 </h2>
                               </div>
                       </div>
   
                       <div className='flex flex-row justify-between border-t-2 border-gray-600 py-2 w-full'>
                               <div className='flex justify-center items-center'>
                                   <p className='text-right w-full pr-4 text-sm text-gray-400'>جوجه کاب فارم نمونه </p>
                               </div>
                               <div className='flex justify-center  items-center '>
                                 <h2 className='text-gray-500 text-right whitespace-nowrap text-sm'> دانلود آنالیز</h2>
                               </div>
                               
                               <div className='flex justify-center items-center '>
                                 <h2 className='text-green-500 pl-4  whitespace-nowrap'>10000 </h2>
                               </div>
                       </div>
   
   
                       <div className='flex flex-row justify-between border-t-2 border-gray-600 py-2 w-full'>
                               <div className='flex justify-center items-center'>
                                   <p className='text-right w-full pr-4 text-sm text-gray-400'>جوجه کاب فارم نمونه </p>
                               </div>
                               <div className='flex justify-center  items-center '>
                                 <h2 className='text-gray-500 text-right whitespace-nowrap text-sm'> دانلود آنالیز</h2>
                               </div>
                               
                               <div className='flex justify-center items-center '>
                                 <h2 className='text-red-500 pl-4  whitespace-nowrap'>10000 </h2>
                               </div>
                       </div>
   
   
                       <div className='flex flex-row justify-between border-t-2 border-gray-600 py-2 w-full'>
                               <div className='flex justify-center items-center'>
                                   <p className='text-right w-full pr-4 text-sm text-gray-400'>جوجه کاب فارم نمونه </p>
                               </div>
                               <div className='flex justify-center  items-center '>
                                 <h2 className='text-gray-500 text-right whitespace-nowrap text-sm'> دانلود آنالیز</h2>
                               </div>
                               
                               <div className='flex justify-center items-center '>
                                 <h2 className='text-red-500 pl-4  whitespace-nowrap'>10000 </h2>
                               </div>
                       </div>
   
                       <div className='flex flex-row justify-between border-t-2 border-gray-600 py-2 w-full'>
                               <div className='flex justify-center items-center'>
                                   <p className='text-right w-full pr-4 text-sm text-gray-400'>جوجه کاب فارم نمونه </p>
                               </div>
                               <div className='flex justify-center  items-center '>
                                 <h2 className='text-gray-500 text-right whitespace-nowrap text-sm'> دانلود آنالیز</h2>
                               </div>
                               
                               <div className='flex justify-center items-center '>
                                 <h2 className='text-green-500 pl-4  whitespace-nowrap'>9000 </h2>
                               </div>
                       </div>
   
                       <div className='flex flex-row justify-between border-t-2 border-gray-600 py-2 w-full'>
                               <div className='flex justify-center items-center'>
                                   <p className='text-right w-full pr-4 text-sm text-gray-400'>جوجه کاب فارم نمونه </p>
                               </div>
                               <div className='flex justify-center  items-center '>
                                 <h2 className='text-gray-500 text-right whitespace-nowrap text-sm'> دانلود آنالیز</h2>
                               </div>
                               
                               <div className='flex justify-center items-center '>
                                 <h2 className='text-green-500 pl-4  whitespace-nowrap'>10000 </h2>
                               </div>
                       </div>
   
                       <div className='flex flex-row justify-between border-t-2 border-gray-600 py-2 w-full'>
                               <div className='flex justify-center items-center'>
                                   <p className='text-right w-full pr-4 text-sm text-gray-400'>جوجه کاب فارم نمونه </p>
                               </div>
                               <div className='flex justify-center  items-center '>
                                 <h2 className='text-gray-500 text-right whitespace-nowrap text-sm'> دانلود آنالیز</h2>
                               </div>
                               
                               <div className='flex justify-center items-center '>
                                 <h2 className='text-green-500 pl-4  whitespace-nowrap'>9800 </h2>
                               </div>
                       </div>
   
                       <div className='flex flex-row justify-between border-t-2 border-gray-600 py-2 w-full'>
                               <div className='flex justify-center items-center'>
                                   <p className='text-right w-full pr-4 text-sm text-gray-400'>جوجه کاب فارم نمونه </p>
                               </div>
                               <div className='flex justify-center  items-center '>
                                 <h2 className='text-gray-500 text-right whitespace-nowrap text-sm'> دانلود آنالیز</h2>
                               </div>
                               
                               <div className='flex justify-center items-center '>
                                 <h2 className='text-green-500 pl-4  whitespace-nowrap'>9660 </h2>
                               </div>
                       </div>
   
                       <div className='flex flex-row justify-between border-t-2 border-gray-600 py-2 w-full'>
                               <div className='flex justify-center items-center'>
                                   <p className='text-right w-full pr-4 text-sm text-gray-400'>جوجه کاب فارم نمونه </p>
                               </div>
                               <div className='flex justify-center  items-center '>
                                 <h2 className='text-gray-500 text-right whitespace-nowrap text-sm'> دانلود آنالیز</h2>
                               </div>
                               
                               <div className='flex justify-center items-center '>
                                 <h2 className='text-red-500 pl-4  whitespace-nowrap'>9500 </h2>
                               </div>
                       </div>
   
   
                       <div className='flex flex-row justify-between border-t-2 border-gray-600 py-2 w-full'>
                               <div className='flex justify-center items-center'>
                                   <p className='text-right w-full pr-4 text-sm text-gray-400'>جوجه کاب فارم نمونه </p>
                               </div>
                               <div className='flex justify-center  items-center '>
                                 <h2 className='text-gray-500 text-right whitespace-nowrap text-sm'> دانلود آنالیز</h2>
                               </div>
                               
                               <div className='flex justify-center items-center '>
                                 <h2 className='text-green-500 pl-4  whitespace-nowrap'>8900 </h2>
                               </div>
                       </div>
   
   
                       <div className='flex flex-row justify-between border-t-2 border-gray-600 py-2 w-full'>
                               <div className='flex justify-center items-center'>
                                   <p className='text-right w-full pr-4 text-sm text-gray-400'>جوجه کاب فارم نمونه </p>
                               </div>
                               <div className='flex justify-center  items-center '>
                                 <h2 className='text-gray-500 text-right whitespace-nowrap text-sm'> دانلود آنالیز</h2>
                               </div>
                               
                               <div className='flex justify-center items-center '>
                                 <h2 className='text-red-500 pl-4  whitespace-nowrap'>9000 </h2>
                               </div>
                       </div>
   
                       <div className='flex flex-row justify-between border-t-2 border-gray-600 py-2 w-full'>
                               <div className='flex justify-center items-center'>
                                   <p className='text-right w-full pr-4 text-sm text-gray-400'>جوجه کاب فارم نمونه </p>
                               </div>
                               <div className='flex justify-center  items-center '>
                                 <h2 className='text-gray-500 text-right whitespace-nowrap text-sm'> دانلود آنالیز</h2>
                               </div>
                               
                               <div className='flex justify-center items-center '>
                                 <h2 className='text-red-500 pl-4  whitespace-nowrap'>9800 </h2>
                               </div>
                       </div>
   
                    
                   </div>
               </TabPanel>
   {/* ............................................................hobard........................................................... */}
   
   <TabPanel>
                   
                        
                   <div className='flex flex-col  justify-between py-2  items-center w-full'>
                 
                 
   
                       <div className='flex flex-row justify-between border-t-2 border-gray-600 py-2 w-full'>
                               <div className='flex justify-center items-center'>
                                   <p className='text-right w-full pr-4 text-sm text-gray-400'>جوجه راس فارم نمونه </p>
                               </div>
                               <div className='flex justify-center  items-center '>
                                 <h2 className='text-gray-500 text-right whitespace-nowrap text-sm'> دانلود آنالیز</h2>
                               </div>
                               
                               <div className='flex justify-center items-center '>
                                 <h2 className='text-red-500 pl-4  whitespace-nowrap'>10000 </h2>
                               </div>
                       </div>
   
                       <div className='flex flex-row justify-between border-t-2 border-gray-600 py-2 w-full'>
                               <div className='flex justify-center items-center'>
                                   <p className='text-right w-full pr-4 text-sm text-gray-400'>جوجه راس فارم نمونه </p>
                               </div>
                               <div className='flex justify-center  items-center '>
                                 <h2 className='text-gray-500 text-right px-4 whitespace-nowrap text-sm'> دانلود آنالیز</h2>
                               </div>
                               
                               <div className='flex justify-center items-center '>
                                 <h2 className='text-red-500 pl-4  whitespace-nowrap'>10000 </h2>
                               </div>
                       </div>
   
                       <div className='flex flex-row justify-between border-t-2 border-gray-600 py-2 w-full'>
                               <div className='flex justify-center items-center'>
                                   <p className='text-right w-full pr-4 text-sm text-gray-400'>جوجه راس فارم نمونه </p>
                               </div>
                               <div className='flex justify-center  items-center '>
                                 <h2 className='text-gray-500 text-right whitespace-nowrap text-sm'> دانلود آنالیز</h2>
                               </div>
                               
                               <div className='flex justify-center items-center '>
                                 <h2 className='text-green-500 pl-4  whitespace-nowrap'>10000 </h2>
                               </div>
                       </div>
   
   
                       <div className='flex flex-row justify-between border-t-2 border-gray-600 py-2 w-full'>
                               <div className='flex justify-center items-center'>
                                   <p className='text-right w-full pr-4 text-sm text-gray-400'>جوجه راس فارم نمونه </p>
                               </div>
                               <div className='flex justify-center  items-center '>
                                 <h2 className='text-gray-500 text-right whitespace-nowrap text-sm'> دانلود آنالیز</h2>
                               </div>
                               
                               <div className='flex justify-center items-center '>
                                 <h2 className='text-red-500 pl-4  whitespace-nowrap'>10000 </h2>
                               </div>
                       </div>
   
   
                       <div className='flex flex-row justify-between border-t-2 border-gray-600 py-2 w-full'>
                               <div className='flex justify-center items-center'>
                                   <p className='text-right w-full pr-4 text-sm text-gray-400'>جوجه راس فارم نمونه </p>
                               </div>
                               <div className='flex justify-center  items-center '>
                                 <h2 className='text-gray-500 text-right whitespace-nowrap text-sm'> دانلود آنالیز</h2>
                               </div>
                               
                               <div className='flex justify-center items-center '>
                                 <h2 className='text-red-500 pl-4  whitespace-nowrap'>10000 </h2>
                               </div>
                       </div>
   
                       <div className='flex flex-row justify-between border-t-2 border-gray-600 py-2 w-full'>
                               <div className='flex justify-center items-center'>
                                   <p className='text-right w-full pr-4 text-sm text-gray-400'>جوجه راس فارم نمونه </p>
                               </div>
                               <div className='flex justify-center  items-center '>
                                 <h2 className='text-gray-500 text-right whitespace-nowrap text-sm'> دانلود آنالیز</h2>
                               </div>
                               
                               <div className='flex justify-center items-center '>
                                 <h2 className='text-red-500 pl-4  whitespace-nowrap'>10000 </h2>
                               </div>
                       </div>
   
                       <div className='flex flex-row justify-between border-t-2 border-gray-600 py-2 w-full'>
                               <div className='flex justify-center items-center'>
                                   <p className='text-right w-full pr-4 text-sm text-gray-400'>جوجه راس فارم نمونه </p>
                               </div>
                               <div className='flex justify-center  items-center '>
                                 <h2 className='text-gray-500 text-right whitespace-nowrap text-sm'> دانلود آنالیز</h2>
                               </div>
                               
                               <div className='flex justify-center items-center '>
                                 <h2 className='text-green-500 pl-4  whitespace-nowrap'>10000 </h2>
                               </div>
                       </div>
   
                       <div className='flex flex-row justify-between border-t-2 border-gray-600 py-2 w-full'>
                               <div className='flex justify-center items-center'>
                                   <p className='text-right w-full pr-4 text-sm text-gray-400'>جوجه راس فارم نمونه </p>
                               </div>
                               <div className='flex justify-center  items-center '>
                                 <h2 className='text-gray-500 text-right whitespace-nowrap text-sm'> دانلود آنالیز</h2>
                               </div>
                               
                               <div className='flex justify-center items-center '>
                                 <h2 className='text-red-500 pl-4  whitespace-nowrap'>10000 </h2>
                               </div>
                       </div>
   
                       <div className='flex flex-row justify-between border-t-2 border-gray-600 py-2 w-full'>
                               <div className='flex justify-center items-center'>
                                   <p className='text-right w-full pr-4 text-sm text-gray-400'>جوجه راس فارم نمونه </p>
                               </div>
                               <div className='flex justify-center  items-center '>
                                 <h2 className='text-gray-500 text-right whitespace-nowrap text-sm'> دانلود آنالیز</h2>
                               </div>
                               
                               <div className='flex justify-center items-center '>
                                 <h2 className='text-green-500 pl-4  whitespace-nowrap'>10000 </h2>
                               </div>
                       </div>
   
                       <div className='flex flex-row justify-between border-t-2 border-gray-600 py-2 w-full'>
                               <div className='flex justify-center items-center'>
                                   <p className='text-right w-full pr-4 text-sm text-gray-400'>جوجه راس فارم نمونه </p>
                               </div>
                               <div className='flex justify-center  items-center '>
                                 <h2 className='text-gray-500 text-right whitespace-nowrap text-sm'> دانلود آنالیز</h2>
                               </div>
                               
                               <div className='flex justify-center items-center '>
                                 <h2 className='text-red-500 pl-4  whitespace-nowrap'>10000 </h2>
                               </div>
                       </div>
   
   
                       <div className='flex flex-row justify-between border-t-2 border-gray-600 py-2 w-full'>
                               <div className='flex justify-center items-center'>
                                   <p className='text-right w-full pr-4 text-sm text-gray-400'>جوجه راس فارم نمونه </p>
                               </div>
                               <div className='flex justify-center  items-center '>
                                 <h2 className='text-gray-500 text-right whitespace-nowrap text-sm'> دانلود آنالیز</h2>
                               </div>
                               
                               <div className='flex justify-center items-center '>
                                 <h2 className='text-green-500 pl-4  whitespace-nowrap'>10000 </h2>
                               </div>
                       </div>
   
   
                       <div className='flex flex-row justify-between border-t-2 border-gray-600 py-2 w-full'>
                               <div className='flex justify-center items-center'>
                                   <p className='text-right w-full pr-4 text-sm text-gray-400'>جوجه راس فارم نمونه </p>
                               </div>
                               <div className='flex justify-center  items-center '>
                                 <h2 className='text-gray-500 text-right whitespace-nowrap text-sm'> دانلود آنالیز</h2>
                               </div>
                               
                               <div className='flex justify-center items-center '>
                                 <h2 className='text-green-500 pl-4  whitespace-nowrap'>10000 </h2>
                               </div>
                       </div>
   
                       <div className='flex flex-row justify-between border-t-2 border-gray-600 py-2 w-full'>
                               <div className='flex justify-center items-center'>
                                   <p className='text-right w-full pr-4 text-sm text-gray-400'>جوجه راس فارم نمونه </p>
                               </div>
                               <div className='flex justify-center  items-center '>
                                 <h2 className='text-gray-500 text-right whitespace-nowrap text-sm'> دانلود آنالیز</h2>
                               </div>
                               
                               <div className='flex justify-center items-center '>
                                 <h2 className='text-red-500 pl-4  whitespace-nowrap'>10000 </h2>
                               </div>
                       </div>
   
                 
                   </div>
               </TabPanel>
   
               {/* ............................................................cob2........................................................... */}
   
   <TabPanel>
                   
                        
                   <div className='flex flex-col  justify-between py-2  items-center w-full'>
                 
                 
   
                       <div className='flex flex-row justify-between border-t-2 border-gray-600 py-2 w-full'>
                               <div className='flex justify-center items-center'>
                                   <p className='text-right w-full pr-4 text-sm text-gray-400'>جوجه راس فارم نمونه </p>
                               </div>
                               <div className='flex justify-center  items-center '>
                                 <h2 className='text-gray-500 text-right whitespace-nowrap text-sm'> دانلود آنالیز</h2>
                               </div>
                               
                               <div className='flex justify-center items-center '>
                                 <h2 className='text-red-500 pl-4  whitespace-nowrap'>10000 </h2>
                               </div>
                       </div>
   
                       <div className='flex flex-row justify-between border-t-2 border-gray-600 py-2 w-full'>
                               <div className='flex justify-center items-center'>
                                   <p className='text-right w-full pr-4 text-sm text-gray-400'>جوجه راس فارم نمونه </p>
                               </div>
                               <div className='flex justify-center  items-center '>
                                 <h2 className='text-gray-500 text-right px-4 whitespace-nowrap text-sm'> دانلود آنالیز</h2>
                               </div>
                               
                               <div className='flex justify-center items-center '>
                                 <h2 className='text-red-500 pl-4  whitespace-nowrap'>10000 </h2>
                               </div>
                       </div>
   
                       <div className='flex flex-row justify-between border-t-2 border-gray-600 py-2 w-full'>
                               <div className='flex justify-center items-center'>
                                   <p className='text-right w-full pr-4 text-sm text-gray-400'>جوجه راس فارم نمونه </p>
                               </div>
                               <div className='flex justify-center  items-center '>
                                 <h2 className='text-gray-500 text-right whitespace-nowrap text-sm'> دانلود آنالیز</h2>
                               </div>
                               
                               <div className='flex justify-center items-center '>
                                 <h2 className='text-green-500 pl-4  whitespace-nowrap'>10000 </h2>
                               </div>
                       </div>
   
   
                       <div className='flex flex-row justify-between border-t-2 border-gray-600 py-2 w-full'>
                               <div className='flex justify-center items-center'>
                                   <p className='text-right w-full pr-4 text-sm text-gray-400'>جوجه راس فارم نمونه </p>
                               </div>
                               <div className='flex justify-center  items-center '>
                                 <h2 className='text-gray-500 text-right whitespace-nowrap text-sm'> دانلود آنالیز</h2>
                               </div>
                               
                               <div className='flex justify-center items-center '>
                                 <h2 className='text-red-500 pl-4  whitespace-nowrap'>10000 </h2>
                               </div>
                       </div>
   
   
                       <div className='flex flex-row justify-between border-t-2 border-gray-600 py-2 w-full'>
                               <div className='flex justify-center items-center'>
                                   <p className='text-right w-full pr-4 text-sm text-gray-400'>جوجه راس فارم نمونه </p>
                               </div>
                               <div className='flex justify-center  items-center '>
                                 <h2 className='text-gray-500 text-right whitespace-nowrap text-sm'> دانلود آنالیز</h2>
                               </div>
                               
                               <div className='flex justify-center items-center '>
                                 <h2 className='text-red-500 pl-4  whitespace-nowrap'>10000 </h2>
                               </div>
                       </div>
   
                       <div className='flex flex-row justify-between border-t-2 border-gray-600 py-2 w-full'>
                               <div className='flex justify-center items-center'>
                                   <p className='text-right w-full pr-4 text-sm text-gray-400'>جوجه راس فارم نمونه </p>
                               </div>
                               <div className='flex justify-center  items-center '>
                                 <h2 className='text-gray-500 text-right whitespace-nowrap text-sm'> دانلود آنالیز</h2>
                               </div>
                               
                               <div className='flex justify-center items-center '>
                                 <h2 className='text-red-500 pl-4  whitespace-nowrap'>10000 </h2>
                               </div>
                       </div>
   
                       <div className='flex flex-row justify-between border-t-2 border-gray-600 py-2 w-full'>
                               <div className='flex justify-center items-center'>
                                   <p className='text-right w-full pr-4 text-sm text-gray-400'>جوجه راس فارم نمونه </p>
                               </div>
                               <div className='flex justify-center  items-center '>
                                 <h2 className='text-gray-500 text-right whitespace-nowrap text-sm'> دانلود آنالیز</h2>
                               </div>
                               
                               <div className='flex justify-center items-center '>
                                 <h2 className='text-green-500 pl-4  whitespace-nowrap'>10000 </h2>
                               </div>
                       </div>
   
                       <div className='flex flex-row justify-between border-t-2 border-gray-600 py-2 w-full'>
                               <div className='flex justify-center items-center'>
                                   <p className='text-right w-full pr-4 text-sm text-gray-400'>جوجه راس فارم نمونه </p>
                               </div>
                               <div className='flex justify-center  items-center '>
                                 <h2 className='text-gray-500 text-right whitespace-nowrap text-sm'> دانلود آنالیز</h2>
                               </div>
                               
                               <div className='flex justify-center items-center '>
                                 <h2 className='text-red-500 pl-4  whitespace-nowrap'>10000 </h2>
                               </div>
                       </div>
   
                       <div className='flex flex-row justify-between border-t-2 border-gray-600 py-2 w-full'>
                               <div className='flex justify-center items-center'>
                                   <p className='text-right w-full pr-4 text-sm text-gray-400'>جوجه راس فارم نمونه </p>
                               </div>
                               <div className='flex justify-center  items-center '>
                                 <h2 className='text-gray-500 text-right whitespace-nowrap text-sm'> دانلود آنالیز</h2>
                               </div>
                               
                               <div className='flex justify-center items-center '>
                                 <h2 className='text-green-500 pl-4  whitespace-nowrap'>10000 </h2>
                               </div>
                       </div>
   
                       <div className='flex flex-row justify-between border-t-2 border-gray-600 py-2 w-full'>
                               <div className='flex justify-center items-center'>
                                   <p className='text-right w-full pr-4 text-sm text-gray-400'>جوجه راس فارم نمونه </p>
                               </div>
                               <div className='flex justify-center  items-center '>
                                 <h2 className='text-gray-500 text-right whitespace-nowrap text-sm'> دانلود آنالیز</h2>
                               </div>
                               
                               <div className='flex justify-center items-center '>
                                 <h2 className='text-red-500 pl-4  whitespace-nowrap'>10000 </h2>
                               </div>
                       </div>
   
   
                       <div className='flex flex-row justify-between border-t-2 border-gray-600 py-2 w-full'>
                               <div className='flex justify-center items-center'>
                                   <p className='text-right w-full pr-4 text-sm text-gray-400'>جوجه راس فارم نمونه </p>
                               </div>
                               <div className='flex justify-center  items-center '>
                                 <h2 className='text-gray-500 text-right whitespace-nowrap text-sm'> دانلود آنالیز</h2>
                               </div>
                               
                               <div className='flex justify-center items-center '>
                                 <h2 className='text-green-500 pl-4  whitespace-nowrap'>10000 </h2>
                               </div>
                       </div>
   
   
                       <div className='flex flex-row justify-between border-t-2 border-gray-600 py-2 w-full'>
                               <div className='flex justify-center items-center'>
                                   <p className='text-right w-full pr-4 text-sm text-gray-400'>جوجه راس فارم نمونه </p>
                               </div>
                               <div className='flex justify-center  items-center '>
                                 <h2 className='text-gray-500 text-right whitespace-nowrap text-sm'> دانلود آنالیز</h2>
                               </div>
                               
                               <div className='flex justify-center items-center '>
                                 <h2 className='text-green-500 pl-4  whitespace-nowrap'>10000 </h2>
                               </div>
                       </div>
   
                       <div className='flex flex-row justify-between border-t-2 border-gray-600 py-2 w-full'>
                               <div className='flex justify-center items-center'>
                                   <p className='text-right w-full pr-4 text-sm text-gray-400'>جوجه راس فارم نمونه </p>
                               </div>
                               <div className='flex justify-center  items-center '>
                                 <h2 className='text-gray-500 text-right whitespace-nowrap text-sm'> دانلود آنالیز</h2>
                               </div>
                               
                               <div className='flex justify-center items-center '>
                                 <h2 className='text-red-500 pl-4  whitespace-nowrap'>10000 </h2>
                               </div>
                       </div>
   
              
                   </div>
               </TabPanel>
                   </TabPanels>
               </Tabs>
                <div className='flex justify-around items-center'>
                    <Link href='tel:+984432382953'>
                   <div className='rounded border flex justify-center mt-5 items-center'>
                         <h2 className='text-white px-5 py-2 text-sm '> سفارش تلفنی</h2>
                        <BsArrowRight className='text-white mx-4 text-xl animate-pulse'/>
                   </div>
                    </Link>

                   <div className='rounded border flex justify-center mt-5 items-center'>
                         <h2 className='text-white px-5 py-2 text-sm '>  سفارش آنلاین</h2>
                        <BsArrowRight className='text-white mx-4 text-xl animate-pulse'/>
                   </div>
                </div>
             
              
           </div>
    </div>
  )
}

export default Body