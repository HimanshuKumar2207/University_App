import { div } from "framer-motion/client";
import React from "react";

const campusData = [
  {
    id: 1,
    number: "A++",
    title: "Grade By NAAC, MHRD",
  },
  {
    id: 2,
    number: "190+",
    title: "Foreign Adjunct Professors",
  },
  {
    id: 3,
    number: "500+",
    title: "National Partners",
  },
  {
    id: 4,
    number: "372 acre",
    title: "Campus with over 62 acres",
  },
  {
    id: 5,
    number: "212th",
    title: "Rank in the world in Engineering",
  },
];

const CampusNum = () => {
  return (
    <div
      className="bg-navcolor h-[1020px] md:h-[300px] clip-path-custom mt-24 hidden lg:block lg:mb-0"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 60%, 0 100%)",
      }}
    >
      <div className="flex md:flex-row sm:flex-row lg:flex-row flex-col justify-around items-center md:py-10 py-9 px-10 text-white gap-8">
        {campusData.map((item) => (
          <div key={item.id} className="text-center md:w-1/5">
            <h2 className="text-3xl  font-semibold mb-5">{item.number}</h2>
            <h3 className="md:text-lg text-lg font-medium">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampusNum;
