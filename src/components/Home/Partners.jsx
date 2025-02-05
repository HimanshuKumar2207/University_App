import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import img1 from "../../assets/partener1.png";
import img2 from "../../assets/partener2.jpg";
import img3 from "../../assets/partener3.jpg";
import img4 from "../../assets/partener4.png";
import img5 from "../../assets/partener5.jpg";
import img6 from "../../assets/partener6.jpeg";
import img7 from "../../assets/partener7.png";
import img8 from "../../assets/partener8.png";

// Updated partners array with correct image references
const partners = [
  { id: 1, img: img1 },
  { id: 2, img: img2 },
  { id: 3, img: img3 },
  { id: 4, img: img4 },
  { id: 5, img: img5 },
  { id: 6, img: img6 },
  { id: 7, img: img7 },
  { id: 8, img: img8 },
];

const Partners = () => {
  return (
    <>
      <div className="mt-24 mb-[130px]">
        <div className="flex flex-col justify-center items-center  ">
          <p className="h-1 bg-navcolor w-[60px] lg:w-[150px] md:w-[120px] my-2"></p>
          <h2 className="text-3xl md:text-5xl mb-5 font-semibold ">Our Partners</h2>
          <div className="">
            <p className="text-md text-gray-800 text-center px-8 mb-6">
              Enseignement Middle School prides itself on fostering strong
              partnerships with leading organizations, institutions, and
              industry experts. Our collaborations—whether in{" "}
              <br className="hidden lg:bock" />
              the form of technology providers, academic allies, or community
              partners—are vital to enhancing the learning experience for our
              students.
            </p>
          </div>
        </div>

        {/* slider */}
        <div className="w-full ">
          <Swiper
            slidesPerView={5}
            spaceBetween={1}
            autoplay={{ delay: 2000 }}
            loop={true}
            modules={[Autoplay]}
            className="w-[80%] mx-auto"
            breakpoints={{
              300: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1200: { slidesPerView: 5 },
            }}
          >
            {partners.map((partner) => (
              <SwiperSlide key={partner.id} className="flex justify-center">
                <img
                  src={partner.img}
                  alt={`Partner ${partner.id}`}
                  className="w-28 h-24 md:w-36 md:h-36 object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Partners;
