import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    setSent(true);

    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* HEADER */}
      <section className="bg-gray-900 text-white py-16 md:py-20 text-center px-4 md:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Contact Us
        </h1>

        <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
          We love hearing from you ❤️. Send us a message and we will respond
          as soon as possible.
        </p>
      </section>

      {/* CONTACT SECTION */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 p-4 md:p-6">

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-5 md:p-6 rounded-2xl shadow space-y-4"
        >
          <h2 className="text-xl md:text-2xl font-bold">
            Send Message
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg text-sm md:text-base"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg text-sm md:text-base"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg h-28 md:h-32 text-sm md:text-base"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-3 rounded-lg w-full hover:bg-blue-600 transition"
          >
            Send Message
          </button>

          {sent && (
            <p className="text-green-500 font-semibold text-center text-sm md:text-base">
              ✅ Message sent successfully!
            </p>
          )}
        </form>

        {/* INFO SECTION */}
        <div className="space-y-5 md:space-y-6">

          {/* CARD */}
          <div className="bg-white p-5 rounded-2xl shadow">
            <h3 className="font-bold text-lg">📍 Location</h3>
            <p className="text-gray-600 text-sm md:text-base">
              Garissa, Kenya
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow">
            <h3 className="font-bold text-lg">📞 Phone</h3>
            <p className="text-gray-600 text-sm md:text-base">
              +254 700 000 000
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow">
            <h3 className="font-bold text-lg">📧 Email</h3>
            <p className="text-gray-600 text-sm md:text-base">
              support@dheltechhub.com
            </p>
          </div>

          {/* SOCIAL */}
          <div className="bg-white p-5 rounded-2xl shadow">
            <h3 className="font-bold mb-3 text-lg">
              🌐 Social Media
            </h3>

            <div className="flex flex-wrap gap-3">
              <button className="bg-blue-600 text-white px-3 py-2 rounded text-sm">
                Facebook
              </button>

              <button className="bg-pink-500 text-white px-3 py-2 rounded text-sm">
                Instagram
              </button>

              <button className="bg-green-500 text-white px-3 py-2 rounded text-sm">
                WhatsApp
              </button>
            </div>
          </div>

          {/* MAP */}
          <div className="bg-gray-300 h-32 md:h-40 rounded-2xl flex items-center justify-center">
            <p className="text-gray-700 font-semibold text-sm md:text-base">
              📍 Map Location (Coming Soon)
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Contact;