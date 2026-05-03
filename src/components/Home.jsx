import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="space-y-16 md:space-y-20">

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4 md:px-6 text-center">

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
          Welcome to Dheltechhub
        </h1>

        <p className="mt-6 text-gray-300 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed">
          Your one-stop destination for all things tech. Explore our latest
          articles, tutorials, and resources to stay ahead in the world of
          technology.
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">

          <button
            onClick={() => navigate("/dashboard")}
            className="bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-full font-semibold shadow-lg"
          >
            Get Started
          </button>

          <button className="border border-gray-400 hover:bg-white hover:text-black transition px-6 py-3 rounded-full font-semibold">
            Learn More
          </button>

        </div>

      </section>

      {/* SECTION TITLE */}
      <section className="px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          What We Can Do in Modern Age
        </h2>
      </section>

      {/* CARDS */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-6">

        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition duration-300">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
            className="w-full h-48 object-cover"
            alt="Nature"
          />

          <div className="p-4">
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              Nature
            </h2>

            <p className="text-gray-600 mb-4 text-sm md:text-base">
              Beautiful landscape view.
            </p>

            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Read More
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition duration-300">
          <img
            src="https://images.unsplash.com/photo-1494526585095-c41746248156"
            className="w-full h-48 object-cover"
            alt="City"
          />

          <div className="p-4">
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              City
            </h2>

            <p className="text-gray-600 mb-4 text-sm md:text-base">
              Modern city life.
            </p>

            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Read More
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition duration-300">
          <img
            src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308"
            className="w-full h-48 object-cover"
            alt="Technology"
          />

          <div className="p-4">
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              Technology
            </h2>

            <p className="text-gray-600 mb-4 text-sm md:text-base">
              Modern innovation.
            </p>

            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Read More
            </button>
          </div>
        </div>

      </section>

      {/* PROGRESS SECTION */}
      <section className="w-full max-w-xl mx-auto space-y-6 text-center px-4 pb-10">

        <div>
          <p className="mb-2 text-sm md:text-base font-medium">
            10% January to March
          </p>

          <div className="w-full bg-gray-300 rounded-full h-4">
            <div className="bg-red-500 h-4 rounded-full w-[10%]"></div>
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm md:text-base font-medium">
            40% April to July
          </p>

          <div className="w-full bg-gray-300 rounded-full h-4">
            <div className="bg-yellow-500 h-4 rounded-full w-[40%]"></div>
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm md:text-base font-medium">
            70% August to October
          </p>

          <div className="w-full bg-gray-300 rounded-full h-4">
            <div className="bg-blue-500 h-4 rounded-full w-[70%]"></div>
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm md:text-base font-medium">
            100% November to December
          </p>

          <div className="w-full bg-gray-300 rounded-full h-4">
            <div className="bg-green-500 h-4 rounded-full w-full"></div>
          </div>
        </div>

      </section>

    </div>
  );
}

export default Home;