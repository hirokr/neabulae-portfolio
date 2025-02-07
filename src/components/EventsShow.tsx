"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { BiCommentDetail, BiCalendarEvent } from "react-icons/bi";

const stories = [
  {
    date: "8 Sep, 2020",
    com: 125,
    name: "BMA Events",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, quis.",
  },
  {
    date: "8 Sep, 2020",
    com: 125,
    name: "BMA Events",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, quis.",
  },
  {
    date: "8 Sep, 2020",
    com: 125,
    name: "BMA Events",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, quis.",
  },
  {
    date: "8 Sep, 2020",
    com: 125,
    name: "BMA Events",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, quis.",
  },
  {
    date: "8 Sep, 2020",
    com: 125,
    name: "BMA Events",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, quis.",
  },
  {
    date: "8 Sep, 2020",
    com: 125,
    name: "BMA Events",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, quis.",
  },
  {
    date: "8 Sep, 2020",
    com: 125,
    name: "BMA Events",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, quis.",
  },
];

// date: "8 Sep, 2020",
//     com: 125,
//     name: "BMA Events",
//     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, quis.",

const EventsShow: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className='container bg-para_text/10 min-w-full py-14 flex justify-between items-center flex-col relative'>
      <div className=''>
        <h1 className='text-2xl lg:text-4xl py-8  font-mono before:absolute relative before:bottom-6 before:left-0 before:w-[20%] before:opacity-25 before:h-[1px] before:bg-para_text'>
          Latest Event & Show
        </h1>
        <div className='allcenter justify-between w-full gap-10'>
          <p className='basis-[60%] text-para_text text-xs/4 lg:text-base/5'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia iure
            accusantium vel quidem nulla totam est molestias fugiat, dolorum
            esse?
          </p>
          <div className='allcenter gap-3 '>
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className='text-blue bg-white border-2 border-yellow p-2 rounded-full hover:bg-yellow '
            >
              <FaArrowLeft size={20} />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className='text-blue bg-white border-2 border-yellow p-2 rounded-full hover:bg-yellow'
            >
              <FaArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1} // Show 2 slides per view
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1220: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        pagination={{ clickable: true, el: ".newcustomePagination" }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className='w-full basis-1/2 my-5 p-2'
      >
        {stories.map((item, index) => {
          return (
            <SwiperSlide key={index} className='p-4 lg:p-6 bg-white *:py-1'>
              <div className='flex gap-6 w-full *:allcenter *:gap-1 text-sm text-para_text'>
                <p className=''>
                  <BiCommentDetail className='text-blue_text' />
                  {item.date}
                </p>
                <p className=''>
                  <BiCalendarEvent className='text-blue_text' />
                  {item.com}
                </p>
              </div>
              <h1 className='text-xl lg:text-3xl'>{item.name}</h1>
              <p className='text-sm/4 lg:text-base/5 text-para_text'>
                {item.desc}
              </p>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className='newcustomePagination  text-center mt-4 z-10'></div>
    </div>
  );
};

export default EventsShow;
