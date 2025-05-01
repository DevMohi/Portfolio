
import HeroText from "../components/HeroText";


import { useMediaQuery } from "react-responsive";

import ParallaxBackground from "../components/ParallaxBackground";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space" id="home">
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
      </figure>
    </section>
  );
};



export default Hero;
