import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });

  const mountain3Y = useTransform(x, [0, 0.5], ["0%", "70%"]);
  const planetsX = useTransform(x, [0, 0.5], ["0%", "-20%"]);
  const mountain2Y = useTransform(x, [0, 0.5], ["0%", "30%"]);
  const mountain1Y = useTransform(x, [0, 0.5], ["0%", "0%"]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
      {/* Sky */}
      <div
        className="absolute w-full h-full bg-cover bg-bottom"
        style={{ backgroundImage: "url(/assets/sky.jpg)", zIndex: -50 }}
      />

      {/* Mountain 3 */}
      <motion.div
        className="absolute w-full h-full bg-cover bg-bottom"
        style={{
          backgroundImage: "url(/assets/mountain-3.png)",
          y: mountain3Y,
          zIndex: -40,
        }}
      />

      {/* Planets */}
      <motion.div
        className="absolute w-full h-full bg-cover bg-bottom"
        style={{
          backgroundImage: "url(/assets/planets.png)",
          x: planetsX,
          zIndex: -30,
        }}
      />

      {/* Mountain 2 */}
      <motion.div
        className="absolute w-full h-full bg-cover bg-bottom"
        style={{
          backgroundImage: "url(/assets/mountain-2.png)",
          y: mountain2Y,
          zIndex: -20,
        }}
      />

      {/* Mountain 1 */}
      <motion.div
        className="absolute w-full h-full bg-cover bg-bottom"
        style={{
          backgroundImage: "url(/assets/mountain-1.png)",
          y: mountain1Y,
          zIndex: -10,
        }}
      />
    </div>
  );
};

export default ParallaxBackground;
