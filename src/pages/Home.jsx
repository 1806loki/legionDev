/* eslint-disable no-unused-vars */
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <div className="h-screen w-screen overflow-x-hidden scroll-smooth flex flex-col items-center bg-black root-container text-white relative">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
