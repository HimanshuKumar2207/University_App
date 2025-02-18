import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBookReader, FaChevronDown } from "react-icons/fa";
import Navsmall from "./Navsmall";
// import emailjs from "@emailjs/browser";

const Pages = [
  { name: "Home", pathName: "/Home" },
  { name: "About", pathName: "/About" },
  {
    name: "Academics",
    pathName: "/Academics",
    dropdown: [
      { name: "Overview", pathName: "/Academics/Overview" },
      { name: "Academic Council", pathName: "/Academics/Council" },
      { name: "FFCS", pathName: "/Academics/FFCS" },
      { name: "Library", pathName: "/Academics/Library" },
      { name: "Feedback", pathName: "/Academics/Feedback" },
    ],
  },
  {
    name: "Admission",
    pathName: "/Admission",
    dropdown: [
      { name: "Overview", pathName: "/Admission/AdOverview" },
      { name: "Undergraduate", pathName: "/Admission/Undergraduate" },
      { name: "Postgraduate", pathName: "/Admission/Postgraduate" },
    ],
  },
  { name: "Events", pathName: "/Events" },
  {
    name: "Campus",
    pathName: "/Campus",
    dropdown: [
      { name: "Photo Gallery", pathName: "/Campus/Photo" },
      { name: "Video Gallery", pathName: "/Campus/video" },
      { name: "Campus Gallery", pathName: "/Campus/CampusGallery" },
      { name: "Hostel", pathName: "/Campus/Hostel" },
    ],
  },
];

