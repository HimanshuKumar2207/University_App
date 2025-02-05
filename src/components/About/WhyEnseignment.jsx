import React from "react";

const WhyEnseignment = () => {
  
  const CardsDecs = [
    {
      title: "Experienced and Caring Faculty",
      description:
        "Our professors are not only experts in their respective fields, but they are passionate about teaching and committed to nurturing the talents of every student.",
    },
    {
      title: "Holistic Development Approach",
      description:
        "We focus on the overall development of our students, including their emotional, social, and intellectual growth, preparing them for challenges both inside and outside the classroom.",
    },
    {
      title: "Cutting-edge Facilities",
      description:
        "Our school boasts modern classrooms, a fully equipped library, science labs, sports facilities, and more, ensuring an engaging and interactive learning experience.",
    },
    {
      title: "Diverse and Inclusive Environment",
      description:
        "We celebrate diversity and create an inclusive environment where every student’s voice is heard and valued, ensuring they feel comfortable to express themselves and grow as individuals.",
    },
    {
      title: "Academic Excellence",
      description:
        "Enseignment Middle School has a proud tradition of high academic standards. Our students regularly excel in national and international exams, earning scholarships and awards.",
    },
    {
      title: "Focus on STEM and Arts",
      description:
        "We offer specialized programs in STEM (Science, Technology, Engineering, and Mathematics) and the arts, ensuring that every student’s passion is nurtured and given the attention it deserves.",
    },
  ];

  return (
    <div className="bg-gray-100 py-20 px-8 mt-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="sm:text-4xl text-xl font-bold text-black mb-6">
          Why Enseignment Middle School is the Best Choice for Students
        </h2>

        {/* Section Description */}
        <p className="sm:text-lg text-md text-gray-700 mb-6">
          At Enseignment Middle School, we strive to create an environment that
          fosters both academic excellence and personal growth. Our dedicated
          educators and state-of-the-art facilities are tailored to ensure every
          student is given the opportunity to succeed and thrive.
        </p>

        {/* Key Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {CardsDecs.map((point, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-navcolor mb-3">
                {point.title}
              </h3>
              <p className="text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyEnseignment;
