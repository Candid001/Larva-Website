import React from "react";
import Frame1 from "@assets/Frame 1000008331.svg";
import Frame2 from "@assets/Frame 1000008331 (1).svg";
import Frame3 from "@assets/Frame 1000008331 (7).svg";
import Frame4 from "@assets/Frame 1000008331 (2).svg";
import Frame5 from "@assets/Frame 1000008331 (3).svg";
import Frame6 from "@assets/Frame 1000008331 (4).svg";
import Frame7 from "@assets/Frame 1000008331 (5).svg";
import Frame8 from "@assets/Frame 1000008331 (8).svg";
import Frame9 from "@assets/Frame 1000008331 (6).svg";
import Verify from "@assets/Vector (6).svg"

const Courses = () => {
  const courses = [
    {
      id: 0,
      img: Frame1,
      title: "Full Stack Coding",
      duration: "3 Months",
      description:
        "Full-stack development involves both front-end and back-end coding, allowing developers to build complete web applications.",
    },
    {
      id: 1,
      img: Frame2,
      title: "Front End Development",
      duration: "2 Months",
      description:
        "Learn how to create the visual and interactive elements of a website using HTML, CSS, and JavaScript.",
    },
    {
      id: 2,
      img: Frame3,
      title: "Back End Development",
      duration: "2 Months",
      description:
        "Learn Python and databases such as MySQL or MongoDB to manage data and ensure smooth, secure website functionality.",
    },
    {
      id: 3,
      img: Frame4,
      title: "Project Design",
      duration: "3 Months",
      description:
        "Gain a deep understanding of essential design techniques and tools, like problem definition, user research, prototyping, and testing.",
    },
    {
      id: 4,
      img: Frame5,
      title: "Cyber Security",
      duration: "2 Months",
      description:
        "Learn essential cyber security skills to protect data, prevent threats, and secure online environments with hands-on training.",
    },
    {
      id: 5,
      img: Frame6,
      title: "Web Design",
      duration: "3 Months",
      description:
        "Master web design and create visually appealing, user-friendly websites with modern tools and design principles.",
    },
    {
      id: 6,
      img: Frame7,
      title: "Graphic Design",
      duration: "2 Months",
      description:
        "Learn the tools and techniques to create professional visual designs and build strong creative skills.",
    },
    {
      id: 7,
      img: Frame8,
      title: "Data Analysis",
      duration: "2 Months",
      description:
        "Learn to analyze, interpret, and visualize data to make informed decisions and generate insights.",
    },
    {
      id: 8,
      img: Frame9,
      title: "Software Design",
      duration: "3 Months",
      description:
        "Learn to design efficient, scalable software applications following best practices for smooth user experiences.",
    },
  ];

  return (
    <div className="bg-[#F3F3F3] w-full py-10 px-4 md:px-12 lg:px-20">
      <h1 className="text-center font-bold text-2xl md:text-3xl mb-10">
        <span className="text-[#F39821]">Courses</span> We Offer
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl shadow-md  hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-56 object-cover rounded-2xl"
              />
            </div>

            <div className="p-6 text-center">
              <h2 className="text-lg font-semibold text-gray-800 flex gap-2 justify-center">
                <img src={Verify} alt="Image" />
                {item.title}
              </h2>
              <p className="text-sm text-[#F39821] font-medium mt-1">
                {item.duration}
              </p>
              <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                {item.description}
              </p>
              <p className="mt-5 text-[#F39821] font-semibold text-sm cursor-pointer hover:underline">
                LEARN MORE
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center mt-10 font-semibold text-[#F39821] md:text-lg cursor-pointer hover:underline">
        <u>SEE MORE</u>
      </p>
    </div>
  );
};

export default Courses;
