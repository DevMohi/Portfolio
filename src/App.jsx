import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Head from "./sections/Head";
import Skills from "./sections/Skills";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Head />
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
