import React, { useEffect } from "react";
import { FaCameraRetro } from "react-icons/fa";
import { BsFillBuildingsFill } from "react-icons/bs";
import { FaPhotoVideo } from "react-icons/fa";
import { LuBuilding2 } from "react-icons/lu";
import { FaBuildingColumns } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CamTour = [
  {
    id: 1,
    icons: <FaCameraRetro />,
    name: "Photo Gallery",
    link: "../Campus/Photo",
  },
  {
    id: 2,
    icons: <BsFillBuildingsFill />,
    name: "Library",
    link: "../Academics/Library",
  },
  {
    id: 3,
    icons: <FaPhotoVideo />,
    name: "Video Gallery",
    link: "../Campus/Video",
  },
  {
    id: 4,
    icons: <LuBuilding2 />,
    name: "Hostel",
    link: "../Campus/Hostel",
  },
  {
    id: 5,
    icons: <FaBuildingColumns />,
    name: "Campus",
    link: "../Campus/CampusGallery",
  },
];

const Explore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-navcolor w-full relative p-10 mt-20 h-[200px] hidden lg:block ">
      <div className=" card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-24 text-white relative ml-10 mt-16 cursor-pointer hover:text-white ">
        {CamTour.map((item) => (
          <Link
            to={item.link}
            key={item.id}
            onClick={() => window.scrollTo(0, 0)}
            className="transform transition-all duration-500 ease-in-out hover:scale-105"
          >
            <div className="flex flex-col items-center text-center p-10 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
              <div className="text-4xl mb-2 text-navcolor transition-all duration-300 ease-in-out">
                {item.icons}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Explore;
