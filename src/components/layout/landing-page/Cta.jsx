import React from "react";

const Cta = () => {
  return (
    <>
      <div className="bg-[#7A5DA8] text-white rounded-2xl h-[400px] w-[90%] ml-5 my-5 flex flex-col gap-[24px] items-center text-center justify-center px-4 md:ml-10 lg:ml-15 lg:overflow-hidden">
        <h1 className="text-3xl font-bold">Ready to get started?</h1>
        <p className="text-sm md:w-80">
          Join us at Larva Tech Academy to be one of tech expert. Make your tech
          dreams come true. A trial will convince you
        </p>
        <button className="bg-white text-black px-6 py-4 w-fit rounded-2xl">Apply now</button>
      </div>
    </>
  );
};

export default Cta;
