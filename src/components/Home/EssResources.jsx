import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoArrowRedoCircleOutline } from "react-icons/io5";

const resources = [
  {
    id: 1,
    title: "Library Books",
    description:
      "At Enseignement Middle School, the library offers essential resources like a wide range of books, educational journals, online databases, e-books, and multimedia tools, fostering a rich environment for research, learning, and personal growth.",
    link: "../Academics/Library",
  },
  {
    id: 2,
    title: "FFCS",
    description:
      "At Enseignement Middle School, we are proud to offer Fast Funded Cards (FFCs) as an efficient and convenient payment solution for our students. These preloaded cards allow students to make quick and smooth electronic transactions without the delays of traditional banks.",
    link: "../Academics/FFCS",
  },
  {
    id: 3,
    title: "Campus Events",
    description:
      "Enseignement Middle School hosts a variety of campus events throughout the year, offering students opportunities to participate in academic competitions, cultural celebrations, sports tournaments, and social gatherings that enhance their school experience.",
    link: "/Events",
  },
];

const EssResources = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <div className="mt-24 bg-gray-100 py-10">
      <div className="ml-[8%]">
        <div className="text-3xl text-navcolor font-bold ">
          Essential Resources
        </div>
        <p className="text-md text-gray-800 hidden sm:block md:block lg:block mt-3 ">
          Essential resources for college students include access to textbooks,
          reliable internet, study materials, <br className="hidden sm:hidden md:block lg:block"/> academic support services,
          and a conducive learning environment.
        </p>
      </div>

      <div className="mt-8 rounded-2xl flex flex-col justify-center items-center  ">
        {resources.map((resource) => (
          <div
            key={resource.id}
            className="resources1 w-[85%] border-2 border-navcolor px-5 py-6 flex flex-col md:gap-10 md:flex-row mb-5 rounded-md items-center"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-2">{resource.title}</h3>
              <p className="text-gray-800">{resource.description}</p>
            </div>
            <div className="icon Sm:mr-[565px] sm:text-5xl text-4xl mt-4">
              <Link to={resource.link} onClick={() => window.scrollTo(0, 0)}>
                <IoArrowRedoCircleOutline className="hover:text-navcolor" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EssResources;
