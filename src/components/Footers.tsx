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
    <footer className='justify-center flex py-10 bg-blue w-screen text-bg flex-col container '>
      <div className='flex flex-col justify-between items-center sm:flex-row border-footer_text pb-6 sm:border-b-[1px] border-opacity-30'>
        <h2 className='text-lg sm:text-xl font-bold py-2 sm:py-5 basis-1/2'>
          Looking for a Neurologists Doctor? <br/>Get in touch and let&apos;s chat!
        </h2>
        <span className='text-sm basis-1/2'>
          <p className='text-footer_text hover:underline py-1 mb-2'>
            Donec in bibendum risus. Cras eget imperdiet sapien. Donec
            sollicitudin maximus augue, non elementum quam ultrices non.
          </p>
          <Link href="#" id="getInTouch" className="group">
            <button className=' bg-yellow text-blue py-2 px-4 flex justify-center items-center hover:bg-yellow/70 transition-all duration-300'>
              <span className=' pr-1'>Get In touch </span>
              <GoArrowRight className="group-hover:scale-[1.3] duration-300 transition-all" />
            </button>
          </Link>
        </span>
      </div>
      <div className=''></div>
      <div className=' text-[12px] text-footer_text hover:underline'>
        <p>
          All content &copy; 2006-Current Winston Potter and respective
          copyright holders.
        </p>
      </div>
    </footer>
  );
};

export default Footers;
