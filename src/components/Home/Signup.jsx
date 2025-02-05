import React from "react";

const Signup = () => {
  return (
    <div className="md:mt-[150px] mt-10 px-4 lg:mb-20 mb-20">
      {/* Section Title */}
      <h1 className="text-navcolor sm:text-5xl text-2xl font-semibold flex justify-center uppercase text-center">
        Sign Up for School News
      </h1>

      <p className="mt-2 text-lg sm:text-2xl text-center text-gray-700">
        Stay up-to-date with the latest news
      </p>

      {/* Email Input */}
      <div className="sm:mt-12 mt-4 max-w-2xl mx-auto">
        <h3 className="sm:text-lg text-md font-semibold text-gray-800">
          Enter Your Email Here
        </h3>
        <input
          type="email"
          placeholder="example@example.com"
          className="border border-gray-400 focus:border-navcolor focus:ring-navcolor rounded-md w-full h-12 px-4 mt-2 outline-none"
        />

        <div className="flex items-center gap-3 mt-4">
          <input type="checkbox" className="w-5 h-5 " />
          <p className="text-gray-800 text-sm sm:text-lg font-semibold ">
            Yes, subscribe me to your newsletter
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
