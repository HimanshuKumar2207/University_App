import React from "react";
import Hero from "../Home/Hero";
import video from "../../assets/Main_video.mp4";
import { IoIosDesktop } from "react-icons/io";
import { IoIosLaptop } from "react-icons/io";
import { GiSpiderWeb } from "react-icons/gi";
import Img from "../../assets/Academics_banner.jpg";

const libraryData = [
  { resource: "Total Number of Books", velloreCampus: "2,49,511" },
  { resource: "Total Number of Back Volumes", velloreCampus: "18,350" },
  { resource: "Print Journals / Magazines", velloreCampus: "412" },
  { resource: "National", velloreCampus: "330" },
  { resource: "International", velloreCampus: "82" },
  { resource: "E-Books (On and Off Campus Access)", velloreCampus: "3,64,708" },
  { resource: "Online Databases / E-Journals", velloreCampus: "16,829" },
];

const CardData = [
  {
    id: 1,
    icon: <GiSpiderWeb />,
    heading: "Delnet",
    p1: "Delnet Discovery Portal",
  },
  {
    id: 2,
    icon: <IoIosDesktop />,
    heading: "E-Resources",
    p1: "16,829",
    p2: "Accessible on and off-campus",
  },

  {
    id: 3,
    icon: <IoIosLaptop />,
    heading: "E-Books",
    p1: "3,64,708",
    p2: "Available on and off-campus",
  },
];

const Library = () => {
  return (
    <>
      <Hero
        bannerHead="Knowledge, Resources, Access"
        bannerDecs="The Enseignment library provides knowledge, resources, and access to all students."
        bannerImg={Img}
        bannerbtn="Discover more"
      />

      <div className="mt-20 flex flex-col md:flex-col sm:flex-col lg:flex-row justify-center lg:justify-between px-6 sm:px-10 lg:px-24 ">
        {/* Text Section */}
        <div className="w-full sm:w-[90vw] leading-relaxed mb-8 sm:mb-0">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-5 underline underline-offset-4 text-center sm:text-left sm:ml-10 lg:text-4xl text-navcolor">
            Enseignement Central Library
          </h2>
          <p className="text-md px-6 sm:px-10 text-gray-800 mb-4">
            In the continuous pursuit of academic excellence and creating a
            student-friendly learning environment, Enseignemnt introduced the
            Fully Flexible Credit System (Shortly referred to as FFCS). FFCS is
            a way in which students have complete freedom in tailoring their
            course and in a way they wish. It accommodates the wants and needs
            of the entire student community. With this system, a student can
            prepare his/her own timetable with the specific courses he/she
            intends to do in that semester along with the timings of classes and
            choice of professors. Learning has never been this fun. Students
            have the flexibility to pursue their other interests in sports or
            club activities and scheduling of classes will take it along the
            way.
          </p>
          <p className="text-md px-6 sm:px-10 text-gray-800">
            It is a beneficial system that is tailor-made to suit all the kinds
            of students with all learning needs, whether someone wishes to
            complete subjects early or pursue subjects of the other branches for
            acquiring a Minor/Honours degree. In addition, this system ensures
            offerings of subjects from all disciplines, encouraging students to
            pursue multiple interests and develop holistically.
          </p>
        </div>

        {/* Video Section */}
        <div className="w-full sm:w-full flex justify-center sm:justify-start mt-10 mb-10 md:mt-10">
          <video
            src={video}
            className="w-full sm:w-[90vw] h-[300px] sm:h-[300px] rounded-lg shadow-lg lg:h-[420px] "
            controls
          ></video>
        </div>
      </div>

      <div className="p-6 sm:p-8 lg:p-16 mb-16">
        {/* Table Layout */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden border">
            <thead className="bg-navcolor text-white">
              <tr>
                <th className="py-3 px-4 sm:px-6 text-left text-sm sm:text-base">
                  Library Resources
                </th>
                <th className="py-3 px-4 sm:px-6 text-left text-sm sm:text-base">
                  Vellore Campus
                </th>
              </tr>
            </thead>
            <tbody>
              {libraryData.map((item, index) => (
                <tr
                  key={index}
                  className={`border-t ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  <td className="py-3 px-4 sm:px-6 text-sm sm:text-base">
                    {item.resource}
                  </td>
                  <td className="py-3 px-4 sm:px-6 text-sm sm:text-base">
                    {item.velloreCampus}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Library;
