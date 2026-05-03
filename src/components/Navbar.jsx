import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full sticky top-0 z-50">

      <nav className="bg-gray-800 p-2 flex items-center justify-between">

        {/* LOGO */}
        <div className="text-white text-[40px]">
          DHELTECHHUB
        </div>

        {/* LINKS */}
        <ul className="flex space-x-6">

          <li>
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="text-white hover:text-gray-300">
              About
            </Link>
          </li>

          <li>
            <Link to="/contact" className="text-white hover:text-gray-300">
              Contact
            </Link>
          </li>

          <li>
            <Link to="/dashboard" className="text-white hover:text-gray-300">
              Dashboard
            </Link>


            <Link
  to="/join"
  className="bg-blue-500 text-white px-3 py-1 rounded"
>
  Join
</Link>
          </li>

        </ul>

      </nav>
    </div>
  );
}

export default Navbar;