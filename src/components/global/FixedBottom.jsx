import React, { useState } from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const FixedBottom = () => {
  const [activeTab, setActiveTab] = useState("call");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleCallClick = () => {
    window.location.href = "tel:917479867857";
  };

  const handleWhatsAppClick = () => {
    const phone = "917479867857";
    const message = `Let's Connect with me`;
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`
    );
  };

  return (
    <div className="w-full fixed bottom-20 left-0 flex flex-col gap-5 px-7 z-10 hidden lg:block ">
      <div className="flex flex-col items-start gap-10">
        {/* Call Button */}
        <button
          className={`flex items-center justify-center bg-blue-600 text-white gap-3 py-1 px-1 rounded-full hover:bg-blue-700 transition-all duration-200 ml-1 ${
            activeTab === "call" ? "ring-4 ring-blue-500" : ""
          }`}
          onClick={() => {
            handleTabClick("call");
            handleCallClick();
          }}
        >
          <FaPhoneAlt className="text-xl" />
        </button>

        {/* WhatsApp Button */}
        <button
          className={`flex items-center justify-center bg-green-600 text-white gap-3 py-1 px-1 rounded-full hover:bg-green-700 transition-all duration-200 ${
            activeTab === "whatsapp" ? "ring-4 ring-green-500" : ""
          }`}
          onClick={() => {
            handleTabClick("whatsapp");
            handleWhatsAppClick();
          }}
        >
          <FaWhatsapp className="text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default FixedBottom;
