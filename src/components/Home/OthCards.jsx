import React from "react";
import { Link } from "react-router-dom";
import { IoLibraryOutline } from "react-icons/io5";

const cardData = [
  {
    id: 1,
    title: "Online Courses",
    icon: <IoLibraryOutline />,
    link: "#", // Add actual link here
  },
  {
    id: 2,
    title: "Tech Workshops",
    icon: <IoLibraryOutline />, // You can change the icon for the second card if needed
    link: "#", // Add actual link here
  },
];

const OthCards = () => {
  return (
    <div className="flex flex-wrap justify-center items-center mt-20 gap-6">
      {cardData.map((card) => (
        <div
          key={card.id}
          className="w-80 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white p-6 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out"
        >
          <div className="text-6xl text-navcolor mb-4 text-center">
            {card.icon}
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">{card.title}</h2>
            <Link to={card.link}>
              <button className="mt-4 py-2 px-6 border-2 border-white rounded-md text-white hover:bg-white hover:text-navcolor transition-all">
                View More
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OthCards;
