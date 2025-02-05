import React from "react";
import { GiOpenBook } from "react-icons/gi";
import { IoLibrarySharp } from "react-icons/io5";
import { MdMapsHomeWork } from "react-icons/md";
import { LiaAddressCardSolid } from "react-icons/lia";

const CardsData = [
  {
    id: 1,
    icon: <GiOpenBook />,
    heading: "Academics",
    decs: "Explore diverse academic programs, courses, and research opportunities to enhance learning and career growth with expert faculty guidance.",
  },
  {
    id: 2,
    icon: <MdMapsHomeWork />,
    heading: "Centers",
    decs: "Discover research, innovation, and excellence centers fostering interdisciplinary collaboration, skill development, and real-world problem-solving initiatives.",
  },
  {
    id: 3,
    icon: <IoLibrarySharp />,
    heading: "Library",
    decs: "Access an extensive collection of books, journals, research papers, and digital resources for academic and personal knowledge enhancement.",
  },
  {
    id: 4,
    icon: <LiaAddressCardSolid />,
    heading: "FFCS",
    decs: "Customize your academic journey with a flexible credit-based curriculum, choosing courses and schedules to align with career aspirations.",
  },
];

const OverCards = () => {
  return (
    <div className="bg-gray-100 mt-20 py-20 px-10 mb-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 lg:grid-cols-4">
        {CardsData.map((data) => (
          <div
            key={data.id}
            className="bg-navcolor shadow-lg p-6 rounded-xl flex flex-col justify-center items-center text-center transition-all "
          >
            <div className="text-[80px] text-white mb-4">{data.icon}</div>
            <h2 className="text-2xl font-semibold mb-3 text-white">
              {data.heading}
            </h2>
            <p className="text-gray-200 font-semibold">{data.decs}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverCards;
