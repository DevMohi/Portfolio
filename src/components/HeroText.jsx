import { FlipWords } from "./FlipWords";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const HeroText = () => {
  const solutions = ["Scalable", "Secure", "Modern", "Performance"];
  const specialties = [
    "Full-Stack Developer",
    1500,
    "Frontend Specialist",
    1500,
    "Backend Developer",
    1500,
    "WordPress Expert",
    1500,
    "C++ Developer",
    1500,
  ];

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
          className="flex items-center gap-3 mb-2"
        >
          <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
          <p className="text-2xl font-mono ">Currently available for work</p>
        </motion.div>

        <motion.h1
          className="text-5xl font-medium leading-tight"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm <span className="text-white font-semibold">Mohi</span>
        </motion.h1>

        <div className="flex flex-col items-start gap-1 mt-2 font-bold">
          <TypeAnimation
            sequence={specialties}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-lg text-neutral-400 font-mono"
          />

          <motion.p
            className="text-4xl font-medium text-neutral-300 mt-2"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Crafting
          </motion.p>

          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
            className="my-2"
          >
            <FlipWords
              words={solutions}
              className="font-bold text-white text-6xl"
            />
          </motion.div>

          <motion.p
            className="text-3xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web & Software Solutions
          </motion.p>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col space-y-4 md:hidden">
        <motion.p
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm Mohi
        </motion.p>
        <div>
          <TypeAnimation
            sequence={specialties}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-lg text-neutral-400 font-mono"
          />

          <motion.p
            className="text-5xl font-black text-neutral-300 mt-2"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Building
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={solutions}
              className="font-bold text-white text-5xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-black text-neutral-300 mt-2"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Digital Solutions
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
