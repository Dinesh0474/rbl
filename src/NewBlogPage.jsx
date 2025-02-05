import React from 'react';
import NewBlog from './NewBlog'; // Import NewBlog component
import { useBlog } from './BlogProvider'; // Import useBlog to access addBlog function

const NewBlogPage = () => {
  const { addBlog } = useBlog(); // Access addBlog function from BlogProvider

  // Handle adding a new blog
  const handleNewBlog = (newBlog) => {
    addBlog(newBlog); // Call addBlog to update global state and localStorage
  };

  return (
    <div className="w-full min-h-screen bg-[#1a1a1a] flex flex-col justify-center items-center py-10">
      <h1 className="text-3xl font-bold text-white mb-6">Create a New Blog</h1>
      <NewBlog onNewBlog={handleNewBlog} /> {/* Render NewBlog component and pass onNewBlog function */}
    </div>
  );
};

export default NewBlogPage;
