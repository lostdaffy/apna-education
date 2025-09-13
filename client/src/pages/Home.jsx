import React from "react";
import { Link } from "react-router-dom";
import GetInTouch from "../components/GetInTouch";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Expertise from "../components/Home/Expertise";
import FirstBanner from "../components/Home/FirstBanner";
import PopularCountry from "../components/Home/PopularCountry";
import Partner from "../components/Home/Partners";
import Testimonial from "../components/Home/Testimonial";

const Home = () => {
  return (
    <div>
      <Hero />
      <FirstBanner />
      <About />
      <PopularCountry />
      <Expertise />
      <Partner />
      <Testimonial />
      <GetInTouch />
    </div>
  );
};

export default Home;
