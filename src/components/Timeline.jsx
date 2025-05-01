"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="c-space section-spacing" ref={containerRef} id="experience">
      <section className="section-spacing">
        <h2 className="text-heading text-center">Experience</h2>

        {/* Education Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-neutral-300">Education</h3>
          <div className="bg-dashed-line mt-4 h-[1px] w-full" />
          <div className="mt-6 space-y-6 px-4 md:px-0">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <p className="font-bold text-xl text-neutral-100">
                UCSI University Malaysia
              </p>
              <p className="text-sm text-neutral-400">2020 - 2023</p>
              <p className="text-neutral-300">Course: Bachelors In Computing</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <p className="font-bold text-xl text-neutral-100">
                Sunshine Grammar School
              </p>
              <p className="text-sm text-neutral-400">O Levels & A Levels</p>
              <p className="text-neutral-300">Graduated: 2019</p>
            </div>
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-neutral-300">
            Work Experience
          </h3>
          <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-4 h-[1px] w-full" />
          <div ref={ref} className="relative pb-20">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex justify-start pt-10 md:pt-40 md:gap-10"
              >
                {/* Sticky elements (Title, Job, Date) */}
                <div className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
                  <div className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-[15px] bg-midnight">
                    <div className="w-4 h-4 p-2 border rounded-full bg-neutral-800 border-neutral-700" />
                  </div>
                  <div className="flex-col hidden gap-2 text-xl font-bold md:flex md:pl-20 md:text-2xl lg:text-4xl text-neutral-300">
                    <h3
                      className={`text-2xl text-neutral-400 ${
                        item.title === "Sols Energy" ? "text-yellow-500" : ""
                      }`}
                    >
                      {item.title}
                    </h3>
                    <h3 className="text-xl md:text-2xl text-neutral-500">
                      {item.job}
                    </h3>
                    <h3 className="text-sm md:text-xl text-neutral-300">
                      {item.date}
                    </h3>
                  </div>
                </div>

                {/* Content (Experience details) */}
                <div className="relative w-full pl-4 pr-4 md:pl-4">
                  <div className="block mb-4 text-xl font-bold text-left text-neutral-300 md:hidden">
                    <h3>{item.title}</h3>
                    <h3>{item.job}</h3>
                    <h3>{item.date}</h3>
                  </div>

                  {/* Bullet Points for Content */}
                  <ul className="list-disc pl-5 space-y-2">
                    {item.contents.map((content, index) => (
                      <li key={index} className="font-normal text-neutral-400">
                        {content}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Animated Line */}
            <div
              style={{
                height: height + "px",
              }}
              className="absolute md:left-1 left-1 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
            >
              <motion.div
                style={{
                  height: heightTransform,
                  opacity: opacityTransform,
                }}
                className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-lavender/50 to-transparent from-[0%] via-[10%] rounded-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
