import React from "react";
import Banner from "./Banner";
import Contact from "./Contact";
import Footer from "./Footer";
import MailChimpForm from "./MailChimpForm";
import Projects from "./Projects";
import Skills from "./Skills";
const Home = () => {
  return (
    <div className="App">
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
