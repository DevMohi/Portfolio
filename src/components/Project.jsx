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
}) => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      <div className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0">
        <div>
          <p className="text-2xl">{title}</p>
          <div className="flex gap-5 mt-2 text-sand">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 cursor-pointer hover-animation"
        >
          Details
          <img src="assets/arrow-right.svg" className="w-5" />
        </button>
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
        />
      )}
    </>
  );
};

export default Project;
