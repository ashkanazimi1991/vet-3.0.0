import React from 'react';
import Image from 'next/image';
import { Tabs, TabList, TabPanels, Tab, TabPanel, ChakraProvider , Checkbox, extendTheme  } from '@chakra-ui/react';
import Link from 'next/link';
import dynamic from "next/dynamic";
import { BsArrowRight } from 'react-icons/bs';


const Radial = dynamic(() => import('../chart/Radial'))
const RadialChick = dynamic(() => import('../chart/RadialChick'))

const Desend = dynamic(() => import('../chart/Desend'))
const LineChart = dynamic(() => import('../chart/LineChart'))









// import img2 from '../../public/images/shopgig.png'
// import img3 from '../../public/images/fastfoodp.png'
// import img4 from '../../public/images/realstatep.png'
// import img5 from '../../public/images/healthp.png'
// import img6 from '../../public/images/schoolp.png'


const fonts = {
    body:'IRANSansWeb',
    // heading:'IRANSansWeb'.

}
const theme= extendTheme({fonts})






function GigP() {
  return (
      <div className='flex flex-col min-h-screen w-full bg-[#000000b4]'>
     <ChakraProvider theme={theme}>
    <h1 className='text-white text-ئی border-y-2 text-center mt-20 py-4'>مجموعه خدمات وتنا</h1>
    
    <div className="w-full h-full grid   bg-[#07090a15] px-[5%]  grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 py-[5%]  gap-8 ">
  
        <div className='border-gray-800 border rounded-xl py-5 w-full h-full bg-[#000000c4]'>
               
            <h2 className='text-white text-center px-5 pt-4 pb-2'>بسترهای افزایش راندمان</h2>
            <p className='text-gray-400 text-center text-sm px-5 py-2 mb-2'>ارائه تمام نیازهای پرورش دهنده های طیور گوشتی  </p>

            
            <Tabs isLazy isFitted dir='rtl'  >
                  <TabList  color="gray.500">
                    <Tab>خدمات تامینی</Tab>
                    <Tab>مشاوره ای</Tab>
                    <Tab>جامع</Tab>
                </TabList>
                
                <TabPanels>
                    {/* ...................................................basic................................................... */}
                    <TabPanel>
                        <Radial/>
                     
                        <div className='flex flex-col  justify-between py-2  items-center w-full'>
                      
                      

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full pr-4 text-sm text-gray-400'>ارائه برترین برندهای تجهیزات پرورشی </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                            </div>


                            
                           
                            

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full pr-4 text-sm text-gray-400'>ارائه برترین برندهای تجهیزات پرورشی </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full pr-4 text-sm text-gray-400'>ارائه برترین برندهای تجهیزات پرورشی </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full pr-4 text-sm text-gray-400'>ارائه برترین برندهای تجهیزات پرورشی </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full pr-4 text-sm text-gray-400'>ارائه برترین برندهای تجهیزات پرورشی </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                            </div>

                            <div className='rounded border flex justify-center mt-10 items-center'>
                                <BsArrowRight className='text-white mx-4 text-xl animate-pulse'/>
                                <h2 className='text-white px-5 py-2  text-sm '> شروع همکاری</h2>
                            </div>


                        </div>
                    </TabPanel>
{/* ............................................................standard........................................................... */}
                    <TabPanel>
                        <Desend/>
                     
                        <div className='flex flex-col  justify-between py-2  items-center w-full'>
                      
            <p className='text-gray-400 text-right text-sm px-5 py-2 mb-2'>کاهش چشمگیر تلفات  </p>
                      

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full pr-4 text-sm text-gray-400'>ارائه برترین برندهای تجهیزات پرورشی </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                            </div>


                            
                           
                            

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full pr-4 text-sm text-gray-400'>ارائه برترین برندهای تجهیزات پرورشی </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full pr-4 text-sm text-gray-400'>ارائه برترین برندهای تجهیزات پرورشی </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full pr-4 text-sm text-gray-400'>ارائه برترین برندهای تجهیزات پرورشی </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full pr-4 text-sm text-gray-400'>ارائه برترین برندهای تجهیزات پرورشی </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                            </div>

                            


                        </div>
                    </TabPanel>
{/* ............................................................premium........................................................... */}

                    <TabPanel>
                    <LineChart />
                     
                        <div className='flex flex-col  justify-between py-2  items-center w-full'>
                      
            <p className='text-gray-400 text-right text-sm px-5 py-2 mb-2'>افزایش راندمان و ضریب تبدیل </p>
                      

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full pr-4 text-sm text-gray-400'>ارائه برترین برندهای تجهیزات پرورشی </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                            </div>


                            
                           
                            

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full pr-4 text-sm text-gray-400'>ارائه برترین برندهای تجهیزات پرورشی </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full pr-4 text-sm text-gray-400'>ارائه برترین برندهای تجهیزات پرورشی </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full pr-4 text-sm text-gray-400'>ارائه برترین برندهای تجهیزات پرورشی </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full pr-4 text-sm text-gray-400'>ارائه برترین برندهای تجهیزات پرورشی </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                            </div>

                            


                        </div>
                    </TabPanel>
                </TabPanels>
            </Tabs>
           
        </div>
{/* .....................nextone........................................ */}
<div className='border-gray-800 border rounded-xl py-5 w-full h-full bg-[#000000c4]'>
               
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
                    {/* ...................................................basic................................................... */}
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

                            <div className='rounded border flex justify-center mt-10 items-center'>
                                <BsArrowRight className='text-white mx-4 text-xl animate-pulse'/>
                                <h2 className='text-white px-5 py-2 text-sm '> سفارش جوجه گوشتی</h2>
                            </div>
                        </div>
                    </TabPanel>
{/* ............................................................standard........................................................... */}
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

                    <div className='rounded border flex justify-center mt-10 items-center'>
                        <BsArrowRight className='text-white mx-4 text-xl animate-pulse'/>
                        <h2 className='text-white px-5 py-2 text-sm '> سفارش جوجه گوشتی</h2>
                    </div>
                </div>
            </TabPanel>
{/* ............................................................premium........................................................... */}

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

                    <div className='rounded border flex justify-center mt-10 items-center'>
                        <BsArrowRight className='text-white mx-4 text-xl animate-pulse'/>
                        <h2 className='text-white px-5 py-2 text-sm '> سفارش جوجه گوشتی</h2>
                    </div>
                </div>
            </TabPanel>

            {/* ............................................................premium........................................................... */}

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

                    <div className='rounded border flex justify-center mt-10 items-center'>
                        <BsArrowRight className='text-white mx-4 text-xl animate-pulse'/>
                        <h2 className='text-white px-5 py-2 text-sm '> سفارش جوجه گوشتی</h2>
                    </div>
                </div>
            </TabPanel>
                </TabPanels>
            </Tabs>
           
        </div>

{/* .....................nextone........................................ */}
<div className='border-gray-800 border rounded-xl py-5 w-full h-full bg-[#000000c4]'>
               
            <h2 className='text-white text-center px-5 pt-4 pb-2'>بسترهای هوشمندسازی</h2>
            <p className='text-gray-400 text-center text-sm px-5 py-2 mb-2'>مانیتورینگ, کنترل و مدیریت فارم های پرورشی  </p>

            
            <Tabs isLazy isFitted dir='rtl'  >
            <TabList  color="gray.500">
                    <Tab>سنسورهای محیطی</Tab>
                    <Tab>کنترل سیستم ها</Tab>
                    <Tab>پنل مدیریت</Tab>
                </TabList>
                
                <TabPanels>
                    {/* ...................................................basic................................................... */}
                    <TabPanel>
                       <div className='grid grid-cols-3  items-center justify-center border rounded h-44'>
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
                     
                        <div className='flex flex-col  justify-between py-2  items-center w-full'>
                      
                      

                            <div className='flex flex-row  py-2 w-full'>
                                    <div className='flex justify-center items-center '>
                                        <p className='text-right w-full pr-4 text-sm text-gray-400'>مشاهده آنلاین سنسورها از قبیل </p>
                                        </div>
                            </div>


                            
                           
                            

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full pr-4 text-sm text-gray-400'>سنسورهای دما و رطوبت منطقه ای </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full pr-4 text-sm text-gray-400'>سنسورهای آمونیاک و اکسیژن بستر و محیط </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full pr-4 text-sm text-gray-400'>سنسورهای نور محیط </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full pr-4 text-sm text-gray-400'>سنسورهای وزن کشی اتوماتیک </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full pr-4 text-sm text-gray-400'>سنسورهای میزان آب و دان ورودی </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full pr-4 text-sm text-gray-400'>سنسورهای سفارشی دیگر</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                            </div>

                            


                        </div>
                    </TabPanel>
{/* ............................................................standard........................................................... */}
                    <TabPanel>
                        <Desend/>
                     
                        <div className='flex flex-col  justify-between py-2  items-center w-full'>
                      
            <p className='text-gray-400 text-right text-sm px-5 py-2 mb-2'>کاهش چشمگیر تلفات  </p>
                      

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full pr-4 text-sm text-gray-400'>ارائه برترین برندهای تجهیزات پرورشی </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                            </div>


                            
                           
                            

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full pr-4 text-sm text-gray-400'>ارائه برترین برندهای تجهیزات پرورشی </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full pr-4 text-sm text-gray-400'>ارائه برترین برندهای تجهیزات پرورشی </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full pr-4 text-sm text-gray-400'>ارائه برترین برندهای تجهیزات پرورشی </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full pr-4 text-sm text-gray-400'>ارائه برترین برندهای تجهیزات پرورشی </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                            </div>

                            


                        </div>
                    </TabPanel>
{/* ............................................................premium........................................................... */}

                    <TabPanel>
                    <LineChart />
                     
                        <div className='flex flex-col  justify-between py-2  items-center w-full'>
                      
            <p className='text-gray-400 text-right text-sm px-5 py-2 mb-2'>افزایش راندمان و ضریب تبدیل </p>
                      

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full pr-4 text-sm text-gray-400'>ارائه برترین برندهای تجهیزات پرورشی </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                            </div>


                            
                           
                            

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full pr-4 text-sm text-gray-400'>ارائه برترین برندهای تجهیزات پرورشی </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full pr-4 text-sm text-gray-400'>ارائه برترین برندهای تجهیزات پرورشی </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full pr-4 text-sm text-gray-400'>ارائه برترین برندهای تجهیزات پرورشی </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full pr-4 text-sm text-gray-400'>ارائه برترین برندهای تجهیزات پرورشی </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                            </div>

                            


                        </div>
                    </TabPanel>
                </TabPanels>
            </Tabs>
           
        </div>


{/* .....................nextone........................................ */}
<div className='border-gray-800 border rounded-xl py-5 w-full h-full bg-[#000000c4]'>
               
            <h2 className='text-white text-right px-5 pt-4 pb-2'>بسترهای افزایش راندمان</h2>
            <p className='text-gray-400 text-right text-sm px-5 py-2 mb-2'>ارائه تمام نیازهای پرورش دهنده های طیور گوشتی  </p>

            
            <Tabs isLazy isFitted dir='rtl'  >
                <TabList mb='1em' >
                    <Tab color='yellow.500' >خدمات تامینی</Tab>
                    <Tab color='green.400'>مشاوره ای</Tab>
                    <Tab color='blue.300'>جامع</Tab>
                </TabList>
                
                <TabPanels>
                    {/* ...................................................basic................................................... */}
                    <TabPanel>
                        <Radial/>
                     
                        <div className='flex flex-col  justify-between py-2  items-center w-full'>
                      
                      

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full pr-4 text-sm text-gray-400'>ارائه برترین برندهای تجهیزات پرورشی </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                            </div>


                            
                           
                            

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full pr-4 text-sm text-gray-400'>ارائه برترین برندهای تجهیزات پرورشی </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full pr-4 text-sm text-gray-400'>ارائه برترین برندهای تجهیزات پرورشی </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full pr-4 text-sm text-gray-400'>ارائه برترین برندهای تجهیزات پرورشی </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full pr-4 text-sm text-gray-400'>ارائه برترین برندهای تجهیزات پرورشی </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                            </div>

                            


                        </div>
                    </TabPanel>
{/* ............................................................standard........................................................... */}
                    <TabPanel>
                        <Desend/>
                     
                        <div className='flex flex-col  justify-between py-2  items-center w-full'>
                      
            <p className='text-gray-400 text-right text-sm px-5 py-2 mb-2'>کاهش چشمگیر تلفات  </p>
                      

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full pr-4 text-sm text-gray-400'>ارائه برترین برندهای تجهیزات پرورشی </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                            </div>


                            
                           
                            

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full pr-4 text-sm text-gray-400'>ارائه برترین برندهای تجهیزات پرورشی </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full pr-4 text-sm text-gray-400'>ارائه برترین برندهای تجهیزات پرورشی </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full pr-4 text-sm text-gray-400'>ارائه برترین برندهای تجهیزات پرورشی </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full pr-4 text-sm text-gray-400'>ارائه برترین برندهای تجهیزات پرورشی </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                            </div>

                            


                        </div>
                    </TabPanel>
{/* ............................................................premium........................................................... */}

                    <TabPanel>
                    <LineChart />
                     
                        <div className='flex flex-col  justify-between py-2  items-center w-full'>
                      
            <p className='text-gray-400 text-right text-sm px-5 py-2 mb-2'>افزایش راندمان و ضریب تبدیل </p>
                      

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full pr-4 text-sm text-gray-400'>ارائه برترین برندهای تجهیزات پرورشی </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                            </div>


                            
                           
                            

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full pr-4 text-sm text-gray-400'>ارائه برترین برندهای تجهیزات پرورشی </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full pr-4 text-sm text-gray-400'>ارائه برترین برندهای تجهیزات پرورشی </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full pr-4 text-sm text-gray-400'>ارائه برترین برندهای تجهیزات پرورشی </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full pr-4 text-sm text-gray-400'>ارائه برترین برندهای تجهیزات پرورشی </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                            </div>

                            


                        </div>
                    </TabPanel>
                </TabPanels>
            </Tabs>
           
        </div>

    </div>

    </ChakraProvider>
</div>
  )
}

export default GigP