"use client";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";

const Footers = () => {
  return (
    <footer className='bg-blue min-w-full text-bg flex-col container relative pt-5'>
      <div className='flex flex-col gap-4 justify-between items-center sm:flex-row border-footer_text pb-6 sm:border-b-[1px] border-opacity-30 '>
        <h2 className='text-lg sm:text-xl font-bold py-2 sm:py-5 basis-1/2'>
          Looking for a Neurologists Doctor? <br/>Get in touch and let&apos;s chat!
        </h2>
        <span className='text-sm basis-1/2'>
          <p className='text-footer_text hover:underline py-1 mb-2'>
            Donec in bibendum risus. Cras eget imperdiet sapien. Donec
            sollicitudin maximus augue, non elementum quam ultrices non.
          </p>
          <Link href="#" id="getInTouch" className="group cursor-pointer">
            <button className=' bg-yellow text-blue py-2 px-4 allcenter hover:bg-yellow/70 transition-all duration-300'>
              <span className=' pr-1'>Get In touch </span>
              <GoArrowRight className="group-hover:scale-[1.4] duration-300 transition-all group-hover:translate-x-1" />
            </button>
          </Link>
        </span>
      </div>
      <div className=' container allcenter justify-between px-0 py-5 border-footer_text pb-6 sm:border-b-[1px] border-opacity-30  min-w-full flex-col sm:flex-row  sm:items-center relative items-stretch space-x-4 gap-2'>
        <h1 className="uppercase bg-white text-blue py-2 px-5 text-base/5 font-semibold max-w-28 tracking-wide hover:bg-yellow/90">Ralph <br/>Edward.</h1>
        <div className="allcenter flex-col items-start min-h-16 justify-between ">
          <h3 className="uppercase">Location</h3>
          <p className="text-xs text-para_text hover:underline hover:text-white/50 ">
          4517 Washington Ave.<br/>
          Manchester, Kentucky 39495
          </p>
        </div>
        <div className="flex flex-col justify-between items-start min-h-16">
          <h3 className="uppercase">quick links</h3>
          <div className="grid grid-cols-3  lg:grid-cols-5 justify-between items-center text-xs lg:text-sm text-para_text gap-1 flex-wrap">
            <p className="hover:bg-yellow p-[2px] font-semibold allcenter">About</p>
            <p className="hover:bg-yellow p-[2px] font-semibold allcenter">CV</p>
            <p className="hover:bg-yellow p-[2px] font-semibold allcenter">Events</p>
            <p className="hover:bg-yellow p-[2px] font-semibold allcenter">Article</p>
            <p className="hover:bg-yellow p-[2px] font-semibold allcenter">Contract</p>
          </div>
        </div>
        <div className="flex flex-col justify-between items-start  min-h-16 ">
          <h3 className="uppercase">Follow me</h3>
          <div className="allcenter justify-between gap-1 *:w-6 *:h-6 lg:*:w-8 lg:*:h-8">
          <FaLinkedinIn className="hover:text-blue hover:bg-yellow hover:p-1 mr-[1px] "/>
          <FaFacebook className="hover:text-blue hover:bg-yellow hover:p-1 mr-[1px] "/>
          <FaTwitter className="hover:text-blue hover:bg-yellow hover:p-1 mr-[1px] "/>
          <FaInstagram className="hover:text-blue hover:bg-yellow hover:p-1 mr-[1px] "/>
          <FaWhatsapp className="hover:text-blue hover:bg-yellow hover:p-1 mr-[1px] "/>
          </div>
        </div>
      </div>
      <p className=' text-[12px] text-footer_text justify-center hover:underline allcenter py-5 '>
          All content &copy; 2006-Current Winston Potter and respective
          copyright holders.
      </p>
    </footer>
  );
};

export default Footers;
