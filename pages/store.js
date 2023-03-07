import React from 'react';
import Navbar from "../components/Navbar/Navbar";

const store = () => {
    return (
        <div>
            <div className="w-full fixed md:bottom-0 z-20 ">
               <Navbar />
            </div>
          
        </div>
    );
}

export default store;
