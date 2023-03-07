import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import Head from 'next/head';
import Image from 'next/image';
import GigP from '../components/Gig/GigP';

const Services = () => {
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
         <Image
                      className=" fixed -z-20  w-[100%] md:w-full object-cover h-full 
                      opacity-100 sm:opacity-100"
                      src="/images/iotbg.jpg"
                      width='1200'
                      height='800'
                    alt="CEO"/>
        <GigP/>


        </div>
    );
}

export default Services;
