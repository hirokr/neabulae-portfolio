"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const Mainpage = () => {
  return (
    <motion.div className='container allcenter bg-dashboard min-w-full h-[69vh] lg:h-full relative justify-between flex-col-reverse gap-3 sm:flex-row'>
      <div className="basis-[60%] flex flex-col gap-5">
        <p className="text-sm font-semibold tracking-widest">💉RALPH EDWARD</p>
        <h1 className="text-3xl lg:text-4xl xl:text-6xl font-extrabold">
          <span className="hover:text-para_text cursor-pointer">27+</span>Years of<br /> Neurologists Doctor.
        </h1>
        <p className="text-xs lg:text-base/6 text-para_text hover:text-blue">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam tempora modi delectus beatae dolorum ex omnis nesciunt illo reiciendis reprehenderit.
        </p>
        <div className="flex gap-2 text-xs lg:text-base font-mono">
          <Link href='#about'>
            <button className='py-2 px-3 border-2 border-yellow before:absolute relative before:bg-yellow hover:before:rounded-full ease-linear before:w-full before:h-full before:top-0 before:left-0 before:right-0 z-10 before:-z-10 hover:before:scale-0 before:duration-500 bg-white'>Learn About Me</button>
          </Link>
          <Link href='#stories'>
            <button className='py-2 px-3 border-2 border-yellow bg-yellow hover:before:rounded-full ease-linear before:absolute relative before:bg-white before:w-full before:h-full before:top-0 before:left-0 before:right-0 z-10 before:-z-10 hover:before:scale-0 before:duration-500'>Patainer Success Story

            </button>
          </Link>
        </div>
      </div>
      <div className='relative w-screen h-screen   basis-1/2'>
        <Image src='/doc.png' alt='doc' fill className='object-contain' />
      </div>
    </motion.div>
  );
};

export default Mainpage;
