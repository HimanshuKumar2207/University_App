import React, { useState } from "react";
import img from "../../assets/aboutExcellence.jpg";

const Establish = () => {
  const [showFullText, setShowFullText] = useState(false);

  const handleReadMore = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="mt-20 flex flex-col lg:flex-row md:flex-col items-center justify-center w-[90%] mx-auto">
      {/* Text Section */}
      <div className="w-[90%] md:text-left md:ml-10 sm:mr-10">
        <h2 className="md:text-4xl text-2xl font-semibold leading-tight">
          Enseignment Middle School: A Legacy of Excellence Since 1960
        </h2>

        <p className="mt-7 text-gray-800 leading-relaxed">
          Established in 1960, Enseignment Middle School has been a cornerstone
          of quality education, shaping young minds with a commitment to
          academic excellence, character development, and community engagement.
          With over six decades of experience, the school has continually
          evolved to meet the changing needs of education while preserving its
          core values of integrity, discipline, and innovation.
        </p>

        {/* Show full text on medium screens and below */}
        <div
          className={`${showFullText ? "block" : "hidden"} lg:block`}
        >
          <p className="mt-5 text-gray-800 leading-relaxed">
            At Enseignment Middle School, students receive a well-rounded
            education that balances rigorous academics with extracurricular
            activities, ensuring holistic growth. Our dedicated faculty fosters
            a supportive learning environment, encouraging critical thinking,
            creativity, and leadership skills. The school emphasizes
            personalized learning, helping each student unlock their full
            potential.
          </p>

          <p className="mt-5 text-gray-800 leading-relaxed">
            Beyond academics, Enseignment Middle School promotes a vibrant
            community where students engage in sports, arts, and social
            initiatives, preparing them to be responsible global citizens. With
            modern facilities, state-of-the-art classrooms, and a strong
            emphasis on technology, the school blends tradition with innovation
            to provide the best learning experience.
          </p>
        </div>

        {/* Show Read More link only on small and medium screens */}
        <p
          className="mt-5 text-navcolor cursor-pointer hover:underline md:block lg:hidden"
          onClick={handleReadMore}
        >
          {showFullText ? "Read Less" : "Read More"}
        </p>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 md:w-full w-full h-[420px] sm:w-[660px] lg:h-[500px] sm:h-[350px] mt-10 sm:mt-6 flex justify-center">
        <div className="relative group w-full md:w-[90%] h-auto rounded-lg overflow-hidden shadow-lg lg:mr-20">
          <img
            src={img}
            alt="School Legacy"
            className="w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-90 md:h-[400px] lg:h-[500px] h-[420px] "
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300 ease-in-out"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <h3 className="text-xl font-semibold">Explore Our Legacy</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Establish;
