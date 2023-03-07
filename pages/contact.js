import React, {useState} from 'react';
import Head from 'next/head';
import Link from "next/link"
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { TbBrandTelegram } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import { BsArrowLeft } from "react-icons/bs";
import Image from 'next/image';
import {Container, FormControl, FormLabel,Textarea, FormHelperText, Text,
   FormErrorMessage, Input, Heading, Button, useToast, extendTheme} from "@chakra-ui/react";
import { ChakraProvider } from '@chakra-ui/react'
import { sendContactForm } from '../components/lib/api';
import Navbar from '../components/Navbar/Navbar'
import dynamic from "next/dynamic";

// const OrderP = dynamic(() => import('../components/Order/OrderP'))
const fonts = {
    body:'IRANSansWeb',
    // heading:'IRANSansWeb'.

}
const theme= extendTheme({fonts})


const initValues = { name: "", email: "", subject: "", message: "" };
const initState = { isLoading: false, error: "", values: initValues };




const contact = () => {
  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const { values, isLoading, error } = state;
  const onBlur = ({ target }) =>
  setTouched((prev) => ({ ...prev, [target.name]: true }));

const handleChange = ({ target }) =>
  setState((prev) => ({
    ...prev,
    values: {
      ...prev.values,
      [target.name]: target.value,
    },
  }));
  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: "ما پیام شما را دریافت کردیم و  بزودی به آن پاسخ می دهیم",
        status: "success",
        duration: 6000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };
    return (
        <div>
          <Head>
                <meta name="description" content="vetnow" />
                <link rel="icon" href="/images/logo02.png" />
                <title>Contact vetnow</title>
                <meta name="description" content="vetnow Contact" />
                <meta name="theme-color" content="#000"/>
                <link rel='manifest' href='/manifest.json' />
         </Head>
         <div className="w-full fixed md:bottom-0 z-20 ">
          <Navbar />
         </div>
         <div className="bg-gradient-to-r from-black to-[#14141475] 
          flex justify-center ">
                    
                <div className='relative  w-full'>              
                <Image
                      className=" fixed -z-20  w-[100%] md:w-full object-cover h-full 
                      opacity-100 sm:opacity-100"
                      src="/images/iotbg.jpg"
                      width='1200'
                      height='800'
                    alt="CEO"/>
                    {/* <Link href='/'>
                    <BsArrowLeft className='fixed z-20  p-2 ring-white ring-2 
                      rounded-full  my-4 ml-6  sm:text-3xl text-5xl text-[#fff]
                       cursor-pointer'/>
                    </Link> */}
{/* ................................................................................................................... */}
                    <div className="flex flex-row px-[15%]  lg:px-[5%] md:flex-col justify-around ">
                        <div className="flex flex-col  justify-around py-[25%] pl-[4%] 
                  
                         text-left">
                       <div className='flex justify-center pb-2'>
                            <h1 className="text-2xl text-right border-b-2  left-14  sm:text-lg
                             text-white  py-4  w-full  ">
                                     درباره مجموعه دانش بنیان وتنا 
                            </h1>
                       </div>
                            <h1 className="font-extrabold text-right text-2xl  sm:pt-4 
                             text-[#61B0D1] sm:text-lg">
                                 وتنا پلتفرم مزارع طیور
                            </h1>
                            <p className=" mt-3 sm:leading-relaxed  
                            text-right text-sm leading-7 text-white 
                            ">
                        بیش از 20 سال علم و تجربه در صنعت پرورش طیور سبب تاسیس پلتفرم یک پارچه ساز پرورش طیور شد که در آن پرورش دهندگان و تولید کنندگان با دسترسی به منابع روز بهمراه تجربه مجموعه وتنا راندمان بیشتری را در دوره های پرورشی خود کسب می کنند 
                            </p>

                            <div className='flex flex-row   mt-4 border-y-2'>

                                    <div className='flex flex-row md:flex-col  justify-around items-center
                                     w-3/4'>
                                       <div className=' py-5'>
                                        <p className='text-white text-right px-5 '> ایران- آذربایجان غربی - ارومیه - خیابان ساحلی - نبش کوچه اول - مجموعه دانش بنیان وتنا</p>
                                         <Link href='tel:+984432382953 '>
                                            <h1 className='text-white text-center py-4'>+9844 3238 2953 </h1>
                                         </Link> 
                                
                                       </div>
                                    
                                     

                                      
                                    </div>

                              

                                <div className='grid grid-cols-2 sm:grid-cols-1 border-l-2 pl-5 place-content-center   w-1/4'>
                                
                                    <div>
                                        <Link href='https://t.me/AshkanAzimiii' target='_blank'  aria-label='telegram'>
                                        <TbBrandTelegram className='my-4 w-10 text-2xl text-[#fff] cursor-pointer '/> 
                                        </Link>

                                    </div>
                                    <div>
                                    <Link href='https://www.instagram.com/onlineceoofficial' target='_blank'  aria-label='Instagram'>
                                    <FaInstagram className='my-4 w-10 text-2xl text-[#fff] cursor-pointer'/> 
                                    </Link>
                                    </div>
                                    <div>
                                    <Link href='https://github.com/ashkanazimi1991' target='_blank'  aria-label='Instagram'>
                                    <FaWhatsapp className='my-4 w-10 text-2xl text-[#fff] cursor-pointer'/> 
                                    </Link>
                                    </div>
                                    <div>
                                    <Link href="mailto:info@onlineceo.org" target='_blank'  aria-label='mail'>
                                      <HiOutlineMail className=' my-4 w-10 text-2xl text-[#fff] cursor-pointer '/> 
                                   </Link>  
                                    </div>

                                </div>
                            </div>


{/* ......................................... */}
                        </div>
                    
                    </div>
                
                           
                      
{/* ..................................order........................ */}
                
                    {/* <div className=' w-full'>
                      <OrderP/>
                    </div> */}
{/* .....................................form......................................... */}
                    <div className='py-4 bg-[#0c303fa9] pb-14'>
                    <ChakraProvider theme={theme}>
                        <Container maxW="600px" mt={2}>
                            <Heading></Heading>
                            {error && (
                            <Text color="red.300" my={4} fontSize="xl">
                            {error}
                             </Text>
                             )}
                            <FormControl  isRequired mb={2} isInvalid={touched.name && !values.name}>
                                <FormLabel color='gray.300' dir='rtl' >نام</FormLabel>
                                <Input dir='rtl' type='text' name='name' color='gray.300' errorBorderColor='red.300' 
                                value={values.name} onChange={handleChange} onBlur={onBlur}/>
                                <FormErrorMessage>Required</FormErrorMessage>
                            </FormControl>

                            <FormControl isRequired mb={2} isInvalid={touched.email && !values.email}>
                                <FormLabel color='gray.300' dir='rtl' >شماره تماس یا ایمیل</FormLabel>
                                <Input  type='email' name='email' color='gray.300'  value={values.email} onChange={handleChange} onBlur={onBlur}/>
                                <FormHelperText>اطلاعات شما به هیچ وجه به اشتراک گذاشته نمی شود</FormHelperText>
                                <FormErrorMessage>Required</FormErrorMessage>
                            </FormControl>


                            <FormControl isRequired mb={2} isInvalid={touched.subject && !values.subject}>
                                <FormLabel color='gray.300' dir='rtl' >عنوان پیام</FormLabel>
                                <Input dir='rtl' type='text' name='subject' color='gray.300' value={values.subject} onChange={handleChange} onBlur={onBlur}/>
                                <FormErrorMessage>Required</FormErrorMessage>
                            </FormControl>

                            <FormControl isRequired mb={2} isInvalid={touched.message && !values.message}>
                                <FormLabel color='gray.300' dir='rtl' >توضیحات</FormLabel>
                                <Textarea dir='rtl' type='text' color='gray.300' name='message' rows={6} value={values.message} onChange={handleChange} onBlur={onBlur}/>
                                <FormErrorMessage>Required</FormErrorMessage>
                            </FormControl>

                           <Button variant='outline'  my={4} px={10} colorScheme='blue' isLoading={isLoading}
                              disabled={
                                !values.name || !values.email || !values.subject || !values.message
                              } onClick={onSubmit}>
                            ارسال</Button>     

                        </Container>

                        </ChakraProvider>

                    </div>
                    {/* <div className='fixed bottom-0 w-full'> */}

                
{/* .......................................................... */}
                </div>
         </div>
   
        </div>
    );
}

export default contact;

