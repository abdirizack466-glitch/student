import React from "react";

function About() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* HERO */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 md:py-20 text-center px-4 md:px-6">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          About Dheltechhub
        </h1>

        <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
          We are a modern tech platform dedicated to building powerful digital
          solutions, learning tools, and innovative experiences for the future.
        </p>

      </section>

      {/* WHY CHOOSE US */}
      <section className="py-12 md:py-16 px-4 md:px-6">

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {[
            {
              title: "🚀 Fast Development",
              text: "We build modern and fast applications using the latest technologies.",
            },
            {
              title: "💡 Innovation",
              text: "We focus on creative and smart solutions for real-world problems.",
            },
            {
              title: "🤝 Support",
              text: "We support users and ensure great experience anytime you need help.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-5 md:p-6 rounded-2xl shadow hover:scale-105 transition"
            >
              <h3 className="text-lg md:text-xl font-bold mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm md:text-base">
                {item.text}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="bg-white py-12 md:py-16 px-4 md:px-6">

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Vision & Mission
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

          <div className="p-5 md:p-6 bg-gray-50 rounded-2xl shadow">
            <h3 className="text-lg md:text-xl font-bold mb-2">
              🌍 Our Vision
            </h3>

            <p className="text-gray-600 text-sm md:text-base">
              To become a leading tech platform that empowers developers and users
              to build the future of digital innovation.
            </p>
          </div>

          <div className="p-5 md:p-6 bg-gray-50 rounded-2xl shadow">
            <h3 className="text-lg md:text-xl font-bold mb-2">
              🎯 Our Mission
            </h3>

            <p className="text-gray-600 text-sm md:text-base">
              To deliver simple, powerful, and modern solutions that improve learning,
              productivity, and technology access.
            </p>
          </div>

        </div>
      </section>

      {/* FUTURE GOALS */}
      <section className="py-12 md:py-16 px-4 md:px-6">

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Our Future Goals (Next Years)
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {[
            {
              title: "🌐 Global Platform",
              text: "Expand our platform to serve users worldwide.",
            },
            {
              title: "📱 Mobile App",
              text: "Launch mobile applications for better accessibility.",
            },
            {
              title: "🤖 AI Integration",
              text: "Add AI-powered tools to improve user experience.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-5 md:p-6 rounded-2xl shadow"
            >
              <h3 className="font-bold text-lg mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm md:text-base">
                {item.text}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* THANK YOU */}
      <section className="bg-gray-900 text-white py-12 md:py-16 px-4 md:px-6 text-center">

        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          ❤️ Thank You
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
          We truly appreciate every user who spends time on our platform.
          Your support motivates us to keep building better and smarter solutions every day.
        </p>

        <button className="mt-6 bg-blue-500 px-5 md:px-6 py-2 md:py-3 rounded-full font-semibold hover:bg-blue-600 transition">
          Join Us
        </button>

      </section>

    </div>
  );
}

export default About;