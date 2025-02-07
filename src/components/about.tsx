import Image from "next/image";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import { MdOutlineFileDownload } from "react-icons/md";

const About = () => {
  return (
    <div className='w-[80%] flex flex-col lg:flex-row gap-1 bg-white min-h-36 absolute -bottom-24 sm:-bottom-20 z-20 left-[10%] right-[10%] allcenter p-5 justify-between shadow-xl lg:gap-5'>
      <div className='w-28 h-28 lg:w-44 lg:h-44 relative basis-[30%]'>
        <Image
          src='/doctorSide.png'
          alt='doc'
          fill
          className='object-contain'
        />
      </div>
      <div className='basis-[80%] flex flex-col justify-between items-start  gap-1 lg:gap-3'>
        <h1 className='font-bold lg:text-xl'>Hello, I'm Ralph Edward.</h1>
        <p className='text-[10px]/3 lg:text-sm/5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quidem,
          sunt delectus reiciendis ipsum voluptatum officia consectetur? Ea,
          nihil ratione.
        </p>
        <div className='font-mono text-xs lg:text-base gap-2 flex'>
          <button className='py-1 px-2 border-2 allcenter gap-1 border-yellow before:absolute relative before:bg-yellow hover:before:rounded-full ease-linear before:w-full before:h-full before:top-0 before:left-0 before:right-0 z-10 before:-z-10 hover:before:scale-0 before:duration-500 bg-white'>
            Send Message
            <GoArrowRight className='h-4 w-4' />
          </button>
          <button className='py-1 px-2 border-2 border-yellow bg-yellow allcenter gap-1 hover:before:rounded-full ease-linear before:absolute relative before:bg-white before:w-full before:h-full before:top-0 before:left-0 before:right-0 z-10 before:-z-10 hover:before:scale-0 before:duration-500'>
            Download Cv
            <MdOutlineFileDownload className='h-4 w-4' />
          </button>
        </div>
      </div>
      <div className='basis-[40%] border-2 lg:flex flex-col justify-center items-start p-0 hidden'>
        <h3 className="text-para_text text-sm p-2 w-full">FEATURED BY:</h3>
        <div className='flex '>
          <div className='w-16 h-14 lg:w-24 lg:h-24 relative'>
            <Image
              src='/hospital.png'
              alt='hospital'
              fill
              className='object-contain mix-blend-multiply '
            />
          </div>
          <div className='w-16 h-14 lg:w-24 lg:h-24 relative'>
            <Image
              src='/hospital.png'
              alt='hospital'
              fill
              className='object-contain mix-blend-multiply'
            />
          </div>
          <div className='w-16 h-14 lg:w-24 lg:h-24 relative'>
            <Image
              src='/hospital.png'
              alt='hospital'
              fill
              className='object-contain mix-blend-multiply'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
