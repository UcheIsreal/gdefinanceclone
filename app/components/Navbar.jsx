"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import Link from 'next/link';
import Entrepreneur from '../page';
import Business from '../page';



const Navbar = () => {

  const [nav, setNav] = useState(true);
  

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav className="flex bg-black items-center justify-around  h-[10vh]">
        <div className=" ">
          <Image src="/images/gladesvg.png" width={300} height={300} alt='' />
        </div>

        <div className="ml-32 hidden lg:flex mt-2">
          <Link href="/">
            <button className="text-white bg-gray-600 px-16  py-2 rounded-2xl text-sm absolute left-[420px] ">
              Business
            </button>
          </Link>

          <Link href="/Entrepreneur">
            <button className="text-black  bg-white px-12 relative -ml-10 py-2 rounded-2xl text-sm  ">
              Entrepreneur
            </button>
          </Link>
        </div>

        <div className="hidden lg:flex mt-2">
          <button className="text-white bg-slate-700 px-6 py-2 rounded-md mr-2 text-sm ">
            Login
          </button>
          <button className="text-white bg-blue-700 px-6 py-2 rounded-md mr-2 text-sm">
            Get Started
          </button>
        </div>

        <div onClick={handleNav} className="block md:hidden">
          {!nav ? (
            <AiOutlineClose className="text-white" size={20} />
          ) : (
            <AiOutlineMenu className="text-white" size={20} />
          )}
        </div>

        <BiMenu className="text-blue-500 w-10 h-10 hidden mt-2 lg:flex" />

        {/* Mobile Menu */}

        <div
          className={
            !nav
              ? `absolute left-0 top-0 w-[100%] h-screen border-r border-r-gray-900 bg-gray-100 ease-in-out duration-700`
              : `fixed left-[-100%] `
          }
        >
          <div className="bg-black h-[10vh] flex items-center px-4">
            <Image src="/images/gladesvg.png" width={200} height={200} alt='' />
          </div>
          <ul className="  p-4">
            <li className="p-4 font-extrabold">Incoporation</li>
            <li className="p-4 font-extrabold">Company</li>
            <li className="p-4 font-extrabold">Resources</li>
          </ul>
          <div
            onClick={handleNav}
            className="block md:hidden absolute top-4 right-4"
          >
            {!nav ? (
              <AiOutlineClose className="text-white" size={30} />
            ) : (
              <AiOutlineMenu className="text-white " size={20} />
            )}
          </div>
          <div className=" flex flex-col items-center gap-3 justify-center mt-60">
            <button className=" px-36 py-3 text-purple-700 bg-purple-200">
              Login
            </button>
            <button className=" px-[122px] py-3 text-white bg-blue-700">
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

 
export default Navbar;