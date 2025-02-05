import React from "react";
import Hero from "../Home/Hero";
import { FaArrowRightLong } from "react-icons/fa6";
import img from "../../assets/Academics_banner.jpg";

const councilMinutes = [
  "Minutes of the 61st Meeting of the Academics Council",
  "Minutes of the 60th Meeting of the Academics Council",
  "Minutes of the 59th Meeting of the Academics Council",
  "Minutes of the 58th Meeting of the Academics Council",
  "Minutes of the 57th Meeting of the Academics Council",
  "Minutes of the 56th Meeting of the Academics Council",
  "Minutes of the 55th Meeting of the Academics Council",
  "Minutes of the 54th Meeting of the Academics Council",
  "Minutes of the 53rd Meeting of the Academics Council",
  "Minutes of the 52nd Meeting of the Academics Council",
];

const Council = () => {
  return (
    <>
      <Hero
        bannerHead="Academics Council"
        bannerDecs="The Academic Council at Enseignement fosters learning, leadership, and growth"
        bannerImg={img}
        bannerbtn="Discover more"
      />
      <div className="mt-12 sm:mt-16 sm:ml-24 lg:ml-[130px]">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-navcolor underline underline-offset-8 md:text-left sm:text-left">
          Academics Council Minutes
        </h2>
      </div>

      <div className="mt-8 mb-20 sm:ml-20 md:ml-[80px] lg:ml-[120px]">
        {councilMinutes.map((title, index) => (
          <div key={index} className="flex justify-start items-center mb-4">
            <FaArrowRightLong className="text-2xl mx-4 mt-1 text-navcolor" />
            <h4 className="text-sm sm:text-lg md:text-xl text-black">
              {title}
            </h4>
          </div>
        ))}
      </div>
    </>
  );
};

export default Council;
