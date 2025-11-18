import React from "react";
import Img1 from "@assets/Group 28.svg"
import Img2 from "@assets/image 71.svg"
import Img3 from "@assets/Frame 1000008435.svg"

const HeroAb = () => {
  return (
    <>
      <div className="flex flex-col gap-8 h-fit w-auto  lg:h-fit">
        {/* First Div */}
        <div className=" flex gap-2 bg-[#F3F3F3]  px-5 py-20 md:flex md:flex-row md:justify-between lg:h-[1057px] lg:px-20">
          <div className="hidden md:flex relative lg:w-[610px]">
            <img src={Img1} alt="Image" className="h-90 w-80 z-40 lg:w-[610px] lg:h-[673px]"/>
            <img src={Img2} alt="Image" className="h-60 w-60 -left-10 top-50 absolute z-10 lg:w-[401px] lg:h-[434px] lg:top-90" />
          </div>

          <div className="h-fit w-85 flex flex-col gap-8 lg:h-fit lg:w-[610px] lg:gap-[60px]">
            <h2 className="font-semibold text-3xl lg:font-bold lg:text-4xl">
              About <span className="text-[#F39821]">Us</span>
            </h2>
            <h1 className="font-bold text-3xl lg:font-bold lg:text-6xl">
              We’re proud to offer top-quality training
            </h1>
            <div className="bg-gradient-to-r from-[#F39821] to-[#8D5813] h-[4px] w-[120px] lg:w-[190px]"></div>

            <div className="flex flex-col gap-4">
              <h3 className="font-bold">
                Experienced Trainers and Accreditation
              </h3>
              <p className="text-[#6D6D6D] text-sm">
                Our full-time trainers bring over 25 years of experience in
                website design and software programming. They are professional
                developers dedicated to passing on their knowledge. Our
                certification is accredited by both the Ministry of Education,
                Abuja, Nigeria, and the Skills Development Council of Canada,
                ensuring global recognition of your achievements.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-bold">
                Industry-Focused Curriculum and Hands-On Learning
              </h3>
              <p className="text-[#6D6D6D] text-sm">
                Larva Coding Academy offers an innovative, industry-focused
                curriculum designed to meet current standards. With expert
                instructors and a hands-on learning approach, students gain
                practical skills to excel in real-world tech challenges.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-bold">
                Innovation, Support, and Career Success
              </h3>
              <p className="text-[#6D6D6D] text-sm">
                We foster critical thinking, innovation, and problem-solving,
                preparing graduates for success. Our supportive community,
                cutting-edge resources, and career-focused environment help you
                unlock your potential and kickstart a successful career in tech.
              </p>
            </div>
          </div>
        </div>

        {/* Second Div */}
        <div className="px-5 md:flex md:flex-row md:justify-between h-fit bg-white lg:px-20 lg:h-fit">
          <div className="flex flex-col gap-8 lg:w-[530px] lg:py-20">
            <h2 className="font-bold text-3xl">
              Do You Want To <span className="text-[#F39821]">Become An Instructor?</span>
            </h2>
            <p className="text-lg text-[#6D6D6D]">We Can Do It Together</p>
            <button className="bg-gradient-to-b from-[#7A5DA8] to-[#F39821] text-white rounded-xl w-fit h-auto px-[29px] py-[14px]">Contact Us</button>
          </div>

          <div className="hidden md:flex">
            <img src={Img3} alt="Image" className="h-fit w-[500px] lg:w-[735px] lg:h-[527px]"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroAb;