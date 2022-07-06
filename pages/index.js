import React from "react";
import Intro from "../components/Intro";
import About from "../components/About";
import Experience from "../components/Experience";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Intro />
      <main>
        <About />
        <Experience />
        <TechStack />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Home;
