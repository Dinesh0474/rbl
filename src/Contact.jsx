import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you can handle the form submission, like sending the data to a server
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    alert('Thank you for contacting us!');
  };

  return (
    <div className="w-full min-h-screen bg-[#1a1a1a] flex flex-col justify-center items-center py-10">
      <div className="w-[90%] max-w-3xl bg-[#101010] rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-extrabold text-white mb-6 text-center">Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="text-white text-lg mb-2 block">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full p-4 bg-[#222222] text-white border-none rounded-lg focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="text-white text-lg mb-2 block">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full p-4 bg-[#222222] text-white border-none rounded-lg focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="text-white text-lg mb-2 block">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows="4"
              className="w-full p-4 bg-[#222222] text-white border-none rounded-lg focus:outline-none"
            />
          </div>

          <div className="flex justify-center">
            <button type="submit" className="bg-[#f96c00] text-white py-3 px-6 rounded-lg">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
