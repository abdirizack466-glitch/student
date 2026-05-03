import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">

      {/* MAIN FOOTER */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {/* BRAND */}
        <div className="text-center sm:text-left">
          <h2 className="text-white text-2xl font-bold">
            DHELTECHHUB
          </h2>

          <p className="mt-3 text-sm md:text-base text-gray-400 leading-relaxed">
            We are building innovative digital solutions to improve our
            community and shape the future with technology.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="text-center sm:text-left">
          <h3 className="text-white font-semibold mb-4 text-lg">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm md:text-base">
            <li className="hover:text-white cursor-pointer transition">
              Home
            </li>

            <li className="hover:text-white cursor-pointer transition">
              About
            </li>

            <li className="hover:text-white cursor-pointer transition">
              Services
            </li>

            <li className="hover:text-white cursor-pointer transition">
              Contact
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="text-center sm:text-left">
          <h3 className="text-white font-semibold mb-4 text-lg">
            Contact
          </h3>

          <p className="text-sm md:text-base">
            Email: info@dheltechhub.com
          </p>

          <p className="text-sm md:text-base mt-2">
            Phone: +254 700 000 000
          </p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-700 text-center px-4 py-4 text-xs sm:text-sm text-gray-500">
        © 2026 DHELTECHHUB. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;