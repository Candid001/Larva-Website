import React, { useState, useEffect } from "react";
import ClassPeople from "@assets/image.svg";
import Location from "@assets/Vector (3).svg";
import Time from "@assets/carbon_time.svg";
import Calender from "@assets/simple-line-icons_calender.svg";
import Duration from "@assets/guidance_time.svg";

const UpClasses = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const classes = [
    {
      title: "Full Stack Coding",
      desc: "Don’t miss your chance to learn from top instructors and take the next step in your tech journey. Keep an eye on this section for updates and enrollment dates. Your future in tech starts here.",
      location: "New Bodija, Ibadan.",
      time: "8am - 10am",
      days: "Monday, Tuesday & Wednesday",
      duration: "2 hours",
    },
    {
      title: "UI/UX Design",
      desc: "Learn the principles of user-centered design, wireframing, and prototyping. Gain hands-on experience with modern tools and start building portfolios that impress employers.",
      location: "New Bodija, Ibadan.",
      time: "10am - 12pm",
      days: "Monday, Tuesday & Wednesday",
      duration: "2 hours",
    },
    {
      title: "Frontend Development",
      desc: "Master HTML, CSS, and JavaScript with a focus on building responsive and accessible web interfaces. Develop real-world projects and become job-ready.",
      location: "New Bodija, Ibadan.",
      time: "12pm - 2pm",
      days: "Monday, Wednesday & Friday",
      duration: "2 hours",
    },
    {
      title: "Data Analysis",
      desc: "Gain practical skills in Excel, SQL, and Python for data analysis. Learn how to visualize insights and communicate findings effectively to support business decisions.",
      location: "New Bodija, Ibadan.",
      time: "2pm - 4pm",
      days: "Monday, Tuesday & Wednesday",
      duration: "2 hours",
    },
  ];

  // Auto-slide every 5 seconds, pauses on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % classes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      className="mx-5 py-10 flex flex-col gap-8 lg:mx-10 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <h1 className="font-bold text-2xl text-center">
        Upcoming <span className="text-[#F39821]">Classes</span>
      </h1>

      <div className="relative w-full overflow-hidden">
        <img
                src={ClassPeople}
                alt="Class"
                className="w-[680px] h-[400px] mx-50 hidden md:flex md:mx-7 lg:w-[1240px]"
              />
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {classes.map((cls, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 flex flex-col gap-6"
            >
              
              <div className="mx-5 flex flex-col gap-4">
                <h2 className="font-bold text-2xl text-[#4F4F4F]">
                  {cls.title}
                </h2>
                <p className="text-[#4F4F4F]">{cls.desc}</p>

                <div className="flex flex-col gap-4 text-[#4F4F4F]">
                  <div className="flex flex-row gap-10">
                    <p className="flex gap-2 items-center">
                      <img src={Location} alt="logo" className="h-6 w-6" />
                      Location
                    </p>
                    <p>{cls.location}</p>
                  </div>
                  <div className="flex flex-row gap-15">
                    <p className="flex gap-2 items-center">
                      <img src={Time} alt="logo" className="h-6 w-6" />
                      Time
                    </p>
                    <p>{cls.time}</p>
                  </div>
                  <div className="flex flex-row gap-20">
                    <p className="flex gap-2 items-center">
                      <img src={Calender} alt="logo" className="h-6 w-6" />
                      Days
                    </p>
                    <p>{cls.days}</p>
                  </div>
                  <div className="flex flex-row gap-8">
                    <p className="flex gap-2 items-center">
                      <img src={Duration} alt="logo" className="h-6 w-6" />
                      Duration
                    </p>
                    <p>{cls.duration}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation dots */}
      <div className="flex gap-3 justify-center mt-6">
        {classes.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full ${
              activeIndex === index ? "bg-[#F39821] w-6" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default UpClasses;
