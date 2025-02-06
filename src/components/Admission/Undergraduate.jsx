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

      <div className="bg-gray-100 p-10 min-h-screen mt-24 md:mb-20 mb-20">
        <h2 className="lg:text-4xl lg:text-left text-center text-2xl font-semibold mb-10 text-navcolor lg:ml-24">
          Undergraduate Courses
        </h2>

        <div className="max-w-6xl space-y-2 grid grid-cols-1  gap-8">
          {undergraduateCourses.map((category, index) => (
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

export default UndergraduateCourses;
