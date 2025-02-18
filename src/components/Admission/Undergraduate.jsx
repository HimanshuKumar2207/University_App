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

const undergraduateCourses = [
  {
    category: "Engineering & Technology",
    image: Engimg,
    courses: [
      {
        name: "Computer Science and Engineering",
        duration: "4 Years",
        fee: "₹2,50,000 per year",
        established: "1995",
      },
      {
        name: "Information Technology",
        duration: "4 Years",
        fee: "₹2,40,000 per year",
        established: "1998",
      },
      {
        name: "Mechanical Engineering",
        duration: "4 Years",
        fee: "₹2,40,000 per year",
        established: "2000",
      },
      {
        name: "Electrical Engineering",
        duration: "4 Years",
        fee: "₹2,50,000 per year",
        established: "1999",
      },
      {
        name: "Civil Engineering",
        duration: "4 Years",
        fee: "₹2,30,000 per year",
        established: "2002",
      },
    ],
  },
  {
    category: "Business & Management",
    image: BMimg,
    courses: [
      {
        name: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fee: "₹1,80,000 per year",
        established: "1997",
      },
      {
        name: "Bachelor of Business Administration in Marketing",
        duration: "3 Years",
        fee: "₹2,00,000 per year",
        established: "2001",
      },
      {
        name: "Bachelor of Business Administration in Finance",
        duration: "3 Years",
        fee: "₹1,90,000 per year",
        established: "2003",
      },
      {
        name: "Bachelor of Business Administration in HR",
        duration: "3 Years",
        fee: "₹1,85,000 per year",
        established: "2004",
      },
      {
        name: "Bachelor of Commerce (B.Com)",
        duration: "3 Years",
        fee: "₹1,50,000 per year",
        established: "2000",
      },
    ],
  },
  {
    category: "Arts & Humanities",
    image: artsImg,
    courses: [
      {
        name: "Bachelor of Arts (BA) in English",
        duration: "3 Years",
        fee: "₹1,20,000 per year",
        established: "2005",
      },
      {
        name: "Bachelor of Arts (BA) in History",
        duration: "3 Years",
        fee: "₹1,10,000 per year",
        established: "2007",
      },
      {
        name: "Bachelor of Arts (BA) in Political Science",
        duration: "3 Years",
        fee: "₹1,15,000 per year",
        established: "2006",
      },
      {
        name: "Bachelor of Arts (BA) in Sociology",
        duration: "3 Years",
        fee: "₹1,00,000 per year",
        established: "2008",
      },
      {
        name: "Bachelor of Fine Arts (BFA)",
        duration: "4 Years",
        fee: "₹1,50,000 per year",
        established: "2010",
      },
    ],
  },
  {
    category: "Medical & Health Sciences",
    image: mediImg,
    courses: [
      {
        name: "Bachelor of Medicine, Bachelor of Surgery (MBBS)",
        duration: "5 Years",
        fee: "₹8,00,000 per year",
        established: "1990",
      },
      {
        name: "Bachelor of Dental Surgery (BDS)",
        duration: "5 Years",
        fee: "₹6,00,000 per year",
        established: "1992",
      },
      {
        name: "Bachelor of Pharmacy (B.Pharm)",
        duration: "4 Years",
        fee: "₹3,50,000 per year",
        established: "2000",
      },
      {
        name: "Bachelor of Physiotherapy (BPT)",
        duration: "4 Years",
        fee: "₹3,00,000 per year",
        established: "2005",
      },
      {
        name: "Bachelor of Nursing (B.Sc Nursing)",
        duration: "4 Years",
        fee: "₹2,50,000 per year",
        established: "2010",
      },
    ],
  },
  {
    category: "Law",
    image: law,
    courses: [
      {
        name: "Bachelor of Laws (LLB)",
        duration: "3 Years",
        fee: "₹1,50,000 per year",
        established: "1997",
      },
      {
        name: "Integrated LLB (5 Years)",
        duration: "5 Years",
        fee: "₹2,00,000 per year",
        established: "2000",
      },
      {
        name: "Bachelor of Business Administration + LLB (BBA LLB)",
        duration: "5 Years",
        fee: "₹2,20,000 per year",
        established: "2003",
      },
      {
        name: "Bachelor of Arts + LLB (BA LLB)",
        duration: "5 Years",
        fee: "₹2,00,000 per year",
        established: "2004",
      },
      {
        name: "Master of Laws (LLM)",
        duration: "2 Years",
        fee: "₹1,80,000 per year",
        established: "2008",
      },
    ],
  },
  {
    category: "Social Sciences",
    image: sscImg,
    courses: [
      {
        name: "Bachelor of Psychology",
        duration: "3 Years",
        fee: "₹1,50,000 per year",
        established: "2005",
      },
      {
        name: "Bachelor of Sociology",
        duration: "3 Years",
        fee: "₹1,20,000 per year",
        established: "2007",
      },
      {
        name: "Bachelor of Social Work (BSW)",
        duration: "3 Years",
        fee: "₹1,30,000 per year",
        established: "2010",
      },
      {
        name: "Bachelor of Anthropology",
        duration: "3 Years",
        fee: "₹1,40,000 per year",
        established: "2006",
      },
      {
        name: "Bachelor of Economics",
        duration: "3 Years",
        fee: "₹1,25,000 per year",
        established: "2004",
      },
    ],
  },
  {
    category: "Design & Fashion",
    image: desImg,
    courses: [
      {
        name: "Bachelor of Fashion Design",
        duration: "4 Years",
        fee: "₹2,50,000 per year",
        established: "2005",
      },
      {
        name: "Bachelor of Interior Design",
        duration: "4 Years",
        fee: "₹2,20,000 per year",
        established: "2006",
      },
      {
        name: "Bachelor of Graphic Design",
        duration: "3 Years",
        fee: "₹2,00,000 per year",
        established: "2008",
      },
      {
        name: "Bachelor of Animation and Multimedia",
        duration: "3 Years",
        fee: "₹2,30,000 per year",
        established: "2009",
      },
      {
        name: "Bachelor of Product Design",
        duration: "4 Years",
        fee: "₹2,40,000 per year",
        established: "2010",
      },
    ],
  },
  {
    category: "Science",
    image: science,
    courses: [
      {
        name: "Bachelor of Science (B.Sc) in Physics",
        duration: "3 Years",
        fee: "₹1,00,000 per year",
        established: "2000",
      },
      {
        name: "Bachelor of Science (B.Sc) in Chemistry",
        duration: "3 Years",
        fee: "₹1,00,000 per year",
        established: "2001",
      },
      {
        name: "Bachelor of Science (B.Sc) in Biology",
        duration: "3 Years",
        fee: "₹1,10,000 per year",
        established: "2002",
      },
      {
        name: "Bachelor of Science (B.Sc) in Mathematics",
        duration: "3 Years",
        fee: "₹1,00,000 per year",
        established: "2004",
      },
      {
        name: "Bachelor of Environmental Science",
        duration: "3 Years",
        fee: "₹1,20,000 per year",
        established: "2005",
      },
    ],
  },
  {
    category: "Hospitality & Tourism",
    image: HosTourImg,
    courses: [
      {
        name: "Bachelor of Hotel Management",
        duration: "3 Years",
        fee: "₹1,80,000 per year",
        established: "2003",
      },
      {
        name: "Bachelor of Tourism Studies",
        duration: "3 Years",
        fee: "₹1,50,000 per year",
        established: "2004",
      },
      {
        name: "Bachelor of Catering Technology",
        duration: "3 Years",
        fee: "₹1,60,000 per year",
        established: "2005",
      },
      {
        name: "Bachelor of Travel and Tourism Management",
        duration: "3 Years",
        fee: "₹1,70,000 per year",
        established: "2006",
      },
      {
        name: "Bachelor of Event Management",
        duration: "3 Years",
        fee: "₹1,50,000 per year",
        established: "2007",
      },
    ],
  },
];