const NavBar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    course: "",
    otherCourse: "",
    dob: "",
    gender: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const navRef = useRef(null);
  const formRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close form when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        closeForm();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Disable body scroll when form is open
  useEffect(() => {
    if (isFormOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isFormOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setFormErrors((prevState) => ({
      ...prevState,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.mobileNumber)
      errors.mobileNumber = "Mobile number is required";
    if (!formData.course) errors.course = "Course is required";
    if (!formData.dob) errors.dob = "Date of birth is required";
    if (!formData.gender) errors.gender = "Gender is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    sendEmail(e);
  };

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_k5zgpql", // Service ID
        "template_wz9yd37", // Template ID
        formRef.current,
        "rq17KEfytUz84NGBE" // User ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Application sent successfully!");
          setIsFormOpen(false);
        },
        (error) => {
          console.log(error.text);
          alert("There was an error. Please try again.");
        }
      );
  };

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <>
      {/* NavBar for Large Screens */}
      <section className="hidden lg:block md:hidden w-full fixed top-10 z-10">
        <nav
          ref={navRef}
          className="w-[85vw] mx-auto bg-gray-200 backdrop-blur-md shadow-xl flex items-center justify-between px-5 py-4 rounded-md"
        >
          {/* Logo */}
          <Link
            to="/Home"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="flex items-center">
              <FaBookReader className="text-4xl text-navcolor" />
              <div className="ml-3">
                <h2 className="text-2xl text-navcolor font-semibold">
                  Enseignement
                </h2>
                <h5 className="text-sm text-gray-900 font-semibold">
                  Middle School
                </h5>
              </div>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="flex gap-6 lg:text-lg">
            {Pages.map((page, index) => (
              <div key={index} className="relative dropdown-container">
                {/* Main Navigation Link */}
                <NavLink
                  to={page.pathName}
                  className={({ isActive }) =>
                    `text-navcolor font-semibold px-3 py-2 rounded-md flex items-center gap-1 transition-all duration-300 ${
                      isActive
                        ? "bg-navcolor text-white shadow-lg"
                        : "hover:text-navcolor"
                    }`
                  }
                  onClick={(e) => {
                    if (page.dropdown) {
                      e.preventDefault();
                      setDropdown(dropdown === page.name ? null : page.name);
                    } else {
                      setDropdown(null);
                    }
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  aria-label={`Navigate to ${page.name}`}
                  aria-expanded={dropdown === page.name}
                >
                  {page.name}{" "}
                  {page.dropdown && <FaChevronDown className="text-sm" />}
                </NavLink>

                {/* Dropdown Menu */}
                {dropdown === page.name && page.dropdown && (
                  <div className="absolute top-full left-0 mt-2 w-52 bg-white shadow-md rounded-md z-20 transition-all duration-300">
                    {page.dropdown.map((item, subIndex) => (
                      <NavLink
                        key={subIndex}
                        to={item.pathName}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-all duration-200"
                        onClick={() => setDropdown(null)}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Apply Button */}
          <button
            onClick={toggleForm}
            className="px-6 py-3 bg-navcolor text-white rounded-md hover:bg-navcolor-dark"
          >
            Apply
          </button>
        </nav>
      </section>

      {/* Application Form Pop-up */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-70 flex justify-center items-center z-20">
          <div
            ref={formRef}
            className="bg-white p-10 rounded-lg shadow-2xl max-w-[700px] w-full"
          >
            {/* Close Button */}
            <button
              onClick={closeForm}
              className="absolute top-4 right-4 text-gray-700 text-lg font-semibold"
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold text-center text-navcolor mb-6">
              Apply for Enseignement Middle School
            </h2>

            <form onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-lg font-semibold text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-1.5 border border-gray-700 rounded-md"
                />
                {formErrors.name && (
                  <p className="text-red-500 text-sm">{formErrors.name}</p>
                )}
              </div>

              {/* Email */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-lg font-semibold text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-1.5 border border-gray-700 rounded-md"
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm">{formErrors.email}</p>
                )}
              </div>

              {/* Mobile Number */}
              <div className="mb-4">
                <label
                  htmlFor="mobileNumber"
                  className="block text-lg font-semibold text-gray-700"
                >
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  required
                  className="w-full p-1.5 border border-gray-700 rounded-md"
                />
                {formErrors.mobileNumber && (
                  <p className="text-red-500 text-sm">
                    {formErrors.mobileNumber}
                  </p>
                )}
              </div>

              {/* Course Dropdown */}
              <div className="mb-4">
                <label
                  htmlFor="course"
                  className="block text-lg font-semibold text-gray-700"
                >
                  Select Course
                </label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  required
                  className="w-full p-1.5 border border-gray-700 rounded-md"
                >
                  <option value="">Select a course</option>
                  <option value="MCA">MCA</option>
                  <option value="MBA">MBA</option>
                  <option value="BBA">BBA</option>
                  <option value="BTech">BTech</option>
                  <option value="BCA">BCA</option>
                  <option value="AI">AI</option>
                  <option value="ML">ML</option>
                  <option value="PGDM">PGDM</option>
                  <option value="Other">Other</option>
                </select>
                {formErrors.course && (
                  <p className="text-red-500 text-sm">{formErrors.course}</p>
                )}
              </div>

              {/* Other Course Input */}
              {formData.course === "Other" && (
                <div className="mb-4">
                  <label
                    htmlFor="otherCourse"
                    className="block text-lg font-semibold text-gray-700"
                  >
                    Please specify the course
                  </label>
                  <input
                    type="text"
                    id="otherCourse"
                    name="otherCourse"
                    value={formData.otherCourse}
                    onChange={handleInputChange}
                    className="w-full p-1.5 border border-gray-700 rounded-md"
                  />
                </div>
              )}

              {/* Date of Birth */}
              <div className="mb-4">
                <label
                  htmlFor="dob"
                  className="block text-lg font-semibold text-gray-700"
                >
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                  required
                  className="w-full p-1.5 border border-gray-700 rounded-md"
                />
                {formErrors.dob && (
                  <p className="text-red-500 text-sm">{formErrors.dob}</p>
                )}
              </div>

              {/* Gender Field */}
              <div className="mb-4">
                <label
                  htmlFor="gender"
                  className="block text-lg font-semibold text-gray-700"
                >
                  Gender
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      onChange={handleInputChange}
                      checked={formData.gender === "Male"}
                      className="mr-2"
                    />
                    Male
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      onChange={handleInputChange}
                      checked={formData.gender === "Female"}
                      className="mr-2"
                    />
                    Female
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="Other"
                      onChange={handleInputChange}
                      checked={formData.gender === "Other"}
                      className="mr-2"
                    />
                    Other
                  </label>
                </div>
                {formErrors.gender && (
                  <p className="text-red-500 text-sm">{formErrors.gender}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-navcolor text-white rounded-md hover:bg-navcolor-dark"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Navsmall for Smaller Screens */}
      <Navsmall />
    </>
  );
};

export default NavBar;
