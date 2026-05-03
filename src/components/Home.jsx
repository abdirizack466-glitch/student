import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="space-y-20">

      {/* HERO SECTION */}
      <section className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 text-center">

        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Welcome to Dheltechhub
        </h1>

        <p className="mt-6 text-gray-300 max-w-xl text-lg">
          Your one-stop destination for all things tech. Explore our latest
          articles, tutorials, and resources to stay ahead in the world of technology.
        </p>

        <div className="mt-8 flex gap-4">
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
      <h2 className="text-3xl font-bold text-center">
        What We Can Do in Modern Age
      </h2>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">

        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
            className="w-full h-48 object-cover"
            alt="Nature"
          />
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">Nature</h2>
            <p className="text-gray-600 mb-4">Beautiful landscape view.</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Read More
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
          <img
            src="https://images.unsplash.com/photo-1494526585095-c41746248156"
            className="w-full h-48 object-cover"
            alt="City"
          />
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">City</h2>
            <p className="text-gray-600 mb-4">Modern city life.</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Read More
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
          <img
            src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308"
            className="w-full h-48 object-cover"
            alt="Tech"
          />
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">Technology</h2>
            <p className="text-gray-600 mb-4">Modern innovation.</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Read More
            </button>
          </div>
        </div>

      </div>

      {/* PROGRESS SECTION */}
      <div className="w-full max-w-md mx-auto space-y-4 text-center">

        <div>
          <p className="mb-1">10% January to March</p>
          <div className="w-full bg-gray-300 rounded-full h-4">
            <div className="bg-red-500 h-4 rounded-full w-[10%]"></div>
          </div>
        </div>

        <div>
          <p className="mb-1">40% April to July</p>
          <div className="w-full bg-gray-300 rounded-full h-4">
            <div className="bg-yellow-500 h-4 rounded-full w-[40%]"></div>
          </div>
        </div>

        <div>
          <p className="mb-1">70% August to October</p>
          <div className="w-full bg-gray-300 rounded-full h-4">
            <div className="bg-blue-500 h-4 rounded-full w-[70%]"></div>
          </div>
        </div>

        <div>
          <p className="mb-1">100% November to December</p>
          <div className="w-full bg-gray-300 rounded-full h-4">
            <div className="bg-green-500 h-4 rounded-full w-full"></div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Home;