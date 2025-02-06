import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Hero from "../Home/Hero";
import img from "../../assets/Campus_banner.jpg";

const videoData = [
  {
    category: "Festivals",
    videos: [
      {
        title: "Diwali Festival Highlights",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
      {
        title: "Christmas Celebration",
        url: "https://www.youtube.com/embed/tgbNymZ7vqY",
      },
      {
        title: "School Annual Day",
        url: "https://www.youtube.com/embed/jNQXAC9IVRw",
      },
    ],
  },
  {
    category: "College Functions",
    videos: [
      {
        title: "Inauguration Ceremony",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
      {
        title: "Teachers Day Celebration",
        url: "https://www.youtube.com/embed/tgbNymZ7vqY",
      },
      {
        title: "Science Exhibition",
        url: "https://www.youtube.com/embed/jNQXAC9IVRw",
      },
    ],
  },
  {
    category: "Fests",
    videos: [
      {
        title: "Cultural Fest 2024",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
      {
        title: "Sports Fest 2023",
        url: "https://www.youtube.com/embed/tgbNymZ7vqY",
      },
      {
        title: "Music Fest Highlights",
        url: "https://www.youtube.com/embed/jNQXAC9IVRw",
      },
    ],
  },
  {
    category: "Events",
    videos: [
      {
        title: "School Annual Sports",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
      {
        title: "Inter-school Debate Competition",
        url: "https://www.youtube.com/embed/tgbNymZ7vqY",
      },
      {
        title: "Inter-school Drama Competition",
        url: "https://www.youtube.com/embed/jNQXAC9IVRw",
      },
    ],
  },
];

const Video = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <>
      <Hero
        bannerHead="Memories, Moments, Unforgettable"
        bannerDecs="Celebrating laughter, challenges, milestones – our unforgettable college story in memories."
        bannerImg={img}
        bannerbtn="Discover more"
      />
      <div className="bg-gray-100 p-10 min-h-screen mt-24 mb-20">
        <h2 className="text-xl lg:text-4xl sm:text-3xl font-semibold mb-10 text-navcolor text-center">
          Enseignement Middle School Video Gallery
        </h2>

        <div className="max-w-6xl mx-auto space-y-8">
          {videoData.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div
                className="flex justify-between items-center p-4 cursor-pointer bg-navcolor text-white"
                onClick={() => toggleCategory(category.category)}
              >
                <h3 className="text-xl font-semibold">{category.category}</h3>
                {openCategory === category.category ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </div>

              {openCategory === category.category && (
                <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {category.videos.map((video, index) => (
                    <div
                      key={index}
                      className="rounded-lg overflow-hidden shadow-md"
                    >
                      <div className="relative">
                        <iframe
                          width="100%"
                          height="200"
                          src={video.url}
                          title={video.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="rounded-lg"
                        />
                      </div>
                      <p className="text-center mt-2 font-semibold">
                        {video.title}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Video;
