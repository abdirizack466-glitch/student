import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="bg-gray-800 text-gray-300 mt-10">
  <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

    {/* Brand */}
    <div>
      <h2 className="text-white text-xl font-bold">My Project</h2>
      <p className="mt-3 text-sm text-gray-400">
        We are building something amazing for the future.
      </p>
    </div>

    {/* Links */}
    <div>
      <h3 className="text-white font-semibold mb-3">Quick Links</h3>
      <ul className="space-y-2 text-sm">
        <li className="hover:text-white cursor-pointer">Home</li>
        <li className="hover:text-white cursor-pointer">About</li>
        <li className="hover:text-white cursor-pointer">Services</li>
        <li className="hover:text-white cursor-pointer">Contact</li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h3 className="text-white font-semibold mb-3">Contact</h3>
      <p className="text-sm">Email: info@project.com</p>
      <p className="text-sm">Phone: +254 700 000 000</p>
    </div>

  </div>

  {/* Bottom line */}
  <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
    © 2026 My Project. All rights reserved.
  </div>
</footer>
    </div>
  )
}

export default Footer