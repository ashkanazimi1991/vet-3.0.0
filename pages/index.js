import Head from 'next/head'
import Header from '@/components/Header/Header'
import Sidebar from '@/components/SideBar/SideBar'
import Hero from '@/components/Hero/Hero';

import dynamic from "next/dynamic";




const Body = dynamic(() => import('../components/Body/Body'))
const Body2 = dynamic(() => import('../components/Body/Body2'))
const Automation = dynamic(() => import('../components/Automation/Automation'))
const Footer = dynamic(() => import('../components/Footer/Footer'))


const Services = dynamic(() => import("../components/Services/Services"));

export default function Home() {
  return (
    <>
      <Head>
        <title>VET NOW</title>
        <meta name="description" content="وتنا" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#142028"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='flex flex-col w-full' >
          <Header/>
          <Hero/>
    
          <Body/>
          <Services/>
          <Body2/>
          <Automation/>
          <Footer/>
          <Sidebar/>
   

        </div>
 
      </main>
    </>
  )
}
