import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CarouselTest from "./test";

const data = [
  {
    id: 1,
    img: "/place1.png",
    status: "currently working",
    doing: true,
    name: "Signapore General Hospital",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, deleniti?",
  },
  {
    id: 2,
    img: "/place2.png",
    status: "Jan, 2019 to March, 2021",
    doing: false,
    name: "University of Tokyo Hospital",
    desc: "Donec Ut imperdiet augue, ac rhoncus arcu.In ac mauris commodo, uttrices fetis vitae, tempor eros.",
  },
  {
    id: 3,
    img: "/place2.png",
    status: "Jan, 2019 to March, 2021",
    doing: false,
    name: "University of Tokyo Hospital",
    desc: "Donec Ut imperdiet augue, ac rhoncus arcu.In ac mauris commodo, uttrices fetis vitae, tempor eros.",
  },
  {
    id: 4,
    img: "/place2.png",
    status: "Jan, 2019 to March, 2021",
    doing: false,
    name: "University of Tokyo Hospital",
    desc: "Donec Ut imperdiet augue, ac rhoncus arcu.In ac mauris commodo, uttrices fetis vitae, tempor eros.",
  },
  {
    id: 5,
    img: "/place2.png",
    status: "Jan, 2019 to March, 2021",
    doing: false,
    name: "University of Tokyo Hospital",
    desc: "Donec Ut imperdiet augue, ac rhoncus arcu.In ac mauris commodo, uttrices fetis vitae, tempor eros.",
  },
];


const WorkingHistory = () => {
  return (
    <div
      className='container allcenter min-h-40 pt-44 py-20 flex flex-col '
      id='about'
    >
      <h1 className='text-2xl py-5 font-semibold '>My Working History</h1>
      <p className='py-5'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quis
        maiores vel magni quia repellat voluptatibus quisquam corporis amet
        eligendi!
      </p>
      <div className='py-5'>
        <CarouselTest data={data} />
      </div>
    </div>
  );
};

export default WorkingHistory;
