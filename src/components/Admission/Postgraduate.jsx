import React, { useState } from "react";
import Hero from "../Home/Hero";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Engimg from "../../assets/eng_iT.png";
import BMimg from "../../assets/Busineess management.jpeg";
import artsImg from "../../assets/arts&Humanities.jpeg";
import mediImg from "../../assets/medical.jpg";
import law from "../../assets/laws.jpeg";
import sscImg from "../../assets/ssc.jpeg";
import desImg from "../../assets/des&fash.jpeg";
import science from "../../assets/science.png";
import HosTourImg from "../../assets/hospitality.png";

import img from "../../assets/Admission_banner.jpg";
const postgraduateCourses = [
  {
    category: "Engineering & Technology",
    image: Engimg, // Replace with actual image
    courses: [
      {
        name: "M.Tech in Computer Science",
        duration: "2 Years",
        fee: "₹3,00,000 per year",
        established: "2005",
      },
      {
        name: "M.Tech in Information Technology",
        duration: "2 Years",
        fee: "₹2,80,000 per year",
        established: "2007",
      },
      {
        name: "M.Tech in Mechanical Engineering",
        duration: "2 Years",
        fee: "₹3,00,000 per year",
        established: "2008",
      },
      {
        name: "M.Tech in Electrical Engineering",
        duration: "2 Years",
        fee: "₹3,20,000 per year",
        established: "2010",
      },
      {
        name: "M.Tech in Civil Engineering",
        duration: "2 Years",
        fee: "₹2,90,000 per year",
        established: "2012",
      },
    ],
  },
  {
    category: "Business & Management",
    image: BMimg,
    courses: [
      {
        name: "Master of Business Administration (MBA)",
        duration: "2 Years",
        fee: "₹3,50,000 per year",
        established: "2000",
      },
      {
        name: "MBA in Marketing",
        duration: "2 Years",
        fee: "₹3,60,000 per year",
        established: "2003",
      },
      {
        name: "MBA in Finance",
        duration: "2 Years",
        fee: "₹3,70,000 per year",
        established: "2002",
      },
      {
        name: "MBA in Human Resources",
        duration: "2 Years",
        fee: "₹3,50,000 per year",
        established: "2004",
      },
      {
        name: "Master of Commerce (M.Com)",
        duration: "2 Years",
        fee: "₹2,00,000 per year",
        established: "2001",
      },
    ],
  },
  {
    category: "Arts & Humanities",
    image: artsImg,
    courses: [
      {
        name: "Master of Arts (MA) in English",
        duration: "2 Years",
        fee: "₹1,50,000 per year",
        established: "2010",
      },
      {
        name: "MA in History",
        duration: "2 Years",
        fee: "₹1,40,000 per year",
        established: "2012",
      },
      {
        name: "MA in Political Science",
        duration: "2 Years",
        fee: "₹1,45,000 per year",
        established: "2011",
      },
      {
        name: "MA in Sociology",
        duration: "2 Years",
        fee: "₹1,30,000 per year",
        established: "2013",
      },
      {
        name: "Master of Fine Arts (MFA)",
        duration: "2 Years",
        fee: "₹1,70,000 per year",
        established: "2015",
      },
    ],
  },
  {
    category: "Medical & Health Sciences",
    image: mediImg,
    courses: [
      {
        name: "Master of Surgery (MS)",
        duration: "3 Years",
        fee: "₹8,50,000 per year",
        established: "1995",
      },
      {
        name: "Master of Dental Surgery (MDS)",
        duration: "3 Years",
        fee: "₹6,50,000 per year",
        established: "1997",
      },
      {
        name: "Master of Pharmacy (M.Pharm)",
        duration: "2 Years",
        fee: "₹4,00,000 per year",
        established: "2002",
      },
      {
        name: "Master of Physiotherapy (MPT)",
        duration: "2 Years",
        fee: "₹3,50,000 per year",
        established: "2005",
      },
      {
        name: "Master of Nursing (M.Sc Nursing)",
        duration: "2 Years",
        fee: "₹3,00,000 per year",
        established: "2006",
      },
    ],
  },
  {
    category: "Law",
    image: law,
    courses: [
      {
        name: "Master of Laws (LLM)",
        duration: "1 Year",
        fee: "₹2,00,000 per year",
        established: "2000",
      },
      {
        name: "LLM in Corporate Law",
        duration: "1 Year",
        fee: "₹2,20,000 per year",
        established: "2002",
      },
      {
        name: "LLM in International Law",
        duration: "1 Year",
        fee: "₹2,50,000 per year",
        established: "2005",
      },
      {
        name: "LLM in Criminal Law",
        duration: "1 Year",
        fee: "₹2,40,000 per year",
        established: "2006",
      },
      {
        name: "LLM in Taxation",
        duration: "1 Year",
        fee: "₹2,30,000 per year",
        established: "2007",
      },
    ],
  },
  {
    category: "Social Sciences",
    image: sscImg,
    courses: [
      {
        name: "Master of Psychology",
        duration: "2 Years",
        fee: "₹2,00,000 per year",
        established: "2010",
      },
      {
        name: "Master of Sociology",
        duration: "2 Years",
        fee: "₹1,90,000 per year",
        established: "2012",
      },
      {
        name: "Master of Social Work (MSW)",
        duration: "2 Years",
        fee: "₹2,10,000 per year",
        established: "2013",
      },
      {
        name: "Master of Anthropology",
        duration: "2 Years",
        fee: "₹2,00,000 per year",
        established: "2014",
      },
      {
        name: "Master of Economics",
        duration: "2 Years",
        fee: "₹1,80,000 per year",
        established: "2009",
      },
    ],
  },
  {
    category: "Design & Fashion",
    image: desImg,
    courses: [
      {
        name: "Master of Fashion Design",
        duration: "2 Years",
        fee: "₹3,00,000 per year",
        established: "2008",
      },
      {
        name: "Master of Interior Design",
        duration: "2 Years",
        fee: "₹2,80,000 per year",
        established: "2009",
      },
      {
        name: "Master of Graphic Design",
        duration: "2 Years",
        fee: "₹2,70,000 per year",
        established: "2010",
      },
      {
        name: "Master of Animation and Multimedia",
        duration: "2 Years",
        fee: "₹2,90,000 per year",
        established: "2011",
      },
      {
        name: "Master of Product Design",
        duration: "2 Years",
        fee: "₹3,10,000 per year",
        established: "2012",
      },
    ],
  },
  {
    category: "Science",
    image: science,
    courses: [
      {
        name: "Master of Science (M.Sc) in Physics",
        duration: "2 Years",
        fee: "₹2,00,000 per year",
        established: "2002",
      },
      {
        name: "M.Sc in Chemistry",
        duration: "2 Years",
        fee: "₹2,10,000 per year",
        established: "2003",
      },
      {
        name: "M.Sc in Biology",
        duration: "2 Years",
        fee: "₹2,20,000 per year",
        established: "2004",
      },
      {
        name: "M.Sc in Mathematics",
        duration: "2 Years",
        fee: "₹2,00,000 per year",
        established: "2005",
      },
      {
        name: "M.Sc in Environmental Science",
        duration: "2 Years",
        fee: "₹2,30,000 per year",
        established: "2006",
      },
    ],
  },
  {
    category: "Hospitality & Tourism",
    image: HosTourImg,
    courses: [
      {
        name: "Master of Hotel Management",
        duration: "2 Years",
        fee: "₹2,50,000 per year",
        established: "2008",
      },
      {
        name: "Master of Tourism Management",
        duration: "2 Years",
        fee: "₹2,40,000 per year",
        established: "2009",
      },
      {
        name: "Master of Catering Technology",
        duration: "2 Years",
        fee: "₹2,60,000 per year",
        established: "2010",
      },
      {
        name: "Master of Event Management",
        duration: "2 Years",
        fee: "₹2,30,000 per year",
        established: "2011",
      },
      {
        name: "Master of Travel and Tourism",
        duration: "2 Years",
        fee: "₹2,20,000 per year",
        established: "2012",
      },
    ],
  },
];

