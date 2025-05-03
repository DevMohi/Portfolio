/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useState } from "react";

const ProjectDetails = ({
  title,
  description,
  features,
  challenges,
  video,
  images, // Expecting an array of images
  href,
  tags,
  closeModal,
  frontendcodeLink,
  backendcodeLink,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isValidVideo = video && video !== "N/A";

  // Ensure images is an array and has items
  const validImages = Array.isArray(images) && images.length > 0;

  const nextImage = () => {
    if (!validImages) return; // Ensure images exist before proceeding
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    if (!validImages) return; // Ensure images exist before proceeding
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-y-auto backdrop-blur-sm py-6 px-2"
      onClick={closeModal}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-2xl mx-auto border shadow-sm rounded bg-gradient-to-l from-midnight to-navy border-white/10 overflow-hidden"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute p-3 rounded-full top-4 right-4 bg-midnight/80 hover:bg-gray-500 z-10 cursor-pointer transition-all ease-in-out duration-300 transform hover:scale-110"
          aria-label="Close modal"
        >
          <img src="/assets/close.svg" alt="close" className="w-5 h-5" />
        </button>

        {/* Image Slider */}
        {validImages && (
          <div className="relative ">
            <img
              src={images[currentImageIndex]} // Display the current image
              alt={title}
              className="w-full max-h-[380px] object-contain"
            />
            {/* Left Arrow */}
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 px-4 py-2 bg-black text-white rounded-full transition-all ease-in-out duration-300 hover:bg-gray-500 hover:scale-110 cursor-pointer"
            >
              {"<"}
            </button>
            {/* Right Arrow */}
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 px-4 py-2 cursor-pointer bg-black text-white rounded-full transition-all ease-in-out duration-300 hover:bg-gray-500 hover:scale-110"
            >
              {">"}
            </button>
          </div>
        )}

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-10">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Description */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                Description
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base">
                {description}
              </p>
            </div>

            {/* Features */}
            {features && features.length > 0 && (
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  Features
                </h3>
                <ul className="text-neutral-400 space-y-1.5 list-inside">
                  {features.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-white mr-2">•</span>
                      <span className="text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Challenges */}
            <div className="hidden md:block">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                Challenges
              </h3>
              <ul className="text-neutral-400 space-y-1.5 list-inside">
                {challenges.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span className="text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              {href && (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-blue-400 hover:text-blue-500 transition-colors text-sm sm:text-base"
                >
                  View Project
                  <img
                    src="/assets/arrow-up.svg"
                    className="size-4"
                    alt="arrow"
                  />
                </a>
              )}

              <div>
                {frontendcodeLink && frontendcodeLink !== "N/A" && (
                  <a
                    href={frontendcodeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-medium text-blue-400 hover:text-blue-500 transition-colors text-sm sm:text-base"
                  >
                    Frontend Code
                  </a>
                )}
              </div>
              <div>
                {backendcodeLink && backendcodeLink !== "N/A" && (
                  <a
                    href={backendcodeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-medium text-blue-400 hover:text-blue-500 transition-colors text-sm sm:text-base"
                  >
                    Backend Code
                  </a>
                )}
              </div>

              {video && video !== "N/A" && (
                <a
                  href={video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-blue-400 hover:text-blue-500 transition-colors text-sm sm:text-base"
                >
                  View Video
                  <img
                    src="/assets/arrow-up.svg"
                    className="size-4"
                    alt="arrow"
                  />
                </a>
              )}
            </div>

            {/* Tags */}
            <div className="flex items-center justify-center">
              <div className="flex gap-3">
                {tags &&
                  tags.map((tag) => (
                    <img
                      key={tag.id}
                      src={tag.path}
                      alt={tag.name}
                      className="rounded-lg size-10 hover:scale-105 transition-transform"
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
