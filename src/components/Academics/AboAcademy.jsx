import React from "react";
import img from "../../assets/Academics_main.jpg";
import { Link } from "react-router-dom";

const AboAcademy = () => {
  return (
    <div className="bg-white mt-20 px-6 sm:px-10 py-10">
      <div className="lg:w-full flex flex-col sm:flex-col justify-between items-center md:flex-col lg:flex-row sm:gap-10 lg:gap-20">
        {/* Text Section */}
        <div className="lg:w-1/2 -row sm:w-full sm:text-left mb-8 sm:mb-0">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Academic Programs at <br />{" "}
            <span className="text-navcolor text-4xl sm:text-5xl">
              Enseignment Middle School
            </span>
          </h2>
          <p className="text-md sm:text-md text-left text-gray-800 leading-relaxed mb-5">
            Ability Enhancement and Skill Development: We prioritize enhancing
            both academic knowledge and practical skills, helping students
            become well-rounded individuals. Students participate in courses
            that are tailored to enhance their cognitive and physical abilities.
          </p>
          <p className="text-md sm:text-md text-left text-gray-800 leading-relaxed mb-5">
            SWAYAM Credit Transfer: Enseignement Middle School students can also
            engage in online learning through SWAYAM, a government platform
            offering MOOCs (Massive Open Online Courses). After successful
            completion of selected online courses, students can transfer credits
            to their school curriculum, enhancing their learning experience.
          </p>
          <p className="text-md sm:text-md text-left text-gray-800 leading-relaxed mt-4">
            We follow a Choice Based Credit System (CBCS), which gives students
            the autonomy to choose their subjects and areas of interest,
            promoting a more personalized learning experience. All programs and
            courses are designed to meet the highest academic standards and
            cater to students’ diverse learning needs.
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 md:w-full flex justify-center sm:justify-start  sm:mt-0">
          <img
            src={img}
            alt="Academic Overview"
            className="h-[250px] w-[90vw] sm:h-[300px] lg:h-[420px]  sm:w-[85vw] md:w-[90vw] object-cover rounded-lg shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default AboAcademy;