const PostgraduateCourses = () => {
  const [openCategory, setOpenCategory] = useState(null);
  const [openCourses, setOpenCourses] = useState({});

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
    setOpenCourses((prev) => ({ ...prev, [category]: null }));
  };

  const toggleCourse = (category, course) => {
    setOpenCourses((prev) => ({
      ...prev,
      [category]: prev[category] === course ? null : course,
    }));
  };
  return (
    <>
      <Hero
        bannerHead="Advanced, Research, Innovation"
        bannerDecs="Postgraduate studies foster advanced learning, research, and professional development."
        bannerImg={img}
        bannerbtn="Discover more"
      />
      <div className="bg-gray-100 p-10 min-h-screen mt-24 md:mb-20 mb-20">
        <h2 className="lg:text-4xl lg:text-left text-center text-2xl font-semibold mb-10 text-navcolor lg:ml-24">
          Postgraduate Courses
        </h2>

        <div className="max-w-6xl space-y-2 grid grid-cols-1 gap-8">
          {postgraduateCourses.map((category, index) => (
            <div
              key={index}
              className="w-[85vw] lg:w-[70vw] bg-white rounded-lg shadow-lg overflow-hidden mx-auto"
            >
              <img
                src={category.image}
                alt={category.category}
                className="w-full h-[300px] lg:h-[250px] object-cover"
              />
              <div
                className="flex justify-between items-center p-4 cursor-pointer bg-navcolor text-white"
                onClick={() => toggleCategory(category.category)}
              >
                <h3 className="text-xl font-semibold">{category.category}</h3>
                {openCategory === category.category ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </div>

              {openCategory === category.category && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-4 space-y-2"
                >
                  {category.courses.map((course, i) => (
                    <div key={i} className="border-b py-2">
                      <div
                        className="flex justify-between items-center cursor-pointer text-lg font-semibold text-navcolor hover:underline"
                        onClick={() =>
                          toggleCourse(category.category, course.name)
                        }
                      >
                        {course.name}
                        {openCourses[category.category] === course.name ? (
                          <FaChevronUp />
                        ) : (
                          <FaChevronDown />
                        )}
                      </div>
                      {openCourses[category.category] === course.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-2 text-gray-700"
                        >
                          <p>
                            <strong>Duration:</strong> {course.duration}
                          </p>
                          <p>
                            <strong>Fee:</strong> {course.fee}
                          </p>
                          <p>
                            <strong>Established:</strong> {course.established}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PostgraduateCourses;
