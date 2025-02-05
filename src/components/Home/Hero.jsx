import React from "react";
import { Link } from "react-router-dom";

const Hero = ({ bannerHead, bannerImg, bannerDecs, bannerbtn }) => {
  return (
    <div className="relative">
      <img
        src={bannerImg}
        alt="hero_img"
        loading="lazy"
        className="w-full h-[400px] md:h-[500px] lg:h-[700px] "
      />

      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center bg-black bg-opacity-50">
        <h1 className="text-white text-2xl font-bold leading-tight mt-24 text-center w-[95%] sm:text-3xl md:w-[85%] md:text-4xl lg:text-5xl ">
          {bannerDecs}
        </h1>

        <h3 className="text-xl mt-6 text-white font-semibold leading-none sm:text-2xl md:text-3xl lg:text-4xl lg:mt-10 md:mt-8">
          {bannerHead}
        </h3>

        <Link to="">
          <p className="cursor-pointer w-fit sm:px-3 sm:py-2 px-2 py-1 border-2 border-white bg-transparent rounded-md text-lg mx-auto text-white mt-6 lg:mt-10 md:mt-8">
            {bannerbtn}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
