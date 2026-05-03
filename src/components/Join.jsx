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
      name: "Sara Ali",
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
      <section className="bg-gradient-to-r from-black to-gray-800 text-white py-28 text-center px-6">
        <h1 className="text-5xl font-bold">We Build The Future</h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          DhelTechHub is a modern tech platform focused on learning, innovation,
          and real-world digital solutions.
        </p>
      </section>

      {/* STORY SECTION */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Story & Vision
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {storyCards.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">
          Leadership Team
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="text-center bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-black"
              />

              <h3 className="font-bold text-lg">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Join;