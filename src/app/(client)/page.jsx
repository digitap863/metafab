import Banner from "@/components/home/Banner";
import About from "@/components/home/About";
import Projects from "@/components/home/Projects";
import Process from "@/components/home/Process";
import Services from "@/components/home/Services";
import Marque from "@/components/home/Marque";
import Design from "@/components/home/Design";
import Marq from "@/components/home/Marq";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Collection from "@/components/home/Collection";
import Testimonial from "@/components/home/Testimonial";
import Certified from "@/components/home/Certified";
import Expertise from "@/components/home/Expertise";

export default function Home() {
  return (
    <div className="w-full">
      <Banner />
      <About />
      <Projects />
      <Process />
      <Services />
      <Marque />
      <Design/>
      <Marq />
      <WhyChooseUs />
      <Collection />
      <Testimonial />
      <Certified />
      <Expertise />
    </div>
  );
}

