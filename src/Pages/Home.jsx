import React from "react";
import Hero from "../components/Home/Hero";
import Habout from "../components/Home/Habout";
import PopCourses from "../components/Home/PopCourses";
import EssResources from "../components/Home/EssResources";
import Partners from "../components/Home/Partners";
import UpEvents from "../components/Events/UpEvents";
import Signup from "../components/Home/Signup";
import CampusNum from "../components/Home/CampusNum";
import Explore from "../components/About/Explore";
import img from "../assets/img1.jpg";

const Home = () => {
  return (
    <>
      <Hero
        bannerHead="Inspiration, Excellence, Discovery"
        bannerDecs="Welcome to Enseignement Middle School, where knowledge meets life's journey"
        bannerImg={img}
        bannerbtn="Discover more"
      />
      <Habout />
      <PopCourses />
      <EssResources />
      <Partners />
      <CampusNum />
      <UpEvents />
      <Explore />
      <Signup />
    </>
  );
};

export default Home;
