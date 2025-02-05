import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import img from "../../assets/Campus_banner.jpg";

import p1 from "../../assets/p1.jpg";
import p2 from "../../assets/p2.jpg";
import p7 from "../../assets/p7.jpg";
import p4 from "../../assets/p4.jpg";
import p5 from "../../assets/p5.jpg";
import p6 from "../../assets/p6.jpg";

import E1 from "../../assets/Event1.png";
import E2 from "../../assets/Event2.jpeg";
import E3 from "../../assets/Event3.jpeg";
import E4 from "../../assets/Event4.jpg";
import E5 from "../../assets/Event5.jpeg";
import E6 from "../../assets/Event6.jpg";

import fest1 from "../../assets/fest1.jpeg";
import fest2 from "../../assets/fest2.jpeg";
import fest3 from "../../assets/fest3.jpg";
import fest4 from "../../assets/fest4.jpeg";
import fest5 from "../../assets/fest5.jpeg";
import fest6 from "../../assets/fest6.jpg";
import fest7 from "../../assets/fest7.jpg";

import fun1 from "../../assets/fun1.jpg";
import fun2 from "../../assets/fun2.jpg";
import fun3 from "../../assets/fun3.jpeg";
import fun4 from "../../assets/fun4.jpg";
import fun5 from "../../assets/fun5.jpeg";
import fun6 from "../../assets/fun6.jpeg";
import Hero from "../Home/Hero";

const getCategoryImages = (category) => {
  const images = {
    "College Farewell and Events": [p1, p2, p7, p4, p5, p6],
    "College Functions": [fun1, fun2, fun3, fun4, fun5, fun6],
    Fests: [fest1, fest2, fest3, fest4, fest5, fest6, fest7],
    Events: [E1, E2, E3, E4, E5, E6],
  };
  return images[category] || [];
};

const Category = ({ category, images, isOpen, onToggle }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <div
      className="flex justify-between items-center p-4 cursor-pointer bg-navcolor text-white"
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-controls={category}
    >
      <h3 className="text-xl font-semibold">{category}</h3>
      {isOpen ? <FaChevronUp /> : <FaChevronDown />}
    </div>

    {isOpen && (
      <div
        className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        id={category}
      >
        {images.map((image, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-md">
            <img
              src={image}
              alt={`${category} ${index + 1}`}
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>
    )}
  </div>
);

const Photo = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const galleryData = [
    "College Farewell and Events",
    "College Functions",
    "Fests",
    "Events",
  ];

  return (
    <>
      <Hero
        bannerHead="Memories, Moments, Unforgettable"
        bannerDecs="Unforgettable memories, shared moments, and friendships that last forever."
        bannerImg={img}
        bannerbtn="Discover more"
      />

      <div className="bg-gray-100 px-6 md:px-10 py-12 min-h-screen mt-24">
        <h2 className="text-xl lg:text-4xl sm:text-3xl font-semibold mb-10 text-navcolor text-center">
          Enseignement Middle School Photo Gallery
        </h2>

        <div className="max-w-6xl mx-auto space-y-8">
          {galleryData.map((category) => {
            const images = getCategoryImages(category);
            return (
              <Category
                key={category}
                category={category}
                images={images}
                isOpen={openCategory === category}
                onToggle={() => toggleCategory(category)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Photo;
