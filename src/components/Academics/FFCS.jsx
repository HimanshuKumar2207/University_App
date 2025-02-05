import React from "react";
import Hero from "../Home/Hero";
import video from "../../assets/Main_video.mp4";
import img from "../../assets/salientimg.jpg";
import { FaUserGraduate } from "react-icons/fa";
import banImg from "../../assets/Academics_banner.jpg";

const salientFeatures = [
  "Choice in the order of selection of courses for each semester.",
  "Choice in the timings / time slots in the selection of courses.",
  "Choice in the selection of number of courses per semester..",
  "Choice of preparing his / her own Timetable and Academic Plan.",
  "Balanced curriculum with engineering, science, humanities and management courses.",
  "Ample opportunities to do inter-disciplinary courses.",
  "Soft on slow learners by offering important / common courses in all semesters.",
  "Optional Summer / Intersession semester to do courses.",
  "Opportunity of under graduate research experience.",
  "Value addition with double Major / Minor / Honours option.",
  "Credit transfer options for international exchange programs.",
];

const FFCS = () => {
  return (
    <>
      <Hero
        bannerHead="Secure, Convenient, Efficient"
        bannerDecs="FFCS enables secure, convenient online payments for tuition and fees."
        bannerImg={banImg}
        bannerbtn="Discover more"
      />
      <div className="mt-20 px-6 sm:px-10">
        <div className="flex flex-col sm:flex-col lg:flex-row justify-evenly items-center sm:items-start">
          {/* Text Section */}
          <div className=" lg:w-1/2 w-full sm:w-[95vw] leading-relaxed text-gray-900">
            <p className="text-sm lg:text-lg sm:text-md px-4 sm:px-5 mb-6">
              In the continuous pursuit of academic excellence and creating a
              student-friendly learning environment, VIT introduced the Fully
              Flexible Credit System (Shortly referred to as FFCS). FFCS is a
              way in which students have complete freedom in tailoring their
              course and in a way they wish. It accommodates the wants and needs
              of the entire student community. With this system, a student can
              prepare his/her own timetable with the specific courses he/she
              intends to do in that semester along with the timings of classes
              and choice of professors. Learning has never been this fun.
              Students have the flexibility to pursue their other interests in
              sports or club activities, and scheduling of classes will take it
              along the way.
            </p>
            <p className="text-sm lg:text-lg sm:text-md px-4 sm:px-5">
              It is a beneficial system that is tailor-made to suit all the
              kinds of students with all learning needs, whether someone wishes
              to complete subjects early or pursue subjects of the other
              branches for acquiring a Minor/Honours degree. In addition, this
              system ensures offerings of subjects from all disciplines,
              encouraging students to pursue multiple interests and develop
              holistically.
            </p>
          </div>

          {/* Video Section */}
          <div className="lg:w-1/2 w-full sm:w-full flex justify-center mt-10 sm:mt-6 md:mt-10 ">
            <video
              src={video}
              className="h-[300px] w-[80vw] sm:h-[350px] lg:w-[600px] lg:h-[400px] sm:w-[90vw] rounded-lg shadow-xl sm:mt-6 md:mt-10 lg:mt-0"
              controls
            ></video>
          </div>
        </div>
      </div>

      <div>
        <div className="mt-16 lg:mt-24 flex flex-col lg:flex-row justify-center items-center lg:items-start relative px-4 lg:px-0 ">
          <div className="absolute top-[18%] hidden lg:block md:hidden">
            <img
              src={img}
              alt="image"
              className="w-[400px] lg:mr-[900px] sm:w-[500px] lg:w-[570px] max-w-full rounded-md shadow-lg border-4 border-white transition-transform duration-500 hover:scale-105 "
            />
          </div>

          {/* Salient Features Section */}
          <div className="bg-navcolor mx-auto p-6 sm:p-8 lg:px-20 lg:py-10 rounded-lg sm:ml-[20px] lg:ml-[400px] mt-8 lg:mt-0 lg:w-[1100px] lg:mb-20 ">
            <div className="heading text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl text-white font-semibold mb-5 lg:ml-[140px]">
                Salient Features
              </h2>
            </div>

            {salientFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4 mb-3 lg:ml-[140px] justify-center lg:justify-start"
              >
                <FaUserGraduate className="text-xl text-white" />
                <p className="text-lg sm:text-xl font-semibold text-white md:text-left">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FFCS;
