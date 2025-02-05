import React from "react";
import { IoMdStar } from "react-icons/io";
import Hero from "../Home/Hero";
import img from "../../assets/Academics_banner.jpg";

const Feedback = () => {
  const obtainingFeedback = [
    "Feedback on the course from students and faculty members is obtained at the end of each semester through the in-house portal Enseignment. Additionally, feedback is obtained from students on the course (as part of the indirect course outcome assessment), quality circle meetings, and the outgoing student survey.",
    "Feedback from other stakeholders such as employers, alumni, and parents is obtained once a year. From the employer, the feedback is obtained during the placement drives by the Office of Placement and Training and also by faculty members when they visit industries.",
    "Feedback from alumni is obtained during the global alumni meet or during the meeting with local chapters. It is also collected during official visits to the Institution.",
    "These structured feedback forms are available on the Enseignment website. In addition to these structured feedbacks, feedback on curriculum and course is obtained from visiting faculty members and industry personnel during their visits to the Institution.",
  ];

  const utilisationFeedback = [
    "The analysed feedback is discussed in faculty meetings of the school. All faculty members are involved in identifying areas of improvement. The Head of the Department chairs the initial discussion sessions with faculty members.",
    "Points of concern are then discussed in the Dean–Head of the Department meetings. Suitable changes in the curriculum or course content are made with the involvement of the Head of the Department (for curriculum) or course committee (for courses).",
    "The proposed changes are discussed at the Board of Studies meeting, involving faculty members from different cadres and external experts from industry and academia.",
    "After due deliberations, changes that will contribute to the quality of the curriculum and course are accepted and recommended by the Board of Studies.",
  ];

  const analysisFeedback = [
    "The structured feedback obtained from different stakeholders is represented on a 5-point scale. Areas of improvement (those metrics that receive feedback of 3.0 and below on a 5-point scale) are identified by the respective departments.",
    "Due consideration is also given to the qualitative statements that are stated in these structured feedback forms.",
  ];

  return (
    <>
      <Hero
        bannerHead="Enseignment Feedback"
        bannerDecs="Your feedback helps us improve and enhance the learning experience."
        bannerImg={img}
        bannerbtn="Discover more"
      />
      <div className="bg-gray-100 p-6 sm:p-10 mt-6 lg:mb-20">
        <div className="container mx-auto">
          {/* Title Section */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-10 text-center lg:text-left lg:ml-6 ">
            Feedback Process
          </h2>

          {/* Obtaining Feedback Section */}
          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 lg:ml-6">
              Obtaining Feedback
            </h3>
            <div className="space-y-4">
              {obtainingFeedback.map((point, index) => (
                <p
                  key={index}
                  className="text-lg text-gray-800 flex items-start sm:px-6"
                >
                  {point}
                </p>
              ))}
            </div>
          </section>

          {/* Utilisation of Feedback Section */}
          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 lg:ml-6">
              Utilisation of Feedback for Curriculum/Course Development
            </h3>
            <div className="space-y-4">
              {utilisationFeedback.map((point, index) => (
                <p
                  key={index}
                  className="text-lg text-gray-700 flex items-start sm:px-6"
                >
                  {point}
                </p>
              ))}
            </div>
          </section>

          {/* Analysis of Feedback Section */}
          <section>
            <h3 className="text-2xl font-semibold mb-4 lg:ml-6">
              Analysis of the Feedback Obtained
            </h3>
            <div className="space-y-4">
              {analysisFeedback.map((point, index) => (
                <p
                  key={index}
                  className="text-lg text-gray-700 flex items-start sm:px-6"
                >
                  {point}
                </p>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Feedback;
