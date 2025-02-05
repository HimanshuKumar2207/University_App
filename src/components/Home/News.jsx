import React from "react";
import { FaEye } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const newsData = [
  {
    id: 1,
    title: "Learning at Your Home Effectively",
    date: "Mar 22, 2023",
    views: 122,
    likes: 15,
  },
  {
    id: 2,
    title: "Get to Know Your Teachers and ",
    date: "Mar 22, 2023",
    views: 122,
    likes: 15,
  },
  {
    id: 3,
    title: "The New Safety Regulations",
    date: "Mar 22, 2023",
    views: 122,
    likes: 15,
  },
];

const News = () => {
  return (
    <section className="mt-20 text-center">
      {/* Section Heading */}
      <h1 className="text-5xl uppercase font-semibold">Latest News</h1>

      {/* News Cards */}
      <div className="grid md:grid-cols-3 gap-10 w-[90%] mx-auto mt-12">
        {newsData.map((news) => (
          <div
            key={news.id}
            className="bg-black text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
          >
            <p className="text-gray-400">{news.date}</p>
            <h3 className="text-3xl font-semibold mt-4 mb-6">{news.title}</h3>
            <div className="w-full h-[2px] bg-white mb-4"></div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-gray-400">
                <FaEye className="text-lg" />
                <p>{news.views}</p>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <p>{news.likes}</p>
                <CiHeart className="text-xl hover:text-red-500 cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Life & Culture Section */}
      <div className="bg-navcolor w-full pt-4 pb-16 mt-[-110px] text-white">
        <h1 className="text-5xl uppercase font-semibold mt-[150px]">
          Life & Culture
        </h1>
        <p className="text-2xl mt-3">
          Follow{" "}
          <span className="text-white font-semibold cursor-pointer">
            #enseignmentmiddleschool
          </span>{" "}
          on Instagram
        </p>

        {/* Instagram Images */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 w-[90%] mx-auto">
          {[
            "https://img.freepik.com/free-vector/vector-education-logo_779267-2079.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTbhP8mkXj61JP7oJS56yPF6xk0_wordRzbQ&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Xm_XugjE5pcaVvxKADwW-LIfQn-oY722ww&s",
            "https://img.freepik.com/free-photo/girl-sitting-table-with-notebooks-reading_23-2147657238.jpg",
            "https://img.freepik.com/free-photo/anxiety-inducing-imagery-with-angst-feelings_23-2150982143.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Pje5FY7iWv8vOpEcDhia_rVjKwiK7iIBew&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSURStpEpLVtAMonNZI8H58TFbiiG85jIhDoA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwzEWX3UzKYupl1sZdn_ATEP0CKwUBGGopVw&s",
          ].map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Instagram post ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
