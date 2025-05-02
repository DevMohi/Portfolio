import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import Frameworks from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();

  return (
    <section className="c-space" id="about">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="bg-gradient-to-r from-indigo to-storm hover:bg-royal hover-animation relative flex items-end grid-1 p-6 text-white rounded-xl overflow-hidden">
          <img
            src="assets/coding-pov.png"
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
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-[#1E293B]" />
        </div>

        {/* Grid 2 */}
        <div className="hidden md:block bg-gradient-to-r from-indigo to-storm hover:bg-royal hover-animation grid-2 rounded-xl text-white">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full relative"
          >
            <p className="absolute bottom-10 left-10 text-5xl font-bold text-white drop-shadow-lg">
              CODE TO EARN
            </p>
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="MERN"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Design Patterns"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "55%", left: "0%" }}
              text="Design Principles"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="Full-Stack"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/react.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/js.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/github.png"
              containerRef={grid2Container}
            />
          </div>
        </div>

        {/* Grid 3 */}
        <div className="bg-gradient-to-r from-indigo to-storm hover:bg-royal hover-animation grid-3 rounded-xl text-white relative p-6">
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

        {/* Grid 4 */}
        <div className="bg-gradient-to-r from-indigo to-storm hover:bg-royal hover-animation grid-4 rounded-xl text-white flex items-center justify-center p-6">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext font-bold">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5 */}
        <div className="bg-gradient-to-r from-indigo to-storm hover:bg-royal hover-animation grid-5 rounded-xl text-white relative p-6">
          <div className="z-10 w-[50%]">
            <p className="headtext font-bold">Tech Stack</p>
            <p className="subtext font-semibold text-white/95">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
