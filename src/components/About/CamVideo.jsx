import React from "react";
import video from "../../assets/Main_video.mp4";
import background from "../../assets/CamImg.jpeg";
import { div } from "framer-motion/client";

const CamVideo = () => {
  return (
    <>
      <div className="hidden lg:block ">
        <div
          className="relative mt-20 bg-cover bg-center bg-no-repeat flex items-center justify-center py-10 "
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          {/* Main Content */}
          <div className="relative flex w-full max-w-7xl px-8">
            {/* Video Section */}
            <div className="w-1/2 flex justify-center ">
              <video
                width=""
                height="400"
                className="rounded-lg h-[530px] w-[450px]"
                controls
              >
                <source src={video} type="video/mp4" />
              </video>
            </div>

            {/* Text Section */}
            <div className="w-1/2 text-white mt-4 mr-24">
              <h2 className="text-5xl font-bold mb-5">
                Enseignment Middle School
              </h2>
              <p className="text-md text-white font-semibold leading-relaxed">
                At Enseignment Middle School, our professors are dedicated
                educators with years of experience, fostering a nurturing and
                intellectually stimulating environment. Our students are
                encouraged to think critically, embrace creativity, and develop
                leadership skills that prepare them for a bright future.
              </p>
              <p className="text-lg leading-relaxed mt-3">
                The campus boasts state-of-the-art classrooms, advanced
                laboratories, a well-stocked library, and vibrant sports and
                arts facilities, ensuring a holistic learning experience. We
                offer a diverse range of courses, from core subjects to
                specialized programs in STEM, arts, and humanities, catering to
                the individual strengths and interests of every student.
              </p>
              <p className="text-lg leading-relaxed mt-3">
                Over the years, our school has earned numerous awards,
                recognizing our excellence in academics, sports, and community
                service, further cementing our reputation as a leading
                institution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CamVideo;
