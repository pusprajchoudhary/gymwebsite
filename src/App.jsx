import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner"; // Home
import Wcu from "./components/Wcu"; // Why Choose Us
import Mt from "./components/Mt"; // Trainers Section
import Pricing from "./components/Pricing"; // Pricing
import Contact from "./components/Contact"; // Contact
import Footer from "./components/Footer"; // Footer
import { Element } from "react-scroll"; // Import Element for scrolling

const App = () => {
  return (
    <div>
      <Navbar />
      
      <Element name="home">
        <Banner />
      </Element>

      <Element name="about">
        <Wcu />
      </Element>

      <Element name="trainers">
        <Mt />
      </Element>

      <Element name="pricing">
        <Pricing />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>

      <Footer />
    </div>
  );
};

export default App;
