import React from "react";

import abdiImg from "../assets/team/abdi.jpg";
import saraImg from "../assets/team/sara.jpg";

function Join() {
  const teamMembers = [
    {
      name: "Abdi Rizack",
      role: "Founder & CEO",
      image: abdiImg,
    },
    {
      name: "Dheqa Ali",
      role: "Tech Lead",
      image: saraImg,
    },
    {
      name: "John Doe",
      role: "Project Manager",
      image: "https://i.pravatar.cc/300?img=45",
    },
  ];

  const storyCards = [
    {
      title: "🚀 Why We Started",
      text: "We built DhelTechHub to solve real problems in our community like lack of digital tools, slow communication, and limited access to smart platforms.",
    },
    {
      title: "⚠️ The Problem",
      text: "Many people struggle with inefficient systems, scattered information, and lack of modern solutions that support learning and productivity.",
    },
    {
      title: "💡 Our Innovation",
      text: "We create simple, scalable, and user-friendly technology that improves access to information, collaboration, and digital growth.",
    },
    {
      title: "🔮 Future Vision",
      text: "We are building a system that grows with the community — adding AI, automation, and smart tools for the future.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">

      {/* HERO */}
      <section className="bg-gradient-to-r from-black to-gray-800 text-white py-20 md:py-28 text-center px-4 md:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          We Build The Future
        </h1>

        <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
          DhelTechHub is a modern tech platform focused on learning,
          innovation, and real-world digital solutions.
        </p>
      </section>

      {/* STORY SECTION */}
      <section className="py-12 md:py-16 px-4 md:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Our Story & Vision
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {storyCards.map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 md:p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <h3 className="text-lg md:text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Leadership Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="text-center bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 md:w-28 md:h-28 rounded-full mx-auto mb-4 object-cover border-4 border-black"
              />

              <h3 className="font-bold text-lg md:text-xl">
                {member.name}
              </h3>

              <p className="text-gray-500 text-sm md:text-base">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Join;