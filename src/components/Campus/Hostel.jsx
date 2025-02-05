import React, { useState } from "react";
import Hero from "../Home/Hero";
import img from "../../assets/Campus_banner.jpg";

const Hostel = () => {
  const hostelData = {
    name: "The Cozy Stay",
    description:
      "Located in the heart of the city, The Cozy Stay is a home away from home for travelers and students.",
    capacity: 100,
    roomTypes: ["Dormitories", "Private Rooms"],
    amenities: [
      "Free WiFi",
      "24/7 Reception",
      "Shared Kitchen",
      "Laundry Service",
      "Common Lounge",
      "Hot Showers",
    ],
    location: {
      address: "123 Main Street, Downtown, Cityville",
      nearbyAttractions: ["City Park", "Museum of Art", "Local Markets"],
    },
    reviews: [
      {
        user: "John Doe",
        rating: 5,
        comment: "Amazing experience! Very comfortable and affordable.",
      },
      {
        user: "Sarah Lee",
        rating: 4,
        comment: "Good facilities, friendly staff, but a bit noisy at night.",
      },
      {
        user: "Michael Smith",
        rating: 3,
        comment: "Decent stay but could improve cleanliness.",
      },
    ],
  };

  const [expanded, setExpanded] = useState({
    generalInfo: false,
    amenities: false,
    location: false,
    reviews: false,
  });

  const toggleSection = (section) => {
    setExpanded((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <>
      <Hero
        bannerHead="Laughter, Late Nights, Friendship"
        bannerDecs="Within our hostel, we found joy, struggle, and growth, defining memories."
        bannerImg={img}
        bannerbtn="Discover more"
      />
      <div className="max-w-4xl mx-auto p-6 space-y-6 md:mb-20">
        {/* General Info Section */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2
            onClick={() => toggleSection("generalInfo")}
            className="text-xl lg:text-4xl sm:text-3xl font-semibold cursor-pointer text-gray-800 flex justify-between items-center"
          >
            Hostel Name: {hostelData.name}
            <span className="text-xl">{expanded.generalInfo ? "-" : "+"}</span>
          </h2>
          {expanded.generalInfo && (
            <div className="mt-4 text-gray-700">
              <p>{hostelData.description}</p>
              <p>Capacity: {hostelData.capacity} beds</p>
              <p>Room Types: {hostelData.roomTypes.join(", ")}</p>
            </div>
          )}
        </div>

        {/* Amenities Section */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2
            onClick={() => toggleSection("amenities")}
            className="text-2xl font-semibold cursor-pointer text-gray-800 flex justify-between items-center"
          >
            Amenities
            <span className="text-xl">{expanded.amenities ? "-" : "+"}</span>
          </h2>
          {expanded.amenities && (
            <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700">
              {hostelData.amenities.map((amenity, index) => (
                <li key={index}>{amenity}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Location Section */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2
            onClick={() => toggleSection("location")}
            className="text-2xl font-semibold cursor-pointer text-gray-800 flex justify-between items-center"
          >
            Location
            <span className="text-xl">{expanded.location ? "-" : "+"}</span>
          </h2>
          {expanded.location && (
            <div className="mt-4 text-gray-700">
              <p>Address: {hostelData.location.address}</p>
              <p>Nearby Attractions:</p>
              <ul className="list-disc pl-5 space-y-2">
                {hostelData.location.nearbyAttractions.map(
                  (attraction, index) => (
                    <li key={index}>{attraction}</li>
                  )
                )}
              </ul>
            </div>
          )}
        </div>

        {/* Reviews Section */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2
            onClick={() => toggleSection("reviews")}
            className="text-2xl font-semibold cursor-pointer text-gray-800 flex justify-between items-center"
          >
            Reviews
            <span className="text-xl">{expanded.reviews ? "-" : "+"}</span>
          </h2>
          {expanded.reviews && (
            <div className="mt-4 space-y-4">
              {hostelData.reviews.map((review, index) => (
                <div key={index} className="border-b pb-4">
                  <h3 className="font-semibold text-gray-800">{review.user}</h3>
                  <p className="text-gray-600">Rating: {review.rating} / 5</p>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Hostel;
