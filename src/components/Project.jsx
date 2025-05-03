/* eslint-disable react/prop-types */
import { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  images,
  tags,
  video,
  features,
  challenges,
  futurePlans,
  frontendcodeLink,
  backendcodeLink,
}) => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      <div className="flex md:flex-wrap  justify-between px-4 md:px-0  py-6 md:py-15  ">
        <div>
          <p className="text-sm md:text-2xl mb-1">{title}</p>
          <div className="flex gap-2 md:gap-5 text-sand">
            {tags.map((tag) => (
              <span className="text-xs md:text-xl text-[#808080] font-semibold" key={tag.id}>
                {tag.name}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-start md:items-center">
          <button
            onClick={() => setIsHidden(true)}
            className="flex items-center gap-1 cursor-pointer hover-animation text-xs md:text-xl  md:mt-0"
          >
            Details
            <img src="assets/arrow-right.svg" className="w-5" />
          </button>
        </div>
      </div>

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          images={images} // Pass images as an array here
          tags={tags}
          href={href}
          video={video}
          features={features}
          challenges={challenges}
          futurePlans={futurePlans}
          closeModal={() => setIsHidden(false)}
          frontendcodeLink={frontendcodeLink}
          backendcodeLink={backendcodeLink}
        />
      )}
    </>
  );
};

export default Project;
