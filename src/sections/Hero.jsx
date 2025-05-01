import HeroText from "../components/HeroText";
import { useMediaQuery } from "react-responsive";
import ParallaxBackground from "../components/ParallaxBackground";
import { motion } from "framer-motion";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  return (
    <section
      className="relative flex items-center justify-center min-h-screen overflow-hidden w-full rounded-b-2xl"
      id="home"
    >
      {/* Fullscreen Parallax Background */}
      <figure
        className="absolute inset-0 w-full h-full -z-10"
        style={{
          width: "100%",
          height: "100vh",
        }}
      >
        <ParallaxBackground />
      </figure>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 z-0"></div>

      {/* Grid Overlay (Subtle) */}
      <div
        className="absolute inset-0 z-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #fff 1px, transparent 1px),
            linear-gradient(to bottom, #fff 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl px-6 mx-auto c-space text-center">
        <HeroText />

        {/* Scroll Indicator (Only Desktop) */}
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="animate-bounce flex flex-col items-center">
              <p className="text-xs text-neutral-400 mb-2">SCROLL</p>
              <div className="w-4 h-8 border-2 border-neutral-400 rounded-full">
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1 h-1 bg-neutral-400 rounded-full mx-auto mt-1"
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Hero;
