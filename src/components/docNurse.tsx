"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const stories = [
  {
    ins: "what my college says about me",
    said: "Life is unpredictable, not everything's in our control. But as long as you're with the right people, you can handle anything.",
    img: "/docnurs.png",
    name: "MR. Jone Doe",
    position: "PSYCHIATRIST DOCTOR",
  },
  {
    ins: "what my college says about me",
    said: "Life is unpredictable, not everything's in our control. But as long as you're with the right people, you can handle anything.",
    img: "/docnurs.png",
    name: "MR. Jone Doe",
    position: "PSYCHIATRIST DOCTOR",
  },
  {
    ins: "what my college says about me",
    said: "Life is unpredictable, not everything's in our control. But as long as you're with the right people, you can handle anything.",
    img: "/docnurs.png",
    name: "MR. Jone Doe",
    position: "PSYCHIATRIST DOCTOR",
  },
  {
    ins: "what my college says about me",
    said: "Life is unpredictable, not everything's in our control. But as long as you're with the right people, you can handle anything.",
    img: "/docnurs.png",
    name: "MR. Jone Doe",
    position: "PSYCHIATRIST DOCTOR",
  },
];

const DocNurse: React.FC = () => {
  return (
    <div className='container bg-blue min-w-full py-14 flex-col lg:flex-row items-center justify-between font-mono'>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
          el: ".doccustomePagination",
          dynamicBullets: true,
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className='w-full my-5 '
      >
        {stories.map((item, index) => (
          <SwiperSlide key={index} className='w-full'>
            {/* Text Content */}
            <div className='p-6 flex flex-col md:flex-row items-center justify-between gap-6'>
              <div className='flex flex-col items-start w-full lg:w-1/2 gap-7'>
                <p className='uppercase text-yellow/60 text-sm'>{item.ins}.</p>
                <h1 className='text-white text-lg leading-relaxed'>
                  <q>{item.said}</q>
                </h1>
                <div className='mt-4'>
                  <h1 className='text-white font-bold'>{item.name}</h1>
                  <p className='text-para_text text-sm'>{item.position}</p>
                </div>
              </div>
              <Image
                src={item.img}
                alt='Doctor'
                width={300}
                height={300}
                className='object-contain  '
              />
            </div>

            {/* Image */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DocNurse;
