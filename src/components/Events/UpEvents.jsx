import React from "react";
import Event1 from "../../assets/Event1.png";
import Event2 from "../../assets/Event2.jpeg";
import Event3 from "../../assets/Event3.jpeg";
import Event4 from "../../assets/Event4.jpg";
import Event5 from "../../assets/Event5.jpeg";
import Event6 from "../../assets/Event6.jpg";

const Events = [
  {
    id: 1,
    img: Event1,
    date: "07",
    month: "January",
    head: "Student Festival",
    at: "Central Park",
    desc: "Join us for an exciting student festival featuring music, food, and fun activities!",
  },
  {
    id: 2,
    img: Event2,
    date: "15",
    month: "February",
    head: "Tech Conference",
    at: "Grand Hall",
    desc: "Explore the latest trends in technology with top industry experts.",
  },
  {
    id: 3,
    img: Event3,
    date: "25",
    month: "March",
    head: "Cultural Night",
    at: "City Square",
    desc: "Experience diverse cultures through dance, music, and cuisine.",
  },
  {
    id: 4,
    img: Event4,
    date: "10",
    month: "April",
    head: "Startup Meetup",
    at: "Innovation Hub",
    desc: "Connect with entrepreneurs and investors to share ideas and insights.",
  },
  {
    id: 5,
    img: Event5,
    date: "18",
    month: "May",
    head: "AI Workshop",
    at: "Tech Hub",
    desc: "Learn about AI & Machine Learning from industry experts.",
  },
  {
    id: 6,
    img: Event6,
    date: "30",
    month: "June",
    head: "Business Summit",
    at: "Expo Center",
    desc: "Meet business leaders and gain industry insights.",
  },
];

const UpEvents = () => {
  return (
    <div className="mt-[70px] lg:mb-10 mb-10">
      {/* Section Header */}
      <div className="flex flex-col justify-center items-center">
        <p className="h-1 bg-navcolor w-[100px] my-2"></p>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold">Upcoming Events</h2>
      </div>

      {/* Events Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] mx-auto mt-8 sm:mt-16">
        {Events.map((event) => (
          <div key={event.id} className="overflow-hidden">
            {/* Event Image */}
            <img
              src={event.img}
              alt={event.head}
              className="w-full h-56 object-cover"
            />

            {/* Event Details */}
            <div className="py-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-navcolor text-white text-center p-4 rounded-md">
                  <p className="text-2xl font-bold">{event.date}</p>
                  <p className="text-sm uppercase">{event.month}</p>
                </div>
                <h3 className="text-xl font-semibold">{event.head}</h3>
              </div>

              <p className="text-gray-800 font-semibold mb-2">
                <strong>Location:</strong> {event.at}
              </p>
              <p className="text-gray-800 font-semibold ">{event.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpEvents;
