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
    <div className="w-full fixed bottom-0 left-0 right-0 bg-navcolor h-[70px] z-10 ">
      <div className="flex sm:flex-row gap-5 justify-around items-center">
        {/* Call Button */}
        <button
          className={`flex items-center text-white gap-1 p-3 rounded-lg transition-all duration-200 ${
            activeTab === "call" ? "" : ""
          }`}
          onClick={() => {
            handleTabClick("call");
            handleCallClick();
          }}
        >
          <FaPhoneAlt className="text-2xl sm:text-2xl md:text-3xl " />
          <div>
            <span className="text-xl lg:text-xl sm:text-base font-medium mr-20">
              Call
            </span>
            <h1 className="text-sm mr-3">+91 7479867857</h1>
          </div>
        </button>

        {/* WhatsApp Button */}
        <button
          className={`flex items-center gap-2 p-3 rounded-lg text-green-600 transition-all duration-200 ${
            activeTab === "whatsapp" ? "" : ""
          }`}
          onClick={() => {
            handleTabClick("whatsapp");
            handleWhatsAppClick();
          }}
        >
          <FaWhatsapp className="text-2xl sm:text-2xl md:text-3xl " />
          <div>
            <span className="text-xl sm:text-base font-medium lg:text-xl mr-20">
              WhatsApp
            </span>
            <h1 className="text-sm mr-5">Chat with Representative</h1>
          </div>
        </button>
      </div>
    </div>
  );
};

export default FixedBottom;
