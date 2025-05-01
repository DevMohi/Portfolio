/* eslint-disable react/prop-types */
import { OrbitingCircles } from "./OrbitingCircles";

function Frameworks() {
  const skills = [
    "auth0",
    "blazor",
    "cplusplus",
    "csharp",
    "css3",
    "dotnet",
    "dotnetcore",
    "git",
    "html5",
    "javascript",
    "microsoft",
    "react",
    "sqlite",
    "tailwindcss",
    "vitejs",
  ];

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>

      <OrbitingCircles iconSize={25} radius={100} speed={2}>
        {skills
          .slice()
          .reverse()
          .map((skill, index) => (
            <Icon key={index} src={`assets/logos/${skill}.svg`} />
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
