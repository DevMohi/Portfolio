/* eslint-disable react/prop-types */
import { OrbitingCircles } from "./OrbitingCircles";

function Frameworks() {
  const skills = [
    "typescript",
    "mongodb",
    "postman",
    "next",
    "c",
    "html",
    "javascript",
    "c++",
    "mongodb",
    "npm",
    "postman",
    "react",
    "redux",
    "firebase",
    "vs",
    "git",
    "mongoose",
    "github",
    "python",
    "json",
  ];

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={30}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logo-svg/${skill}.svg`} />
        ))}
      </OrbitingCircles>

      <OrbitingCircles iconSize={20} radius={100} speed={2}>
        {skills
          .slice()
          .reverse()
          .map((skill, index) => (
            <Icon key={index} src={`assets/logo-svg/${skill}.svg`} />
          ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img
    src={src}
    onError={(e) => (e.target.src = "/path/to/default-image.svg")} // Optional fallback
    className="duration-200 rounded-sm hover:scale-110"
  />
);

export default Frameworks;
