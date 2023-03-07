import React,{useEffect, useState , useRef} from 'react';
import axios from 'axios'
import Head from 'next/head'
import {BaseUrl} from "../../components/baseUrl/BaseUrl";
// import styles from "../../styles/Product.module.css"
// import Layout from "../../components/Adviser/Layout";
import Products from "../../components/product/products";

// import { axiosInstance } from "../../helpers/axiosInstance";
import * as cookie from 'cookie'
// import { useSelector, useDispatch } from 'react-redux';

// code for when login page is finish

//

const Product = ({ data , news }) => {
  return (
    <div>
       <Head>
        <title>مجموعه تخصصی طیور</title>
        <meta name="description" content="وتنا" />
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <button
    type="button"
    onClick={() => {
      fetch("/api/Login", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: "96f20d6d2a398fae5c42a67f1ff34241ae7a459c" }),
      });
    }}
    >
    Login
    </button>{" "} */}
                     

      <Products
        leftSideBgColor="#FAEEE0"
        rightSideBgColor="#DBD0C0"
        displatChart="none"
        img1Slider="/images/tools1002.jpg"
        img2Slider="/images/pellet100.jpg"
        img3Slider="/images/pellet022.jpg"
        title1Banner=""
        img2Banner="/images/is012.png"
        title2Banner=" کنسانتره طیور بومی"
        subtitle2Banner="100% organic"
        title3Banner="دان های تخصصی"
        img3Banner="/images/concentrat04.png"
        subtitle3Banner="20% تخفیف کیف پول"
        title4Banner="دان پلت آماده"
        img4Banner="/images/concentrat03.png"
        subtitle4Banner="با صرفه و بدون پرت"
        title5Banner=" کنسانتره  کوشتی"
        img5Banner="/images/concentrat02.png"
        subtitle5Banner="تضمین قیمت - تضمین کیفیت"
        btnTextBanner="کنسانتره ویژه مرغ گوشتی"
        titleNews="اخبار جدید"
        products={data}
        newsData={news}
    
    />
    </div>
    
  );
};

export async function getServerSideProps(context){
  
  const  slug = context.params;
  const data = await axios.get(encodeURI(`${BaseUrl}/api/v1/category/${slug.Products}/`))
  const news = await axios.get(encodeURI(`${BaseUrl}/api/v1/news/last/3/`))
  const response = data.data
  const newsResponse = news.data

  return{
    props:{data: response , news: newsResponse}
  }
}


export default Product