const UndergraduateCourses = () => {
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
        bannerHead="Explore, Learn, Succeed"
        bannerDecs="Undergraduate programs provide opportunities to explore, learn, and succeed academically"
        bannerImg={img}
        bannerbtn="Discover more"
      />

      <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-12 min-h-screen">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Undergraduate Courses
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {undergraduateCourses.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={category.image}
                    alt={category.category}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white text-center">
                      {category.category}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleCategory(category.category)}
                  >
                    <span className="text-lg font-semibold text-gray-800">
                      View Courses
                    </span>
                    {openCategory === category.category ? (
                      <FaChevronUp className="text-gray-600" />
                    ) : (
                      <FaChevronDown className="text-gray-600" />
                    )}
                  </div>

                  {openCategory === category.category && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 space-y-4"
                    >
                      {category.courses.map((course, i) => (
                        <div key={i} className="border-t pt-4">
                          <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() =>
                              toggleCourse(category.category, course.name)
                            }
                          >
                            <span className="text-md font-medium text-gray-700">
                              {course.name}
                            </span>
                            {openCourses[category.category] === course.name ? (
                              <FaChevronUp className="text-gray-600" />
                            ) : (
                              <FaChevronDown className="text-gray-600" />
                            )}
                          </div>

                          {openCourses[category.category] === course.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-2 text-gray-600"
                            >
                              <p>
                                <strong>Duration:</strong> {course.duration}
                              </p>
                              <p>
                                <strong>Fee:</strong> {course.fee}
                              </p>
                              <p>
                                <strong>Established:</strong>{" "}
                                {course.established}
                              </p>
                            </motion.div>
                          )}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UndergraduateCourses;
