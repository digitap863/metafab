import Image from "next/image";

const projects = [
  {
    id: 1,
    image: "/projects/pro1.svg",
    name: "PRO NAME",
    location: "LOCATION NAME",
    year: "2024"
  },
  {
    id: 2,
    image: "/projects/pro2.svg",
    name: "PRO NAME",
    location: "LOCATION NAME",
    year: "2024"
  },
  {
    id: 3,
    image: "/projects/pro3.svg",
    name: "PRO NAME",
    location: "LOCATION NAME",
    year: "2024"
  },
  {
    id: 4,
    image: "/projects/pro4.svg",
    name: "PRO NAME",
    location: "LOCATION NAME",
    year: "2024"
  },
  {
    id: 5,
    image: "/projects/pro5.svg",
    name: "PRO NAME",
    location: "LOCATION NAME",
    year: "2024"
  }
];

const ProjectsBanner = () => {
  return (

    <section>
      <div className="w-full bg-[#A7B582] pt-24 pb-8 px-4 md:px-10 lg:px-20 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="max-w-[1400px] w-full flex gap-10">

          <div
            className="hidden lg:flex w-[5%] items-stretch gap-2 py-4 self-stretch justify-center pr-6"

          >
          </div>
          <div className=" w-full mx-auto flex flex-col items-start text-left w-[95%]">
            {/* Main Heading */}
            <h1
              className="text-[12vw] sm:text-[12vw] md:text-[100px] lg:text-[130px]  font-bold leading-none tracking-tighter mb-4 md:mb-6"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <span className="text-[#071F07]">OUR  </span>
              <span className="text-white">PROJECTS</span>
            </h1>



            {/* Paragraph text */}
            <p
              className="text-[#071F07]/70 text-sm sm:text-base md:text-lg max-w-[1100px] leading-relaxed font-medium"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              Discover a showcase of our creative work, where vision meets precision. Each project reflects our commitment to
              quality, innovation, and timeless design—crafted to transform ideas into inspiring spaces that leave a lasting impression.
            </p>
          </div>
        </div>
      </div>

      {/* Projects List Section */}
      <div className="w-full md:flex flex-col hidden  ">
        {projects.map((project, index) => {
          const isFirstTwo = index < 2;
          return (
            <div
              key={project.id}
              className={`w-full py-10 md:py-16 px-4 md:px-10 lg:px-20 flex justify-center ${isFirstTwo ? "bg-[#A7B582]" : "bg-white"
                }`}
            >
              <div className="max-w-[1400px] w-full flex flex-col md:flex-row gap-6 md:gap-10 items-stretch">
                {/* Image Container */}
                <div
                  className="w-full md:w-[70%] relative h-[300px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Details Box */}
                <div
                  className={`w-full md:w-[30%] flex flex-col justify-center p-8 lg:p-14 rounded-2xl ${isFirstTwo ? "bg-white text-[#071F07]" : "bg-[#A7B582] text-white"
                    }`}
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <div className="flex flex-col gap-10 md:gap-16">
                    {/* Project Name */}
                    <div className="flex flex-col">
                      <div className="flex items-center gap-4 mb-3">
                        <span className={`text-sm md:text-base font-medium whitespace-nowrap ${isFirstTwo ? "text-gray-500" : "text-white/80"}`}>
                          Project name
                        </span>
                        <div className={`flex-1 h-[1px] ${isFirstTwo ? "bg-gray-300" : "bg-white/40"}`}></div>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">{project.name}</h3>
                    </div>

                    {/* Location */}
                    <div className="flex flex-col">
                      <div className="flex items-center gap-4 mb-3">
                        <span className={`text-sm md:text-base font-medium whitespace-nowrap ${isFirstTwo ? "text-gray-500" : "text-white/80"}`}>
                          Location
                        </span>
                        <div className={`flex-1 h-[1px] ${isFirstTwo ? "bg-gray-300" : "bg-white/40"}`}></div>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">{project.location}</h3>
                    </div>

                    {/* Year */}
                    <div className="flex flex-col">
                      <div className="flex items-center gap-4 mb-3">
                        <span className={`text-sm md:text-base font-medium whitespace-nowrap ${isFirstTwo ? "text-gray-500" : "text-white/80"}`}>
                          Year
                        </span>
                        <div className={`flex-1 h-[1px] ${isFirstTwo ? "bg-gray-300" : "bg-white/40"}`}></div>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">{project.year}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>




       <div className="w-full md:hidden  flex flex-col   ">
        {projects.map((project, index) => {
          const isFirstTwo = index < 2;
          return (
            <div
              key={project.id}
              className={`w-full py-10 md:py-16 px-4 md:px-10 lg:px-20 flex justify-center ${isFirstTwo ? "bg-[#A7B582]" : "bg-white"
                }`}
            >
              <div 

               data-aos="fade-up"
                  data-aos-duration="1000"
              
              className="max-w-[1400px] w-full flex flex-col md:flex-row items-stretch">
                {/* Image Container */}
                <div
                  className="w-full md:w-[70%] relative h-[300px] md:h-[500px] lg:h-[600px] rounded-t-2xl overflow-hidden"
                 
                >
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Details Box */}
                <div
                  className={`w-full md:w-[30%] flex flex-col justify-center p-8 lg:p-14 rounded-b-2xl ${isFirstTwo ? "bg-white text-[#071F07]" : "bg-[#A7B582] text-white"
                    }`}
                >
                  <div className="flex flex-col gap-10 md:gap-16">
                    {/* Project Name */}
                    <div className="flex flex-col">
                      <div className="flex items-center gap-4 mb-3">
                        <span className={`text-sm md:text-base font-medium whitespace-nowrap ${isFirstTwo ? "text-gray-500" : "text-white/80"}`}>
                          Project name
                        </span>
                        <div className={`flex-1 h-[1px] ${isFirstTwo ? "bg-gray-300" : "bg-white/40"}`}></div>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">{project.name}</h3>
                    </div>

                    {/* Location */}
                    <div className="flex flex-col">
                      <div className="flex items-center gap-4 mb-3">
                        <span className={`text-sm md:text-base font-medium whitespace-nowrap ${isFirstTwo ? "text-gray-500" : "text-white/80"}`}>
                          Location
                        </span>
                        <div className={`flex-1 h-[1px] ${isFirstTwo ? "bg-gray-300" : "bg-white/40"}`}></div>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">{project.location}</h3>
                    </div>

                    {/* Year */}
                    <div className="flex flex-col">
                      <div className="flex items-center gap-4 mb-3">
                        <span className={`text-sm md:text-base font-medium whitespace-nowrap ${isFirstTwo ? "text-gray-500" : "text-white/80"}`}>
                          Year
                        </span>
                        <div className={`flex-1 h-[1px] ${isFirstTwo ? "bg-gray-300" : "bg-white/40"}`}></div>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">{project.year}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>



    </section>
  );
};

export default ProjectsBanner;
