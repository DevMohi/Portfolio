import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Head from "./sections/Head";
import Skills from "./sections/Skills";
import Blog from "./sections/Blog";
import AboutTabs from "./sections/AboutTabs";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Head  />
      <Hero  />
      <AboutTabs  />
      <Projects  />
      <Skills  />
      <Blog  />
      <Contact  />
      <Footer />
    </div>
  );
};

export default App;
