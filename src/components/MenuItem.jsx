import React , {useState} from 'react';
import {MdAddShoppingCart} from "react-icons/md"
import { AiOutlineHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Menuitem = () => {

    const [toggle , setToggle ] = useState(true)

    const click =() =>{
        setToggle(prev => !prev)
    }
    return (
        <li className="w-full text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">
              <div onClick={click} className="flex items-center ">
                <AiOutlineHome />
                <span className="text-sm  ml-2">Omborxona</span>
              </div>
              <div className="flex bg-gray-700 text-base sm:text-xs" style={toggle? {display: "block" } : {display: "none"}}>
                  <ul className=" p-3">
                      <NavLink to={"/addProduct"} className="flex items-center">
                          <MdAddShoppingCart/>
                          <span className="mx-1">Mahsulot qo'shish</span>
                      </NavLink>
                      <NavLink to={"/addProduct"} className="flex items-center">
                          <MdAddShoppingCart/>
                          <span className="mx-1">Jami mahsulotlar</span>
                      </NavLink>
                      <NavLink to={"/addProduct"} className="flex items-center">
                          <MdAddShoppingCart/>
                          <span className="mx-1">Filter</span>
                      </NavLink>
                      
                  </ul>
              </div>
            </li>
    );
}

export default Menuitem;
