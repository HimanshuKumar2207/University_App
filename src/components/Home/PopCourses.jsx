import React from "react";
import img from "../../assets/img 2.jpg";
import { FaDollarSign } from "react-icons/fa6";
import img1 from "../../assets/course1.jpg";
import img2 from "../../assets/course2.jpg";
import img3 from "../../assets/course3.jpg";

const PopCourses = () => {
  const courses = [
    {
      id: 1,
      image: img2,
      title: "Mastering AI & ML",
      description:
        "AI and machine learning enable systems to learn from data and make intelligent decisions.",
      author: "John Doe",
      price: "35k",
    },
    {
      id: 2,
      image: img1,
      title: "Management",
      description:
        "An MBA is a graduate degree that enhances business, leadership, and management skills for career advancement.",
      author: "Himanshu",
      price: "29k",
    },
    {
      id: 3,
      image: img3,
      title: "Medical Program",
      description:
        "MBBS is an undergraduate medical degree that trains students to become doctors.",
      author: "Jane Smith",
      price: "40k",
    },
  ];

  return (
    <div className="mt-24 sm:mt-20">
      {/* Section Header */}
      <div className="topic flex items-center justify-around flex-col mb-5">
        <p className="h-1 bg-navcolor w-[100px] my-2"></p>
        <h2 className="md:text-5xl sm:text-4xl lg:text-5xl text-3xl font-semibold text-center">
          Popular Courses
        </h2>
      </div>

      {/* Cards Container */}
      <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center md:px-[180px] lg:px-[180px] md:mt-14 lg:mt-10 sm:px-6">
        {/* Loop through courses and render each card */}
        {courses.map((course) => (
          <div
            key={course.id}
            className="card w-[85%] sm:w-[90%] md:w-[350px] lg:w-[350px] bg-gray-100 shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out mx-auto my-5"
          >
            {/* Course Image */}
            <div className="image">
              <img
                src={course.image}
                alt="Course"
                className="w-full h-60 object-cover"
              />
            </div>

            {/* Course Description */}
            <div className="desc mt-6 px-6 text-center flex-grow">
              <h4 className="text-xl font-semibold text-black">
                {course.title}
              </h4>
              <p className="text-sm text-gray-700 font-semibold leading-snug mt-2">
                {course.description}
              </p>
            </div>

            {/* Course Footer */}
            <div className="flex justify-between items-center w-full h-20 bg-navcolor px-4 mt-6">
              <div className="flex items-center">
                <img
                  src={img}
                  alt="User"
                  className="w-12 h-12 rounded-full mr-3"
                />
                <p className="text-white font-semibold">
                  {course.author},{" "}
                  <span className="text-white font-semibold">Author</span>
                </p>
              </div>

              <div className="flex items-center border-2 border-white bg-white text-navcolor font-bold px-3 py-1 rounded-md">
                <FaDollarSign className="mr-1" />
                <p className="text-sm">{course.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopCourses;
