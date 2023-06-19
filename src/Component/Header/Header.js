import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import "./Header.css";

const Header = () => {
  const [head, setHead] = useState(false);

  const handleHead = () => {
    setHead(!head);
  };

  return (
    <div className=" headerDiv">
      <div className=" flex justify-between items-center mx-auto px-2 h-20 max-w-[1240px]">
        <h1 className=" text-3xl font-bold md:justify-between text-[#1D274E] ">
          Proxity Tech.
        </h1>
        <ul className="hidden md:flex">
          <li className="p-4">
            {" "}
            <a className="text-[#7C84A6]" href="/">
              Home
            </a>{" "}
          </li>
          <li className="p-4">
            {" "}
            <a className="text-[#7C84A6]" href="#about">
              About
            </a>{" "}
          </li>
          <li className="p-4">
            {" "}
            <a className="text-[#7C84A6]" href="#services">
              Services
            </a>{" "}
          </li>
          <li className="p-4">
            {" "}
            <a className="text-[#7C84A6]" href="#services">
              Blog{" "}
            </a>{" "}
          </li>

          <li className="p-4">
            {" "}
            <a className="text-[#7C84A6]" href="#contact_us">
              Contact Us
            </a>{" "}
          </li>
        </ul>
        <button className="hidden md:flex rounded py-2 px-8 font-bold cursor-pointer bg-gradient-to-r from-[#005dc7] to-[#a100ff] text-white">
          <a href="#contact_us">Quote</a>
        </button>
        <div onClick={handleHead} className=" p-5 none md:hidden ">
          {head ? (
            <AiOutlineClose className="" size={30} />
          ) : (
            <AiOutlineMenu size={30} />
          )}

          <ul
            className={
              head
                ? "fixed left-0 top-0 w-[60%] h-full text-white border-r border-r-gray-900 bg-[#0D0421] ease-in-out duration-500 z-50"
                : "ease-in-out duration-500 fixed left-[-100%] "
            }
          >
            <h1 className="w-full text-3xl font-bold m-4  ">Proxity Tech.</h1>
            <li className="p-4 border-b border-gray-600  ">
              <a href="/">Home</a>{" "}
            </li>
            <li className="p-4 border-b border-gray-600 ">
              <a href="#about">About</a>
            </li>
            <li className="p-4 border-b border-gray-600 ">
              <a href="#services">Services</a>
            </li>
            <li className="p-4 border-b border-gray-600 ">
              <a href="#services">Blog</a>
            </li>

            <li className="p-4">
              <a href="#contact_us">Contact Us</a>
            </li>
            <button className="p-4 w-full border rounded border-blue-800 hover:bg-[#6a2dec]">
              {" "}
              <a href="#contact_us"> Quote</a>
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
