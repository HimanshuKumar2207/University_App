import React from "react";
import img from "../../assets/Campus_banner.jpg";
import Hero from "../Home/Hero";
import Cam1 from "../../assets/campus1.jpg";
import Cam2 from "../../assets/campus2.jpg";
import Cam3 from "../../assets/campus3.jpg";
import Cam4 from "../../assets/campus4.jpg";
import Cam5 from "../../assets/campus5.jpg";
import Cam6 from "../../assets/campus6.jpg";
import Cam7 from "../../assets/campus7.jpg";
import Cam8 from "../../assets/campus8.jpg";
import Cam9 from "../../assets/campus9.jpg";
import Cam10 from "../../assets/campus10.jpg";
import Cam11 from "../../assets/campus11.jpg";
import Cam12 from "../../assets/campus12.jpg";
import Cam13 from "../../assets/campus13.jpg";
import Cam14 from "../../assets/campus14.jpg";
import Cam15 from "../../assets/campus15.jpg";
import Cam16 from "../../assets/campus16.jpg";
import Cam17 from "../../assets/campus17.jpg";
import Cam18 from "../../assets/campus18.jpg";
import Cam19 from "../../assets/campus19.jpg";
import Cam20 from "../../assets/campus20.jpg";

const campusImages = [
  Cam1,
  Cam2,
  Cam3,
  Cam4,
  Cam5,
  Cam6,
  Cam7,
  Cam8,
  Cam9,
  Cam10,
  Cam11,
  Cam12,
  Cam13,
  Cam14,
  Cam15,
  Cam16,
  Cam17,
  Cam18,
  Cam19,
  Cam20,
];

const CampusGallery = () => {
  return (
    <>
      <Hero
        bannerHead="Snapshots, Campuscape, Vibrance"
        bannerDecs="Campus moments captured, memories made, and stories told in every shot."
        bannerImg={img}
        bannerbtn="Discover more"
      />

      <div className="bg-gray-100 py-10 px-6 sm:px-10 min-h-screen mt-20 mb-20 ">
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-semibold mb-16 text-center text-navcolor">
          College Campus Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {campusImages.map((image, index) => (
            <div
              key={index}
              className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={image}
                alt={`Campus ${index + 1}`}
                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                srcSet={`${image}?w=300 300w, ${image}?w=600 600w, ${image}?w=1200 1200w`}
                sizes="(max-width: 640px) 300px, (max-width: 768px) 600px, 1200px"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-200"></div>
              <div className="absolute bottom-4 left-5 text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Campus view
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CampusGallery;
