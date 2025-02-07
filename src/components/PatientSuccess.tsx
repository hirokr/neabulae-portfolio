"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { RiDoubleQuotesR } from "react-icons/ri";

const sotries: string[] = [
  "John struggled with uncontrolled diabetes for years until he switched to a personalized diet and exercise plan. Within six months, his blood sugar levels stabilized, and he felt more energetic than ever.",

  "Sarah suffered from severe anxiety, making daily life a challenge. After months of therapy and mindfulness training, she regained confidence and now enjoys a stress-free life.",

  "Michael had a heart attack at 52 but committed to a lifestyle change with cardiac rehab and a healthier diet. A year later, he completed a marathon, proving his heart was stronger than ever.",

  "Emma endured chronic back pain for years, relying on painkillers for relief. After physical therapy and holistic treatments, she now lives pain-free and enjoys daily yoga.",

  "Diagnosed with stage 3 cancer, Liam underwent an aggressive treatment plan with unwavering determination. Two years later, he is in remission and dedicates his time to helping other cancer patients.",
];

const Carousel: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className='relative min-w-full mx-auto container allcenter flex-col md:flex-row  justify-between py-14 gap-5' id="stories">
      <div className=' basis-1/2 flex flex-col justify-between items-start gap-6 '>
        <h1 className='text-3xl lg:text-5xl font-semibold font-mono before:absolute relative before:-bottom-2 before:left-0 before:w-5/12 before:opacity-25 before:h-[1px] before:bg-para_text'>
          863+ Paients <br />
          Success Stories
        </h1>
        <p className='text-sm/5 lg:text-base/6 text-para_text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
          tenetur.
        </p>
        <div className='allcenter justify-between w-full'>
          <div className='allcenter gap-3'>
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
          <div className='customePagination  text-center mt-4  '></div>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1} // Show 2 slides per view
        pagination={{ clickable: true, el: ".customePagination" }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className='w-full basis-1/2'
      >
        {sotries.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              className='border-4 border-yellow py-5 px-6 bg-yellow/20'
            >
              <RiDoubleQuotesR size={25} className="mb-2" />
              <p className='text-sm/5 l lg:text-lg/7'>{item}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
