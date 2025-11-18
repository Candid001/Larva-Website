import React from "react";
import Arrow from "@assets/arrow-down-s-line (1).svg";
import AniImg from '@assets/Frame 1000008444.svg'

const Faq = () => {
  return (
    <>
      <div className="bg-[#F3F3F3] w-full h-fit py-10 px-5 flex flex-col gap-20 md:px-10 lg:px-20">
        <div className="flex flex-col gap-2 text-center lg:gap-[20px]   ">
          <h1 className="font-bold text-2xl lg:text-4xl">
            Frequently <span className="text-[#F39821]">Asked Questions?</span>
          </h1>
          <p className="text-sm lg:text-xl">
            Checkout answers for your questions from the listed categories.
            Please contact us if you are not getting what you are looking for
          </p>
        </div>

        <div className="flex justify-between lg:w-fit lg:gap-20">
          <div className="flex flex-col gap-4 lg:w-[610px] lg:gap-4">
            <div className="bg-white rounded-2xl flex justify-between px-6 py-[10px] lg:py-[20px]">
              <p className="text-[#6D6D6D] text-sm lg:text-xl">
                What programming languages do you teach?
              </p>
              <img src={Arrow} alt="Arrow" />
            </div>
            <div className="bg-white rounded-2xl flex justify-between px-6 py-[10px] lg:py-[20px]">
              <p className="text-[#6D6D6D] text-sm lg:text-xl">
                How long are the courses?
              </p>
              <img src={Arrow} alt="Arrow" />
            </div>
            <div className="bg-white rounded-2xl flex justify-between px-6 py-[10px] lg:py-[20px]">
              <p className="text-[#6D6D6D] text-sm lg:text-xl">
                Are your certifications recognized internationally?
              </p>
              <img src={Arrow} alt="Arrow" />
            </div>
            <div className="bg-white rounded-2xl flex justify-between px-6 py-[10px] lg:py-[20px]">
              <p className="text-[#6D6D6D] text-sm lg:text-xl">
                Are there any discounts or scholarships available?
              </p>
              <img src={Arrow} alt="Arrow" />
            </div>
            <div className="bg-white rounded-2xl flex justify-between px-6 py-[10px] lg:py-[20px]">
              <p className="text-[#6D6D6D] text-sm lg:text-xl">
                What teaching materials do you provide?
              </p>
              <img src={Arrow} alt="Arrow" />
            </div>
            <div className="bg-white rounded-2xl flex justify-between px-6 py-[10px] lg:py-[20px]">
              <p className="text-[#6D6D6D] text-sm lg:text-xl">
                Do you offer career support or job placement assistance?
              </p>
              <img src={Arrow} alt="Arrow" />
            </div>
            <div className="bg-white rounded-2xl flex justify-between px-6 py-[10px] lg:py-[20px]">
              <p className="text-[#6D6D6D] text-sm lg:text-xl">
                Is there an age or educational qualification requirement?
              </p>
              <img src={Arrow} alt="Arrow" />
            </div>
          </div>

          <div className="relative hidden md:flex lg:pr-10">
            <img src={AniImg} alt="Image" className="h-90 w-auto z-50 lg:w-[450px] lg:h-[706px]" />
            <div className="absolute rounded-full bg-[#7A5DA821] h-[76px] w-[72px] bottom-26 -left-5 z-10 lg:w-[172px] lg:h-[176px] lg:bottom-15"></div>
          </div>
        </div>

        <div className="bg-[#7A5DA8] text-white rounded-2xl h-[400px] w-[90%] ml-5 my-5 flex flex-col gap-[24px] items-center text-center justify-center px-4 md:w-[100%] md:ml-0 lg:w-[100%] lg:overflow-hidden lg:ml-0">
          <h1 className="text-3xl font-bold">Ready to get started?</h1>
          <p className="text-sm md:w-80">
            Join us at Larva Tech Academy to be one of tech expert. Make your
            tech dreams come true. A trial will convince you
          </p>
          <button className="bg-white text-black px-6 py-4 w-fit rounded-2xl">
            Apply now
          </button>
        </div>
      </div>
    </>
  );
};

export default Faq;
