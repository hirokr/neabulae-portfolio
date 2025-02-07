"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; // Import button from shadcn
import Image from "next/image";

type Prop = {
  id: number;
  img: string;
  status: string;
  doing: boolean;
  name: string;
  desc: string;
};

const CarouselTest = ({ data }: { data: Prop[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start",containScroll: "trimSnaps" }, );

  // Function to scroll to next slide
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Function to scroll to previous slide
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  return (
    <div className='relative max-w-[98vw] lg:min-w-full container'>
      {/* Carousel Container */}
      <div className='overflow-hidden w-[60vw]' ref={emblaRef}>
        <div className='flex gap-2 '>
          {data.map((item, index) => (
            <Card
              key={item.id}
              className='min-w-full sm:min-w-[49%] lg:min-w-[32%] text-blue bg-white hover:shadow-2xl'
            >
              <CardContent className='p-6 flex flex-col items-center justify-center'>
                <Image
                  className='w-60 h-40 object-cover'
                  src={item.img}
                  alt={item.name}
                  width={40}
                  height={40}
                />
                <div className='text-center py-3'>
                  <p className={`text-sm ${item.doing? "text-blue_text": "text-para_text"}`}>{item.status}</p>
                  <h2 className='text-lg font-semibold'>{item.name}</h2>
                </div>
                <div className='text-center py-3 text-sm/5'>{item.desc}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="my-10 w-full flex justify-center items-center gap-10">
        <Button
          onClick={scrollPrev}
          className=' rounded-full w-14 h-14 bg-white border-2 border-yellow text-blue hover:bg-yellow'
        >
          ◀
        </Button>
        <Button
          onClick={scrollNext}
          className=' rounded-full w-14 h-14 bg-white border-2 border-yellow text-blue hover:bg-yellow'
        >
          ▶
        </Button>
      </div>
    </div>
  );
};

export default CarouselTest;
