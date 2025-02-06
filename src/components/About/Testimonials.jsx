import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Ravi Kumar",
    role: "Parent",
    text: "Enseignment Middle School has been an amazing experience for my child. The teachers are supportive, and my child has developed both academically and socially. Highly recommend!",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Priya Sharma",
    role: "Alumni",
    text: "The education I received at Enseignment Middle School set me up for success in high school and beyond. The focus on both academics and personal growth was invaluable.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Aarav Patel",
    role: "Student",
    text: "I love the diverse environment at Enseignment. The faculty truly care about each student, and I feel challenged every day in the best way possible.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Sanjay Reddy",
    role: "Parent",
    text: "As a parent, I’m very pleased with the progress my child has made. The school provides a perfect blend of academic rigor and emotional support.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "Meera Singh",
    role: "Teacher",
    text: "Teaching at Enseignment Middle School has been a rewarding experience. The students are motivated, and the faculty works closely together to deliver the best possible education.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    name: "Arjun Verma",
    role: "Alumni",
    text: "Enseignment Middle School gave me the foundation I needed for future success. The teachers are passionate, and the environment is truly inspiring.",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    name: "Anita Joshi",
    role: "Parent",
    text: "I couldn’t be happier with the experience my child has had at Enseignment. It’s a safe, nurturing environment where they can thrive both academically and personally.",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    name: "Vikram Singh",
    role: "Student",
    text: "I’ve learned so much at Enseignment Middle School, not just about academics, but about life. It’s an amazing place to grow and develop.",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    name: "Nisha Mehta",
    role: "Teacher",
    text: "Working at Enseignment Middle School has been such a fulfilling experience. The students are eager to learn, and the environment encourages growth and creativity.",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
  },
  {
    name: "Rohit Sharma",
    role: "Parent",
    text: "Enseignment Middle School is the best decision we made for our child. The teachers are exceptional, and the extracurricular activities are outstanding!",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-section py-16 px-8 bg-gray-100 flex justify-center md:mb-20">
      <div className="max-w-6xl w-full text-center">
        <h2 className="sm:text-3xl lg:text-4xl text-2xl font-bold text-black mb-4">
          What Our Community Says
        </h2>
        <p className="sm:text-lg text-md text-gray-700 sm:mb-6">
          Hear from our students, parents, and alumni about their experiences at
          Enseignment Middle School.
        </p>
        <Swiper
          spaceBetween={40}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          speed={1500}
          pagination={{ clickable: true, dynamicBullets: true }}
          modules={[Pagination, Autoplay]}
          className="w-full"
          breakpoints={{
            300: { slidesPerView: 1 },
            500: { slidesPerView: 1 },
            768: { slidesPerView: 2 }, // For small tablets, 2 slides
            1024: { slidesPerView: 2 }, // For large screens, 3 slides
            1200: { slidesPerView: 2 }, // For even larger screens, 4 slides
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="bg-white py-8 px-8 w-[300px] sm:w-[350px] lg:w-[400px] rounded-xl shadow-lg mt-10 mx-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mx-auto mb-3"
                />
                <h3 className="text-lg font-semibold text-navcolor mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500 italic">
                  {testimonial.role}
                </p>
                <p className="text-gray-700 text-sm mt-3">{testimonial.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
