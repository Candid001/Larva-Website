import React from "react";
import Pic1 from "@assets/image 55.svg";
import Pic2 from "@assets/techspot_logo.svg.svg";
import Pic3 from "@assets/taboola_logo.svg.svg";
import Pic4 from "@assets/uipath_logo.svg.svg";
import Pic5 from "@assets/tech_mahindra_logo.svg.svg";
import Pic6 from "@assets/techcombank_logo.svg.svg";
import Frame from "@assets/Frame 1000008413.svg";
import FrameShadow from "@assets/Ellipse 13.svg";
import Cone from "@assets/image 67.svg";

const Hero = () => {
  return (
    <section className="bg-[#F3F3F3] w-full py-5 md:py-16 flex flex-col gap-12 md:gap-12 overflow-hidden relative lg:py-10 lg:gap-16">
      <div className="bg-[#7A5DA821] rounded-full h-15 w-15 absolute my-18 -mx-4 md:h-25 md:w-25 lg:h-35 lg:w-35 lg:my-20 lg:-mx-6"></div>
      <img
        src={Cone}
        alt="Cone"
        className="absolute right-0 h-40 sm:h-20 md:h-60 lg:h-80 opacity-70 my-47 lg:my-57"
      />

      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 gap-8 md:gap-0 relative">
        {/* Text Content */}
        <div className="flex flex-col gap-4 text-center md:text-left max-w-lg md:w-1/2">
          <p className="text-sm sm:text-base bg-gradient-to-b from-[#7A5DA8] to-[#F39821] bg-clip-text text-transparent font-medium">
            Perfect Place to Begin or Grow Your Tech Career
          </p>

          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-3xl sm:text-3xl lg:text-5xl leading-tight">
              Your Gateway to the
            </h1>

            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="relative inline-block">
                <img
                  src={Pic1}
                  alt="Tech background"
                  className="w-[100px] sm:w-[120px]"
                />
                <span className="absolute top-4 left-6 sm:left-8 text-3xl sm:text-4xl font-bold bg-gradient-to-b from-[#7A5DA8] to-[#F39821] bg-clip-text text-transparent">
                  Tech
                </span>
              </div>
              <p className="font-bold text-3xl sm:text-4xl lg:text-5xl">
                World
              </p>
            </div>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-[#3D3D3D] px-4 md:px-0">
            News, reviews, tutorials, and more. Elevate your tech knowledge
            today.
          </p>

          <button className="bg-gradient-to-r from-[#7A5DA8] to-[#F39821] text-white px-6 py-2 sm:py-3 rounded-md w-fit mx-auto md:mx-0 mt-3 font-semibold hover:opacity-90 transition-all">
            Join now
          </button>
        </div>

        {/* Hero Image Section */}
        <div className="hidden md:flex md:w-1/2 justify-center items-center relative">
          {/* Shadow behind the Frame */}
          <img
            src={FrameShadow}
            alt="shadow effect"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] lg:w-[90%] opacity-70 z-0"
          />
          {/* Main Frame */}
          <img
            src={Frame}
            alt="Hero illustration"
            className="relative w-[90%] lg:w-[100%] max-w-[600px] z-10"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="bg-gradient-to-r from-[#7A5DA8] to-[#F39821] h-[2px] w-[90%] mx-5 md:mx-12"></div>

      {/* Partners Section */}
      <div className="flex flex-col md:px-12 md:flex-row items-center justify-center gap-4 px-5 md:w-screen lg:w-screen">
        <p className="font-semibold text-sm sm:text-base md:text-lg text-[#3D3D3D]">
          Our partners
        </p>

        <div className="overflow-hidden w-full md:w-2/3 pt-1 lg:w-280">
          <div className="flex gap-8 w-max animate-scroll items-center">
            <img src={Pic2} alt="Logo" className="w-20 sm:w-24 md:w-28" />
            <img src={Pic3} alt="Logo" className="w-20 sm:w-24 md:w-28" />
            <img src={Pic4} alt="Logo" className="w-20 sm:w-24 md:w-28" />
            <img src={Pic5} alt="Logo" className="w-20 sm:w-24 md:w-28" />
            <img src={Pic6} alt="Logo" className="w-20 sm:w-24 md:w-28" />
            {/* duplicate for smooth scroll */}
            <img src={Pic2} alt="Logo" className="w-20 sm:w-24 md:w-28" />
            <img src={Pic3} alt="Logo" className="w-20 sm:w-24 md:w-28" />
            <img src={Pic4} alt="Logo" className="w-20 sm:w-24 md:w-28" />
            <img src={Pic5} alt="Logo" className="w-20 sm:w-24 md:w-28" />
            <img src={Pic6} alt="Logo" className="w-20 sm:w-24 md:w-28" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
