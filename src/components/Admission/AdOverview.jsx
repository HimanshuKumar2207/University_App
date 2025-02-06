import React from "react";
import { Link } from "react-router-dom";
import Hero from "../Home/Hero";
import video from "../../assets/Main_video.mp4";
import { GiGraduateCap } from "react-icons/gi";
import { FaUserGraduate } from "react-icons/fa";
import { SiIconfinder } from "react-icons/si";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import img from "../../assets/Admission_banner.jpg";

const contacts = [
  {
    title: "UG Programmes",
    name: "Dr. Rahul singh",
    designation: "Director - UG Admissions",
    address: "Enseignement, India",
    phone: "044-46277555",
    hours: "9 am to 5 pm; Monday - Saturday ",
  },
  {
    title: "PG Programmes",
    name: "Dr. Himanshu keshri",
    designation: "Director - PG Admissions",
    address: "Enseignement, India",
    phone: "+91-416-220 2188",
    altPhone: "+91-416-224 5544",
  },
  {
    title: "Enseignement Information Centre",
    name: "Aadilnaki Pathan",
    designation: "Enseignement Kota Representative",
    address: "Enseignement, India",
    phone: "044-46277555",
    altPhone: "+91-416-224 5544",
  },
];

const AdOverview = () => {
  return (
    <>
      <Hero
        bannerHead="Apply, Join, Succeed"
        bannerDecs="Admission opens doors to new opportunities, growth, and academic success."
        bannerImg={img}
        bannerbtn="Discover more"
      />

      <div className="mt-20 flex flex-col lg:flex-row lg:justify-evenly px-10">
        <div className="lg:w-1/2 w-full leading-relaxed">
          <p className="text-md lg:px-10 lg:ml-10 text-gray-800 mb-4 ">
            Enseignement Middle School welcomes applications from students
            entering grades 6 through 8, regardless of their background or prior
            knowledge of French or English. Our admission process involves
            completing an online application form, submitting relevant documents
            such as previous school transcripts, a recent photo, and
            standardized test results (if available). Our goal is to provide a
            nurturing, inclusive environment that allows each student to grow
            academically, socially, and culturally.
          </p>
          <p className="text-md lg:px-10 lg:ml-10 text-gray-800 mb-4 ">
            Shortlisted candidates will be invited for an interview, during
            which we assess academic potential and the ability to thrive in a
            bilingual learning environment. Depending on the grade level,
            students may also be asked to complete a brief academic assessment.
            Successful applicants will receive an acceptance letter, confirming
            their place at the school.
          </p>
          <p className="text-md lg:px-10 lg:ml-10 text-gray-800 mb-6 ">
            {" "}
            At Enseignement Middle School, we are committed to providing a
            supportive and challenging educational environment for every
            student. Our admission process is designed to identify young
            learners who are ready to thrive academically and personally in a
            dynamic, multicultural setting.
          </p>
        </div>
        <div className="lg:mr-20">
          <video
            src={video}
            className="lg:w-[300px] h-[300px] lg:mt-0 mt-8 w-[85vw] lg:h-[470px]"
            controls
          ></video>
        </div>
      </div>

      <div className="bg-navcolor w-full mt-20">
        <div className="flex flex-col sm:flex-row justify-evenly items-center p-10">
          {/* Undergraduate Section */}
          <Link to="/Admission/Undergraduate">
            <div className="bg-white p-8 sm:p-12 rounded-md cursor-pointer hover:shadow-lg transition transform hover:scale-105 mb-6 sm:mb-0">
              <GiGraduateCap className="text-6xl sm:text-8xl mx-auto mb-3" />
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 text-center">
                Undergraduate
              </h2>
            </div>
          </Link>

          {/* Graduate Section */}
          <Link to="/Admission/Postgraduate">
            <div className="bg-white p-8 sm:p-12 rounded-md cursor-pointer hover:shadow-lg transition transform hover:scale-105 mb-6 sm:mb-0">
              <FaUserGraduate className="text-6xl sm:text-8xl mx-auto mb-3" />
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 text-center">
                Post Graduate
              </h2>
            </div>
          </Link>
        </div>
      </div>

      <div className="bg-gray-100 py-12 mt-16 md:mb-20 mb-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-navcolor mb-8">
            Contact Information
          </h2>

          {/* Grid layout for different screen sizes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {contacts.map((contact, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-navcolor"
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {contact.title}
                </h3>
                <p className="text-lg text-gray-600 font-medium">
                  {contact.name}
                </p>
                <p className="text-md text-gray-500">{contact.designation}</p>
                <p className="mt-2 flex items-center text-gray-700">
                  <FaMapMarkerAlt className="mr-2 text-navcolor" />{" "}
                  {contact.address}
                </p>
                <p className="mt-2 flex items-center text-gray-700">
                  <FaPhone className="mr-2 text-navcolor" /> {contact.phone}
                </p>
                {contact.altPhone && (
                  <p className="mt-1 flex items-center text-gray-700">
                    <FaPhone className="mr-2 text-navcolor" />{" "}
                    {contact.altPhone}
                  </p>
                )}

                {contact.hours && (
                  <p className="mt-2 text-gray-500">{contact.hours}</p>
                )}
                {contact.location && (
                  <p className="mt-2">
                    <a
                      href={contact.location}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navcolor hover:underline"
                    >
                      View on Google Maps
                    </a>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdOverview;
