import React, { useState } from 'react';

const NewBlog = ({ onNewBlog }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tags: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBlog = {
      title: formData.title,
      description: formData.description,
      tags: formData.tags.split(',').map(tag => tag.trim()), 
      image: {
        src: formData.image, 
        alt: formData.title
      },
      author: {
        name: 'User', 
        image: 'https://picsum.photos/150',
        date: new Date().toLocaleDateString() 
      }
    };

    if (onNewBlog) {
      onNewBlog(newBlog); 
    }

    setFormData({
      title: '',
      description: '',
      tags: '',
      image: ''
    });
  };

  return (
    <div className="w-full md:h-screen bg-[#1a1a1a] flex flex-col justify-center items-center py-10">
      <div className="w-[90%] max-w-7xl bg-[#101010] rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-extrabold text-white mb-6">Create a New Blog Post</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="text-white text-lg mb-2 block">Blog Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-3 bg-[#202020] text-white rounded-lg"
              placeholder="Enter blog title"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="text-white text-lg mb-2 block">Blog Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-3 bg-[#202020] text-white rounded-lg"
              placeholder="Enter blog description"
              rows="4"
              required
            />
          </div>

          <div>
            <label htmlFor="tags" className="text-white text-lg mb-2 block">Blog Tags</label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              className="w-full p-3 bg-[#202020] text-white rounded-lg"
              placeholder="Enter tags separated by commas"
              required
            />
          </div>

          <div>
            <label htmlFor="image" className="text-white text-lg mb-2 block">Image URL</label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full p-3 bg-[#202020] text-white rounded-lg"
              placeholder="Enter image URL"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#f96c00] text-white text-lg font-bold py-3 px-6 rounded-lg mt-4"
            >
              Submit Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewBlog;


