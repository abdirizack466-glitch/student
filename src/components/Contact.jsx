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
      <section className="bg-gray-900 text-white py-20 text-center px-6">
        <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          We love hearing from you ❤️. Send us a message and we will respond as soon as possible.
        </p>
      </section>

      {/* CONTACT SECTION */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 p-6">

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow space-y-4"
        >
          <h2 className="text-2xl font-bold">Send Message</h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 border rounded h-32"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600"
          >
            Send Message
          </button>

          {sent && (
            <p className="text-green-500 font-semibold text-center">
              ✅ Message sent successfully!
            </p>
          )}
        </form>

        {/* INFO SECTION */}
        <div className="space-y-6">

          {/* CONTACT CARDS */}
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-bold">📍 Location</h3>
            <p className="text-gray-600">Garissa, Kenya</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-bold">📞 Phone</h3>
            <p className="text-gray-600">+254 700 000 000</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-bold">📧 Email</h3>
            <p className="text-gray-600">support@dheltechhub.com</p>
          </div>

          {/* SOCIAL LINKS */}
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-bold mb-2">🌐 Social Media</h3>

            <div className="flex gap-3">
              <button className="bg-blue-600 text-white px-3 py-1 rounded">
                Facebook
              </button>

              <button className="bg-pink-500 text-white px-3 py-1 rounded">
                Instagram
              </button>

              <button className="bg-green-500 text-white px-3 py-1 rounded">
                WhatsApp
              </button>
            </div>
          </div>

          {/* MAP PLACEHOLDER */}
          <div className="bg-gray-300 h-40 rounded-xl flex items-center justify-center">
            <p className="text-gray-700 font-semibold">
              📍 Map Location (Coming Soon)
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Contact;