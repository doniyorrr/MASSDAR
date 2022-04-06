import React from "react";
import massdar from "./images/massdar.5701287b.png";
import {BiUserCircle} from "react-icons/bi"

const Navbar = () => {
  return (
    <nav id="header" className="fixed w-full z-10 top-0 bg-white border-b border-gray-400">
         <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-4">
            <div className="pl-4 flex items-center">
               <img src={massdar} alt="massdar" width={200} />
               <a className="text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl"  href="/"> 
               
               </a>
            </div>
            <div className="block lg:hidden pr-4">
               <button id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-purple-500 appearance-none focus:outline-none">
                  <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                     <title>Menu</title>
                     <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                  </svg>
               </button>
            </div>
            <div className="w-full flex-grow lg:flex  lg:content-center lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 z-20" id="nav-content">
               <div className="flex-1 w-full mx-auto max-w-sm content-center py-4 lg:py-0">
                  <div className="relative pull-right pl-4 pr-4 md:pr-0">
                     <input type="search" placeholder="Search" className="w-full bg-gray-100 text-sm text-gray-800 transition border focus:outline-none focus:border-purple-500 rounded py-1 px-2 pl-10 appearance-none leading-normal"/>
                     <div className="absolute search-icon" style={{top: "0.375rem" , left: "1.75rem"}}>
                        <svg className="fill-current pointer-events-none text-gray-800 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                           <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                        </svg>
                     </div>
                  </div>
               </div>
               <ul className="list-reset lg:flex justify-end items-center">
                  <li className="mr-3 py-2 lg:py-0">
                     <a className="inline-block py-2 px-4 text-gray-900 font-bold no-underline" href="#">Active</a>
                  </li>
                  
               </ul>
            </div>
         </div>
      </nav>
  );
};

export default Navbar;
