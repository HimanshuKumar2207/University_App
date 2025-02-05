import React from "react";
import Hero from "../components/Home/Hero";
import UpEvents from "../components/Events/UpEvents";
import img from "../assets/Events_banner.jpg";

const Events = () => {
  return (
    <>
      <Hero
        bannerHead="Engage, Participate, Celebrate"
        bannerDecs="Events at our school encourage engagement, participation, and community celebration."
        bannerImg={img}
        bannerbtn="Discover more"
      />
      <UpEvents />
    </>
  );
};

export default Events;
