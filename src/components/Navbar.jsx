import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full sticky top-0 z-50 shadow-md">

      <nav className="bg-gray-800 px-4 py-3">

        {/* TOP NAV */}
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <div className="text-white text-2xl md:text-4xl font-bold">
            DHELTECHHUB
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center space-x-6">

            <li>
              <Link
                to="/"
                className="text-white hover:text-gray-300 transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="text-white hover:text-gray-300 transition"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="text-white hover:text-gray-300 transition"
              >
                Contact
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard"
                className="text-white hover:text-gray-300 transition"
              >
                Dashboard
              </Link>
            </li>

            <li>
              <Link
                to="/join"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
              >
                Join
              </Link>
            </li>

          </ul>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <ul className="md:hidden flex flex-col mt-4 space-y-4 bg-gray-700 p-4 rounded-lg">

            <li>
              <Link
                to="/"
                className="text-white block"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="text-white block"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="text-white block"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard"
                className="text-white block"
                onClick={() => setMenuOpen(false)}
              >
                Dashboard
              </Link>
            </li>

            <li>
              <Link
                to="/join"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg inline-block"
                onClick={() => setMenuOpen(false)}
              >
                Join
              </Link>
            </li>

          </ul>
        )}

      </nav>
    </div>
  );
}

export default Navbar;