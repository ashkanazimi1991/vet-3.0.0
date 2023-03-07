import { useState , useEffect } from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import dynamic from "next/dynamic";
import {  homeObjectFour,  homeObjectOne,  homeObjectThree,  homeObjectTwo,  homeObjectFive,} from "../components/InfoSection/Data";
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import SliderOne from "../components/cardslider/sliderone";
import Navbar from "../components/Navbar/Navbar";
// import ChartSection from "../components/news/educationPage/ChartSection";
// import { useRouter } from 'next/router';




const InfoSection = dynamic(() =>
  import("../components/InfoSection/InfoSection"),
);

const Services = dynamic(() => import("../components/Services/Services"));
const Footer = dynamic(() => import("../components/Footer/Footer"));

function Home({ user  }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  

  return (
    <div>
      <Head>
        <title>VetNOW</title>
        <meta name="وتنا" content="وتنا" />
        <meta name="enamad" content="672822"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout user={user} >
      {/* <Navbar user={user} toggle={toggle} /> */}
      <div className="w-full fixed md:bottom-0 z-20 ">
        <Navbar />
      </div>
        <HeroSection />
        <div style={{width: "100%", height: "100%" , backgroundColor: '#090a0ac5',overflow: 'hidden'}}>
                         <SliderOne  style={{width: "100%" , backgroundCo:"#fff"}} 
                        img1='/images/000000.jpg' img2='/images/onlinedr2.jpg' img3='/images/farm300.jpg' 
                        img4='/images/tools98.jpg' img5='/images/a210.jpg' img6='/images/vitamin012.jpg'
                        title1=' جوجه گوشتی' title2='دامپزشک آنلاین' title3='مشاوره و آنالیز گله ' title4='تجهیزات پرورشی' title5='منابع آموزشی' title6='ویتامین , مکمل '
                         />
                      </div>  
        <Services/>
        <InfoSection {...homeObjectOne} />
        <InfoSection {...homeObjectTwo} />
        <InfoSection {...homeObjectThree} /> 
        {/* <ChartSection /> */}
        <InfoSection {...homeObjectFour} />
       <InfoSection {...homeObjectFive} />
                     <div style={{width: "100%", height: "100%" , backgroundColor: '#232f3e',overflow: 'hidden'}}>
                         <SliderOne  style={{width: "100%"}} 
                        img1='/images/fram925.png' img2='/images/fram925.png' img3='/images/fram925.png' img4='/images/fram925.png' img5='/images/fram925.png' img6='/images/fram925.png'
                        title1='' title2='' title3='' title4='' title5='' title6=''
                         />
                      </div>  
        <Footer />
      </Layout>
    </div>
  );
}

export default Home;

{/* <div style={{width: "100%", height: "100%" , backgroundColor: '#232f3e',overflow: 'hidden'}}>
   <SliderOne  style={{width: "100%"}} 
  img1='/images/fram901.png' img2='/images/fram902.png' img3='/images/fram903.png' img4='/images/fram904.png' img5='/images/fram905.png' img6='/images/fram906.png'
  title1='طوطی ' title2='بوقلمون' title3='نژادهای خاص' title4='عروس هلندی' title5='قوها' title6='طیور بومی'
   />
</div>   */}