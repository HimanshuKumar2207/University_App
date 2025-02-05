import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBookReader } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }, []);

  return (
    <footer className="bg-gray-100 text-gray-700 py-6 mb-20">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
        {/* Logo Section */}
        <div className="mb-4 sm:mb-0">
          <Link to="/home" onClick={handleScrollToTop}>
            <div className="logo flex items-center justify-center sm:px-4">
              <FaBookReader className="text-5xl text-navcolor" />
              <div className="pl-3">
                <h2 className="md:text-2xl text-xl text-navcolor font-semibold">
                  Enseignment
                </h2>
                <p className=" md:text-md text-sm text-gray-900 font-semibold">
                  Middle School
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Quick Navigation Section */}
        <div className="footer-nav">
          <h4 className="lg:text-2xl text-xl font-semibold mb-2 text-center text-navcolor">
            Quick Navigation
          </h4>
          <div className="flex gap-6 justify-center">
            <div>
              <ul>
                <li>
                  <Link
                    to="/home"
                    className="font-semibold text-md"
                    onClick={handleScrollToTop}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="font-semibold text-md"
                    onClick={handleScrollToTop}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/academics/overview"
                    className="font-semibold text-md"
                    onClick={handleScrollToTop}
                  >
                    Academics
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <Link
                    to="/admission/adoverview"
                    className="font-semibold text-md"
                    onClick={handleScrollToTop}
                  >
                    Admission
                  </Link>
                </li>
                <li>
                  <Link
                    to="/events"
                    className="font-semibold text-md"
                    onClick={handleScrollToTop}
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    to="/campus/photo"
                    className="font-semibold text-md"
                    onClick={handleScrollToTop}
                  >
                    Campus
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stay Connected Section (Social Media) */}
        <div className="footer-social">
          <h4 className="lg:text-2xl text-xl font-semibold mb-2 text-center text-navcolor">
            Stay Connected
          </h4>
          <div className="flex gap-6 justify-center">
            <Link
              to="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-600"
              onClick={handleScrollToTop}
            >
              <FaFacebookSquare className="h-8 w-8 text-blue-700" />
            </Link>
            <Link
              to="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400"
              onClick={handleScrollToTop}
            >
              <FaTwitterSquare className="h-8 w-8 text-blue-700" />
            </Link>
            <Link
              to="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-800"
              onClick={handleScrollToTop}
            >
              <FaLinkedin className="h-8 w-8 text-blue-700" />
            </Link>
            <Link
              to="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-800"
              onClick={handleScrollToTop}
            >
              <FaGithubSquare className="h-8 w-8 text-blue-700" />
            </Link>
          </div>
        </div>

        {/* Contact Section */}
        <div className="footer-contact">
          <h4 className="md:text-2xl text-xl font-semibold mb-2 text-center text-navcolor">
            Get In Touch
          </h4>
          <p className="font-semibold flex gap-2 items-center mb-3 justify-center">
            <FaAddressBook className="h-6 w-6 text-blue-700" /> Patna, Bihar,
            India
          </p>
          <p className="font-semibold flex gap-2 items-center mb-3 justify-center">
            <FaPhoneAlt className="h-6 w-6 text-blue-700" /> +91 7479867857
          </p>
        </div>
      </div>

      <div className="text-center mt-6">
        <p className="text-sm text-gray-700 font-semibold">
          Copyright @ 2025 All rights reserved | This website is created by
          <span className="text-navcolor font-bold ml-1">Himanshu Keshri</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
