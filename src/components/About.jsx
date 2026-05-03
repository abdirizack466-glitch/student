import React from "react";

function About() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 text-center px-6">

        <h1 className="text-5xl font-bold mb-4">About Dheltechhub</h1>

        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          We are a modern tech platform dedicated to building powerful digital solutions,
          learning tools, and innovative experiences for the future.
        </p>

      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 px-6">

        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-2">🚀 Fast Development</h3>
            <p className="text-gray-600">
              We build modern and fast applications using the latest technologies.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-2">💡 Innovation</h3>
            <p className="text-gray-600">
              We focus on creative and smart solutions for real-world problems.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-2">🤝 Support</h3>
            <p className="text-gray-600">
              We support users and ensure great experience anytime you need help.
            </p>
          </div>

        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="bg-white py-16 px-6">

        <h2 className="text-3xl font-bold text-center mb-10">
          Vision & Mission
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          <div className="p-6 bg-gray-50 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">🌍 Our Vision</h3>
            <p className="text-gray-600">
              To become a leading tech platform that empowers developers and users
              to build the future of digital innovation.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">🎯 Our Mission</h3>
            <p className="text-gray-600">
              To deliver simple, powerful, and modern solutions that improve learning,
              productivity, and technology access.
            </p>
          </div>

        </div>
      </section>

      {/* FUTURE GOALS */}
      <section className="py-16 px-6">

        <h2 className="text-3xl font-bold text-center mb-10">
          Our Future Goals (Next Years)
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-2">🌐 Global Platform</h3>
            <p className="text-gray-600">
              Expand our platform to serve users worldwide.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-2">📱 Mobile App</h3>
            <p className="text-gray-600">
              Launch mobile applications for better accessibility.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-2">🤖 AI Integration</h3>
            <p className="text-gray-600">
              Add AI-powered tools to improve user experience.
            </p>
          </div>

        </div>
      </section>

      {/* APPRECIATION SECTION */}
      <section className="bg-gray-900 text-white py-16 px-6 text-center">

        <h2 className="text-3xl font-bold mb-4">
          ❤️ Thank You
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto">
          We truly appreciate every user who spends time on our platform.
          Your support motivates us to keep building better and smarter solutions every day.
        </p>

        <button className="mt-6 bg-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-blue-600">
          Join Us
        </button>

      </section>

    </div>
  );
}

export default About;