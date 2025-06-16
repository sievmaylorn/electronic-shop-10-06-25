import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-5xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md flex flex-col md:flex-row gap-6">
      
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          className="rounded-lg w-full max-h-80 object-cover"
          src="https://www.shutterstock.com/image-photo/contact-us-form-digital-web-260nw-395800918.jpg"
          alt="Contact"
        />
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2">
        <h1 className="text-3xl font-bold text-pink-600 mb-4">Contact Us</h1>
        <p className="text-gray-600 mb-6 text-15px">
          Questions or support? Contact TechWave Electronics.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="name">Name</label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="email">Email</label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="message">Message</label>
            <textarea
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm resize-y min-h-[70px] focus:outline-none focus:ring-2 focus:ring-pink-400"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message here..."
            />
          </div>

          <button
            type="submit"
            className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-2 rounded-3xl transition duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
