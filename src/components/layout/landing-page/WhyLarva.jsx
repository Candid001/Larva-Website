import React from "react";
import Cone2 from "@assets/image 68.svg";
import AnimeImg1 from "@assets/image 57.svg";
import AnimeImg2 from "@assets/image 77.svg";
import AnimeImg3 from "@assets/image 76.svg";
import AnimeImg4 from "@assets/image 81.svg";
import AnimeImg5 from "@assets/image 62.svg";

const WhyLarva = () => {
  return (
    <>
      <div className="bg-white px-5 py-5 md:py-12 md:px-12">
        <div className="flex flex-col gap-5 md:flex md:flex-row md:justify-between lg:h-[456px]">
          {/* First Div */}
          <div className="relative flex flex-col gap-[24px] md:w-[400px] lg:gap-8 lg:w-[610px]">
            <img
              src={Cone2}
              alt="Cone"
              className="absolute top-40 right-18 w-28 opacity-80 md:w-40"
            />

            <h2 className="font-bold text-2xl">
              Why <span className="text-[#F39821]">Larva?</span>
            </h2>
            <h1 className="font-bold text-6xl">
              A place where Tech Experts Meet
            </h1>
            <div className="h-2 w-[190px] bg-gradient-to-r from-[#8D5813] to-[#F39821]"></div>
            <p className="text-sm text-[#6D6D6D] lg:text-[16px]">
              Larva Coding Academy stands out as one of the best institutions
              for anyone passionate about technology. With an industry-focused
              curriculum and expert instructors.
            </p>
          </div>

          {/* Animie Div */}
          <div className="relative lg:w-[610px] lg:h-[456px]">
            <img
              src={AnimeImg1}
              alt="Image"
              className="lg:absolute rounded-2xl w-[300px] md:w-[350px] mx-6 lg:w-[505px] lg:right-0 lg:h-[401px]"
            />

            <div className="bg-[#7A5DA8] text-white flex gap-2 rounded-2xl absolute -bottom-10 w-[300px] md:w-[350px] md:-left-4 lg:w-[505px] lg:h-[149px] lg:top-[307px] lg:px-[24px] lg:gap-[24px] lg:items-center">
              {/* Divider */}
              <div className="h-1 w-8 mx-2 bg-gradient-to-r from-[#8D5813] to-[#F39821] my-10 lg:w-[52px]"></div>

              <div className="flex flex-col gap-2">
                <h2 className="font-bold">Expert Tutors</h2>
                <p>
                  Our tutors are highly experienced and knowledgeable in their
                  fields.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second div */}
      <div className="bg-white px-5 py-5 md:py-12 md:px-12">
        <div className="py-5 flex flex-col gap-14 md:flex md:flex-row md:justify-between lg:w-[1240px] lg:h-[487px] lg:gap-[20px] lg:py-0">
          <div className="relative lg:w-[610px] lg:h-[487px]">
            <img
              src={AnimeImg2}
              alt="Image"
              className="rounded-2xl w-[300px] md:w-[350px] mx-6 lg:w-[505px] lg:h-[401px] lg:absolute lg:right-0 lg:mx-0"
            />

            <div className="bg-[#7A5DA8] text-white flex gap-2 rounded-2xl absolute -bottom-10 w-[300px] md:w-[350px] md:-left-4 lg:w-[505px] lg:h-[149px] lg:top-[334px] lg:left-0 lg:px-[24px] lg:gap-[24px] lg:items-center">
              {/* Divider */}
              <div className="h-1 w-8 mx-2 bg-gradient-to-r from-[#8D5813] to-[#F39821] my-10 lg:w-[52px]"></div>

              <div className="flex flex-col gap-2">
                <h2 className="font-bold">Remote Learning</h2>
                <p>
                  We offer remote learning options that allow you to learn from
                  anywhere.
                </p>
              </div>
            </div>
          </div>

          <div className="relative lg:w-[610px] lg:h-[487px]">
            <img
              src={AnimeImg3}
              alt="Image"
              className="lg:absolute rounded-2xl w-[300px] md:w-[350px] mx-6 lg:w-[505px] lg:right-0 lg:h-[401px] lg:mx-0"
            />

            <div className="bg-[#7A5DA8] text-white flex gap-2 rounded-2xl absolute -bottom-10 w-[300px] md:w-[350px] md:-left-4 lg:w-[505px] lg:h-[149px] lg:top-[334px] lg:px-[24px] lg:gap-[24px] lg:items-center lg:left-0">
              {/* Divider */}
              <div className="h-1 w-8 mx-2 bg-gradient-to-r from-[#8D5813] to-[#F39821] my-10 lg:w-[52px]"></div>

              <div className="flex flex-col gap-2 px-2">
                <h2 className="font-bold">After Class Access</h2>
                <p>
                  We want to make sure you have everything you need to succeed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Div */}
      <div className="bg-white px-5 py-5 md:py-12 md:px-12">
        <div className="py-5 flex flex-col gap-14 md:flex md:flex-row md:justify-between lg:w-[1240px] lg:h-[487px] lg:gap-[20px] lg:py-0">
          <div className="relative lg:w-[610px] lg:h-[487px]">
            <img
              src={AnimeImg4}
              alt="Image"
              className="rounded-2xl w-[300px] md:w-[350px] mx-6 lg:w-[505px] lg:h-[401px] lg:absolute lg:right-0 lg:mx-0"
            />

            <div className="bg-[#7A5DA8] text-white flex gap-2 rounded-2xl absolute -bottom-10 w-[300px] md:w-[350px] md:-left-4 lg:w-[505px] lg:h-[149px] lg:top-[334px] lg:left-0 lg:px-[24px] lg:gap-[24px] lg:items-center">
              {/* Divider */}
              <div className="h-1 w-8 mx-2 bg-gradient-to-r from-[#8D5813] to-[#F39821] my-10 lg:w-[52px]"></div>

              <div className="flex flex-col gap-2">
                <h2 className="font-bold">Tested & Trusted</h2>
                <p>We have our 100+ graduates who tested and trusted in us.</p>
              </div>
            </div>
          </div>

          <div className="relative lg:w-[610px] lg:h-[487px]">
            <img
              src={AnimeImg5}
              alt="Image"
              className="lg:absolute rounded-2xl w-[300px] md:w-[350px] mx-6 lg:w-[505px] lg:right-0 lg:h-[401px] lg:mx-0"
            />

            <div className="bg-[#7A5DA8] text-white flex gap-2 rounded-2xl absolute -bottom-10 w-[300px] md:w-[350px] md:-left-4 lg:w-[505px] lg:h-[149px] lg:top-[334px] lg:px-[24px] lg:gap-[24px] lg:items-center lg:left-0">
              {/* Divider */}
              <div className="h-1 w-8 mx-2 bg-gradient-to-r from-[#8D5813] to-[#F39821] my-10 lg:w-[52px]"></div>

              <div className="flex flex-col gap-2 px-2">
                <h2 className="font-bold">Conducive Environment</h2>
                <p>
                  We’ve created a conducive environment that helps you focus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* See More */}
      <div>
        <p className="text-center py-10 font-semibold text-lg text-[#F39821] md:text-xl">
          <u>SEE MORE</u>
        </p>
      </div>
    </>
  );
};

export default WhyLarva;
