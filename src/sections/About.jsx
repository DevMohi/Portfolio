import { useRef } from "react";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import Frameworks from "../components/Frameworks";
import { Particles } from "../components/Particles"; // Import Particles Component

const About = () => {
  const grid2Container = useRef();

  return (
    <section className="c-space" id="about">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 with Parallax */}
        <div className="relative grid-1 rounded-xl text-white border border-gray-300 p-6">
          {/* Parallax effect */}
          <Particles
            className="absolute inset-0 -z-50"
            quantity={60}
            ease={60}
            color="#ffffff"
            refresh={true}
          />
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full relative"
          >
            <img
              src="/assets/about-astro.png" // Updated image link or use the uploaded astronaut image
              alt="Astronaut"
              className="floating-astronaut absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-64 md:h-132"
            />
          </div>
        </div>

        {/* Grid 2 with Parallax */}

        <div className="relative flex items-end grid-2 p-6 text-white rounded-xl overflow-hidden border border-gray-300">
          <Particles
            className="absolute inset-0 -z-50"
            quantity={50}
            ease={80}
            color="#ffffff"
            refresh={true}
          />
          <img
            src="assets/coding-pov-2.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext font-bold">Hi, I'm Mohi</p>
            <p className="subtext font-semibold">
              Over the last 4 years, I have been doing my bachelors and
              developed frontend and backend dev skills to build dynamic web and
              software applications.
            </p>
          </div>
        </div>

        {/* Grid 2 with Parallax and Animated Astronaut */}

        {/* Grid 3 with Parallax */}
        <div className="relative grid-3 rounded-xl text-white p-6 border border-gray-300">
          <Particles
            className="absolute inset-0 -z-50"
            quantity={40}
            ease={70}
            color="#ffffff"
            refresh={true}
          />
          <div className="z-10 w-[50%]">
            <p className="headtext font-bold">Time Zone</p>
            <p className="subtext font-medium text-white/90">
              I'm based in Bangladesh, and open to remote and office work
              worldwide.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 with Parallax */}
        <div className="relative grid-4 rounded-xl text-white flex items-center justify-center p-6 border border-gray-300">
          <Particles
            className="absolute inset-0 -z-50"
            quantity={50}
            ease={80}
            color="#ffffff"
            refresh={true}
          />
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext font-bold">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5 with Parallax */}
        <div className="relative grid-5 rounded-xl text-white p-6 border border-gray-300">
          <Particles
            className="absolute inset-0 -z-50"
            quantity={60}
            ease={60}
            color="#ffffff"
            refresh={true}
          />
          <div className="z-10 w-[40%] md:w-[60%]">
            <p className="headtext font-bold">Tech Stack</p>
            <p className="subtext font-semibold text-white/95">
              I specialize in MERN stack that allows me to build robust and
              scalable applications.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
          {/* Skills Text */}

          {/* Scroll down arrow */}

          <div className="flex absolute bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce">
            <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 text-white font-semibold text-sm md:text-xl">
              <p className="hidden md:block">Skills</p>
            </div>
            <a href="#skills">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-8 md:w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2" 
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
