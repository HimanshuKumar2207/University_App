import React from "react";
import Hero from "../components/Home/Hero";
import Establish from "../components/About/Establish";
import CamVideo from "../components/About/CamVideo";
import Teaching from "../components/About/Teaching";
import WhyEnseignment from "../components/About/WhyEnseignment";
import Testimonials from "../components/About/Testimonials";
import CampusNum from "../components/Home/CampusNum";
import img from "../assets/About_banner.jpg";

const About = () => {
  return (
    <>
      <Hero
        bannerHead="Empowering, Inspiring, Achieving"
        bannerDecs="Enseignement Middle School fosters growth, curiosity, and academic excellence daily"
        bannerImg={img}
        bannerbtn="Discover more"
      />
      <Establish />
      <CampusNum />
      <WhyEnseignment />
      <CamVideo />
      <Testimonials />
      <Teaching />
    </>
  );
};

export default About;
