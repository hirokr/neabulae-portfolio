import About from "@/components/about";
import DocNurse from "@/components/docNurse";
import EventsShow from "@/components/EventsShow";
import Mainpage from "@/components/Mainpage";
import Carousel from "@/components/PatientSuccess";
import WorkingHistory from "@/components/WorkingHistory";

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between  w-full'>
      <div className='relative w-full'>
        <Mainpage />
        <About />
      </div>
      <WorkingHistory />
      <DocNurse/>
      <Carousel/>
      <EventsShow/>
    </main>
  );
}
