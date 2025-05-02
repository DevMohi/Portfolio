import { useState } from "react";
import { motion } from "framer-motion";
import ResumeButton from "../components/ResumeButton";

function Navigation() {
  return (
    <ul className="flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
      <li>
        <a
          className="text-neutral-400 hover:text-white transition-colors"
          href="#home"
        >
          Home
        </a>
      </li>
      <li>
        <a
          className="text-neutral-400 hover:text-white transition-colors"
          href="#about"
        >
          About
        </a>
      </li>
      <li>
        <a
          className="text-neutral-400 hover:text-white transition-colors"
          href="#work"
        >
          Work
        </a>
      </li>

      <li>
        <a
          className="text-neutral-400 hover:text-white transition-colors"
          href="#skills"
        >
          Skills
        </a>
      </li>
      <li>
        <a
          className="text-neutral-400 hover:text-white transition-colors"
          href="#blog"
        >
          Blogs
        </a>
      </li>
      <li>
        <a
          className="text-neutral-400 hover:text-white transition-colors"
          href="#contact"
        >
          Contact
        </a>
      </li>
      <li>
        <ResumeButton />
      </li>
    </ul>
  );
}

const Head = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40 ">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-4 sm:py-4">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Mohi
          </a>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
            >
              <img
                src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
                className="w-6 h-6"
                alt="toggle"
              />
            </button>
          </div>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>

      {/* Rest of your component remains the same */}
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Head;
