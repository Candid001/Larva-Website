import React, { useState, useEffect } from "react";
import Gradimg1 from "@assets/image 44.svg";
import Gradimg2 from "@assets/BasitOfficialImage.JPG";
import Gradimg3 from "@assets/akikpassport.jpg";
import Gradimg4 from "@assets/Basit.JPG";

const GradFeed = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const feedbacks = [
    {
      name: "Elly Dion",
      role: "Product Designer",
      text: `I am thrilled to share my experience as a proud graduate of Larva Coding Academy, a school I regard as one of the best tech institutions ever. My time at Larva Tech was transformative, equipping me with skills and knowledge that shaped my career path. The academy's hands-on approach, dedicated instructors, and supportive community helped me thrive. I am deeply grateful for the opportunities and growth Larva Tech provided.`,
      img: Gradimg1,
    },
    {
      name: "Mustapha A'Basit",
      role: "Frontend Developer",
      text: `Larva Coding Academy changed my perspective on tech education. The practical projects and mentorship prepared me for real-world challenges. Every class session was interactive and result-driven. I am now confident building user interfaces and handling client projects effectively.`,
      img: Gradimg2,
    },
    {
      name: "Aisha Bello",
      role: "UI/UX Designer",
      text: `My experience at Larva Tech Academy was inspiring. The instructors are knowledgeable and approachable. They teach complex concepts in simple ways. The design sessions helped me improve my portfolio and land my first design job.`,
      img: Gradimg3,
    },
    {
      name: "Mubarak",
      role: "Full Stack Developer",
      text: `Joining Larva Coding Academy was one of the best decisions of my life. The instructors guided me through every challenge and project. I gained confidence writing both frontend and backend code. The community support is top-notch.`,
      img: Gradimg4,
    },
  ];

  // Auto-slide every 5 seconds, pauses on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % feedbacks.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      className="bg-[#7A5DA8] w-[90%] rounded-xl mx-5 my-10 py-10 text-center px-4 text-white md:mx-10 md:px-10 lg:mx-17 lg:px-20 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <h1 className="font-bold text-2xl lg:text-4xl mb-8">
        Graduates Feedback
      </h1>

      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {feedbacks.map((item, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 flex flex-col gap-6"
            >
              <p className="text-sm md:text-base leading-relaxed">
                {item.text}
              </p>

              <div className="flex gap-2 justify-center items-center pt-4">
                <img
                  src={item.img}
                  alt="Graduate"
                  className="object-cover rounded-full border-white border-2 w-12 h-12"
                />
                <div>
                  <h2 className="text-xl font-bold">{item.name}</h2>
                  <p className="text-sm">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation dots */}
      <div className="flex gap-3 justify-center mt-6">
        {feedbacks.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full ${
              activeIndex === index ? "bg-white w-6" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default GradFeed;
