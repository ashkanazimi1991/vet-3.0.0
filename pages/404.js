// import ErrorPage from "../components/ErrorPage/ErrorPage";
import React from "react";
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-[#000000c7]">
          <img  className="fixed  -z-20  w-[100%]  object-cover min-h-screen" src="/images/iotbg.jpg"   alt="vetnow"/>
          <h1 className="text-white text-xl text-center w-fulll ">متاسفانه صفحه مورد نظر پیدا نشد</h1>
          <Link href='/' >
          <h2 className="text-white border rounded-md px-4 mt-4 py-2 hover:bg-green-700">بازگشت به صفحه اصلی</h2>
          </Link>

  </div>
  

  );
}
