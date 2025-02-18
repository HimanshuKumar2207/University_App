import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaBookReader,
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaGithubSquare,
  FaPhoneAlt,
  FaAddressBook,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }, []);

  return (
    <footer className="bg-gray-800 text-white py-24">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-24 sm:gap-y-10 gap-10 sm:px-10">
          {/* Logo Section */}
          <div className="flex flex-col items-center sm:items-start">
            <Link
              to="/home"
              onClick={handleScrollToTop}
              className="flex items-center"
            >
              <FaBookReader className="text-5xl text-blue-500" />
              <div className="pl-3">
                <h2 className="text-2xl font-bold text-blue-500">
                  Enseignment
                </h2>
                <p className="text-sm text-gray-100 font-semibold">
                  Middle School
                </p>
              </div>
            </Link>
          </div>

          {/* Quick Navigation Section */}
          <div className="text-center sm:text-left">
            <h4 className="text-xl font-bold mb-4 text-blue-500">
              Quick Navigation
            </h4>
            <div className="flex sm:gap-10 sm:px-0 text-left gap-8  ">
              <div className="space-y-2 flex flex-col ">
                <Link
                  to="/home"
                  className="text-gray-100 hover:text-blue-500 transition duration-300"
                  onClick={handleScrollToTop}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-gray-100 hover:text-blue-500 transition duration-300"
                  onClick={handleScrollToTop}
                >
                  About
                </Link>
                <Link
                  to="/academics/overview"
                  className="text-gray-100 hover:text-blue-500 transition duration-300"
                  onClick={handleScrollToTop}
                >
                  Academics
                </Link>
              </div>
              <div className="space-y-2 flex flex-col">
                <Link
                  to="/admission/adoverview"
                  className="text-gray-100 hover:text-blue-500 transition duration-300"
                  onClick={handleScrollToTop}
                >
                  Admission
                </Link>
                <Link
                  to="/events"
                  className="text-gray-100 hover:text-blue-500 transition duration-300"
                  onClick={handleScrollToTop}
                >
                  Events
                </Link>
                <Link
                  to="/campus/photo"
                  className="text-gray-100 hover:text-blue-500 transition duration-300"
                  onClick={handleScrollToTop}
                >
                  Campus
                </Link>
              </div>
            </div>
          </div>

          {/* Stay Connected Section (Social Media) */}
          <div className="text-center sm:text-left">
            <h4 className="text-xl font-bold mb-4 text-blue-500">
              Stay Connected
            </h4>
            <div className="flex justify-center sm:justify-start space-x-4">
              <Link
                to="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-blue-500 transition duration-300"
              >
                <FaFacebookSquare className="h-6 w-6" />
              </Link>
              <Link
                to="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-blue-500 transition duration-300"
              >
                <FaTwitterSquare className="h-6 w-6" />
              </Link>
              <Link
                to="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-blue-500 transition duration-300"
              >
                <FaLinkedin className="h-6 w-6" />
              </Link>
              <Link
                to="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-blue-500 transition duration-300"
              >
                <FaGithubSquare className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center sm:text-left">
            <h4 className="text-xl font-bold mb-4 text-blue-500">
              Get In Touch
            </h4>
            <div className="space-y-2">
              <p className="text-gray-100 flex items-center justify-center sm:justify-start">
                <FaAddressBook className="h-5 w-5 mr-2 text-blue-500" /> Patna,
                Bihar, India
              </p>
              <p className="text-gray-100 flex items-center justify-center sm:justify-start">
                <FaPhoneAlt className="h-5 w-5 mr-2 text-blue-500" /> +91
                7479867857
              </p>
              <p className="text-gray-100 flex items-center justify-center sm:justify-start">
                <MdEmail className="h-5 w-5 mr-2 text-blue-500" />{" "}
                info@enseignment.com
              </p>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-8 border-t border-gray-700 pt-6">
          <p className="text-sm text-gray-100">
            Copyright @ 2025 All rights reserved | This website is created by{" "}
            <span className="text-blue-500 font-bold">Himanshu Keshri</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
