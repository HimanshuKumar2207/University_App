import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const Habout = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="relative flex flex-col lg:flex-row justify-around items-center px-10 py-10 bg-gray-100 text-white mt-16 rounded-lg overflow-hidden lg:gap-20 lg:px-24 ">
        {/* Left Section */}
        <div className="left text-left mb-8">
          <h1 className="text-3xl font-bold text-navcolor leading-tight md:text-4xl lg:text-5xl lg:ml-18 lg:mb-[160px]">
            Learn about our rich history and commitment to excellence
          </h1>
        </div>

        {/* Right Section */}
        <div className="right lg:w-[100%] lg:mr-10 bg-white shadow-xl rounded-xl p-8 ">
          
          <p className="text-md text-gray-600 leading-relaxed md:hidden">
            {isExpanded
              ? "At Enlightment Schools, our legacy is built on a foundation of tradition, growth, and an unwavering commitment to excellence. Since our inception, we have been dedicated to fostering a culture where curiosity is celebrated, potential is nurtured, and innovation thrives. With a proud history of shaping bright minds and empowering individuals, Enlightment Schools continues to inspire greatness and lead the way in education. Our mission is rooted in the belief that every student deserves the opportunity to shine, and our journey reflects a passion for preparing future leaders with knowledge, integrity, and purpose."
              : "At Enlightment Schools, our legacy is built on a foundation of tradition, growth, and an unwavering commitment to excellence. Since our inception, we have been dedicated to fostering a culture where curiosity is celebrated , potential is nurtured, and innovation thrives...."}
          </p>

          {/* "Read More" / "Read Less" Button for smaller screens */}
          <button
            className="text-blue-500 mt-2 md:hidden"
            onClick={toggleContent}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>

          {/* Content for larger screens */}
          <p className="text-md text-gray-600 leading-relaxed hidden md:block">
            At Enlightment Schools, our legacy is built on a foundation of
            tradition, growth, and an unwavering commitment to excellence. Since
            our inception, we have been dedicated to fostering a culture where
            curiosity is celebrated, potential is nurtured, and innovation
            thrives. With a proud history of shaping bright minds and empowering
            individuals, Enlightment Schools continues to inspire greatness and
            lead the way in education. Our mission is rooted in the belief that
            every student deserves the opportunity to shine, and our journey
            reflects a passion for preparing future leaders with knowledge,
            integrity, and purpose.
          </p>

          <div>
            {" "}
            <Link to="../Admission/Undergraduate">
              <button className="px-3 py-2 bg-navcolor text-white font-semibold text-lg rounded-md hover:bg-opacity-90 transition mt-5 ">
                Explore Programs
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Habout;
