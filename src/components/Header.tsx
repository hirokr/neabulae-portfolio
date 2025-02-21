"use client";
import Link from "next/link";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { GiCrossedSabres } from "react-icons/gi";
import { motion } from "framer-motion";

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <header className='container allcenter justify-between font-mono min-w-full top-0 relative'
    onClick={() => {
      setTimeout(() => setMenu(!menu), 200);
    }}
    >
      <h1 className='bg-black text-white py-1 px-5 font-semibold text-xl'>
        Ralph <br />
        Edward.
      </h1>
      <nav className='hidden text-base md:flex justify-between items-center *:p-2 lg:*:text-lg z-50 *:min-w-20 *:allcenter'>
        <Link
          className='hover:bg-yellow hover:text-blue hover:scale-110'
          href='/'
        >
          Home
        </Link>
        <Link className='hover:bg-yellow hover:scale-110' href='#about'>
          About
        </Link>
        <Link className='hover:bg-yellow hover:scale-110 ' href='#cv'>
          CV
        </Link>
        <Link className='hover:bg-yellow hover:scale-110' href='#education'>
          Education
        </Link>
        <Link
          className='hover:bg-yellow hover:scale-110 mr-3 border-r-2'
          href='#Article'
        >
          Article
        </Link>
        <Link href='#contact' className=' bg-yellow hover:scale-110'>
          Contact
        </Link>
      </nav>
      <div className='-top-7 right-0 md:hidden p-10 absolute '>
        <div className='*:w-8 *:h-8 cursor-pointer  *:text-white right-5 absolute z-50'>
          <IoMdMenu
            className={`${menu ? "hidden" : "block"} hover:scale-110 z-40 bg-blue`}
            onClick={() => setMenu(!menu)}
          />
        </div>
        <motion.div
          className={`${
            menu ? "block" : "hidden"
          } right-0 absolute top-0 z-30  w-screen h-screen bg-blue min-h-72 flex justify-center p-28`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <nav
            className={`flex flex-col text-base  w-1/2 justify-between items-center *:p-2 *:allcenter *:w-full gap-2 *:text-white ${
              menu ? "block" : "hidden"
            }`}
            onClick={() => {
              setTimeout(() => setMenu(!menu), 200);
            }}
          >
            <Link
              className='hover:bg-yellow hover:text-blue hover:scale-110'
              href='/'
            >
              Home
            </Link>
            <Link
              className='hover:bg-yellow hover:text-blue hover:scale-110'
              href='#about'
            >
              About
            </Link>
            <Link
              className='hover:bg-yellow hover:text-blue hover:scale-110'
              href='#cv'
            >
              CV
            </Link>
            <Link
              className='hover:bg-yellow hover:text-blue hover:scale-110'
              href='#education'
            >
              Education
            </Link>
            <Link
              className='hover:bg-yellow hover:text-blue hover:scale-110'
              href='#Article'
            >
              Article
            </Link>
            <Link
              href='#contact'
              className='hover:text-blue bg-yellow hover:scale-110'
            >
              Contact
            </Link>
          </nav>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
