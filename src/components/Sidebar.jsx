import React, { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import {GrUpdate} from "react-icons/gr"
import {FaRegHandshake} from "react-icons/fa"
import {
  BsFillArrowLeftSquareFill,
  BsArrowRightSquareFill,
  BsBorderAll,
  BsTrash,

} from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import logo from "./images/massdar.5701287b.png";

import Menuitem from "./MenuItem"

function Sidebar(prompt) {
  const [inActive, setInActive] = useState(false);

  const menuItems = [
    { name: "Asosiy", to: `/`, icon: <BsBorderAll className="inline-block" /> },
    {
      to: "",
      name: "Omborlar",
      icon: <AiOutlineHome className="inline-block" />,
      subMenus: [
        { name: "Mahsulotlar", to: `/allProducts` },
        { name: "Kirim", to: `/kirim` },
        { name: "Omborlar", to: `/omborlar` },
        { name: "Kategoriya", to: `/category` },
        { name: "Sub-kategoriya", to: `/sub_category` },
      ],
    },
    {
      name: "Mahsulotlarni ko'chirish",
      to: ``,
      icon: <HiOutlineShoppingCart className="inline-block"
      />,
      subMenus: [
        { name: "Qabul qilingan", to: `/kelgan` },
        { name: "Jonatilgan", to: `/jonatilgan` },
      ],
    },
    {
      name: "Qaytarish",
      to: `/qaytarish`,
      icon: <FaRegHandshake className="inline-block" />,
    },
    {
      name: "Chiqit",
      to: `/chiqit`,
      icon: <BsTrash className="inline-block" />,
    },
  ];

  useEffect(() => {
    if (inActive) {
      document.querySelectorAll(".sub-menu").forEach((el) => {
        el.classList.remove("active");
      });
    }

    prompt.onCollapse(inActive)
  }, [inActive]);

  return (
    <div
      className={`side-menu ${
        inActive ? "inactive" : ""
      } fixed bg-black w-80 h-full box-border p-5 duration-500`}
    >
      <div className="top-section relative">
        <div className="logo overflow-hidden w-40 m-auto h-20 inline-block">
          <img src={logo} alt="logo" className="max-w-full max-h-full duration-200" />
        </div>
        <div
          onClick={() => setInActive(!inActive)}
          className="toggle-menu-btn text-3xl text-gray-500 absolute top-1/2 right-0 translate-y-1/2 cursor-pointer"
        >
          {inActive ? (
            <BsArrowRightSquareFill />
          ) : (
            <BsFillArrowLeftSquareFill />
          )}
        </div>
      </div>
      <div className="search-controller text-gray-300 relative">
        <div className="search-btn absolute bg-transparent border-0 text-xl text-gray-400 w-10 h-9  ml-2">
          <FiSearch className="inline-block" />
        </div>
        <input
          type="text"
          placeholder="search"
          className="bg-gray-500 block border-0 outline-0 h-9 rounded-md my-5 mx-0 w-full box-border pl-10"
        />
      </div>
      <div className="divider w-full h-1 rounded bg-gray-500"></div>
      <div className="main-menu">
        <ul>
          {menuItems.map((item, index) => (
            <Menuitem
              key={index}
              name={item.name}
              to={item.to}
              subMenus={item.subMenus || []}
              icon={item.icon}
            />
          ))}
        </ul>
      </div>
      <div className="side-menu-footer w-full absolute bg-gray-800 bottom-0 left-0 py-8 px-5 box-border flex">
        <div className="avatar w-10 h-10 inline-block rounded-full bg-gray-300 p-1 flex justify-center items-center">
          <img src={logo} alt="logo " className="max-w-full " />
        </div>
        <div className="user-info text-gray-500 inline-block ml-5">
          <h5 className="">Amiral Retail ERP</h5>
          <p className="">by qwerty</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
