import { useState } from "react";
import About from "./About";
import Experiences from "./Experiences";
import Education from "./Education";

const AboutTabs = () => {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
  ];

  return (
    <section className="text-white my-12 " id="about-tabs">
      {/* Tabs Container */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-gray-800/60 border border-gray-600 rounded-full p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-6 py-2 rounded-full font-medium text-sm sm:text-base transition-all duration-300
                ${
                  activeTab === tab.id
                    ? "bg-indigo text-white shadow hover:bg-royal"
                    : "text-gray-300 hover:text-white hover:bg-gray-700"
                }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content - Removed padding */}
      <div className="">
        {activeTab === "about" && <About />}
        {activeTab === "experience" && <Experiences />}
        {activeTab === "education" && <Education />}
      </div>
    </section>
  );
};

export default AboutTabs;
