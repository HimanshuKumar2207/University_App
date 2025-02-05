import React from "react";
import img from "../../assets/aboutTeaching.jpg";

const Teaching = () => {
  return (
    <>
      <div className="md:hidden lg:block">
        <div className="mt-24 bg-white flex flex-col lg:flex-row md:flex-row justify-around p-6 sm:p-10 gap-14 lg:mb-10 ">
          {/* Image Section */}
          <div className="w-full sm:w-[90%] md:w-1/2 lg:w-1/2 mx-auto">
            <div className="relative group w-full h-auto rounded-lg overflow-hidden shadow-lg">
              <img
                src={img}
                alt="Image"
                className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[400px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-90"
                height="200"
                width="700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300 ease-in-out"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <h3 className="text-xl font-semibold">Explore the Vision</h3>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full sm:w-[90%] md:w-1/2 lg:w-1/2 mx-auto">
            <h1 className="sm:text-5xl text-3xl font-semibold mb-5">
              A Comprehensive Teaching Approach
            </h1>
            <p className="mb-5">
              Recognizing that students have different learning needs, a
              comprehensive teaching approach uses differentiated instruction.
              This involves tailoring lessons, assignments, and assessments
              based on the individual strengths and weaknesses of each student.
            </p>
            <p className="mb-5">
              A Comprehensive Teaching Approach refers to an educational
              strategy that integrates multiple methods, tools, and techniques
              to address the diverse learning needs of students. It aims to
              create an inclusive, engaging, and effective learning environment
              where all students can succeed.
            </p>
            <p className="mb-5">
              Ensuring that the classroom is welcoming and accessible to all
              students, regardless of their cultural, linguistic, or physical
              backgrounds. This includes accommodating students with
              disabilities and promoting equity in learning opportunities.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teaching;
