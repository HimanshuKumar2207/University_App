import React from "react";
import Hero from "../Home/Hero";
import AboAcademy from "./AboAcademy";
import OverCards from "./OverCards";
import UpEvents from "../Events/UpEvents";
import img from "../../assets/Academics_banner.jpg";

const Overview = () => {
  return (
    <>
      <Hero
        bannerHead="Excellence, Curiosity, Achievement"
        bannerDecs="At Enseignement Middle School, academics emphasize critical thinking, creativity, and growth."
        bannerImg={img}
        bannerbtn="Discover more"
      />
      <AboAcademy />
      <OverCards />
      <UpEvents />
    </>
  );
};

export default Overview;
