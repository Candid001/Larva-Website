import React from "react";
import AniAbout from "@assets/image 72.svg";
import Instagram from "@assets/Vector (2).svg";
import X from "@assets/twitter-x-fill.svg";
import Facebook from "@assets/facebook-circle-fill.svg";
import Linkdin from "@assets/linkedin-box-line.svg";

const AboutUs = () => {
  return (
    <>
      <div className="flex gap-2 h-fit w-fit overflow-hidden mx-5 md:mx-10 my-5 lg:mx-15 lg:flex lg:gap-6">
        <div className="relative h-100 w-85 hidden md:flex lg:w-[610px] lg:h-[610px]">
          <div className="bg-[#F39821] h-40 w-40 absolute right-10 top-10 rounded-2xl z-10 lg:h-[233px] lg:w-[228px] lg:top-[102px] lg:left-[330px]"></div>
          <div className="bg-[#7A5DA8] absolute h-50 w-50 right-0 bottom-0 rounded-2xl z-10 md:top-30 lg:w-[400px] lg:h-[354px] lg:top-[256px] lg:left-[210px]"></div>
          <img
            src={AniAbout}
            alt="Image"
            className="absolute z-40 h-70 w-70 rounded-3xl lg:w-[505px] lg:h-[542px]"
          />
          <div className="absolute z-50 bg-[#F39821] h-20 w-45 rounded-2xl bottom-18 right-5 text-center content-center md:bottom-35 lg:h-[138px] lg:p-6 flex flex-col align-middle lg:w-[310px] lg:top-[347px] lg:left-[270px]">
            <h2 className="font-semibold text-lg lg:text-2xl">Follow Us</h2>
            <div className="flex gap-2 justify-center">
              <img src={Instagram} alt="Instagram" className="lg:h-10 lg:w-auto"/>
              <img src={X} alt="Twitter" className="lg:h-10 lg:w-auto"/>
              <img src={Facebook} alt="Facebook" className="lg:h-10 lg:w-auto"/>
              <img src={Linkdin} alt="Linkdin" className="lg:h-10 lg:w-auto"/>
            </div>
          </div>
        </div>

        <div className="h-fit w-85 flex flex-col gap-8 lg:gap-[32px] lg:w-[600px] lg:h-[535px]">
          <h2 className="font-semibold text-3xl lg:font-bold lg:text-4xl">
            About <span className="text-[#F39821]">Us</span>
          </h2>
          <h1 className="font-bold text-3xl lg:font-bold lg:text-6xl">
            We’re proud to offer top-quality training
          </h1>
          <div className="bg-gradient-to-r from-[#F39821] to-[#8D5813] h-[4px] w-[120px] lg:w-[190px]"></div>
          <p className="text-[#6D6D6D]">
            Our trainers are present full-time in our school with a cumulative
            experience of over 25 years in website design and software
            programming. They are professional developers who want to pass on
            their knowledge and passion for programming to our students. Our
            certificate is accredited by the Ministry of Education, Abuja,
            Nigeria and also the Skills Development Council of Canada.{" "}
          </p>
          <button className="text-white bg-gradient-to-b from-[#7A5DA8] to-[#F39821] p-4 w-fit h-auto rounded-2xl">Read More</button>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
