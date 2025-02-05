import React, { useState } from 'react';

const NewBlog = ({ onNewBlog }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tags: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Check if the image is valid before attempting to create the URL
    let imageSrc = null;
    if (formData.image && formData.image instanceof File) {
      imageSrc = URL.createObjectURL(formData.image); // Create object URL for the image
    }
  
    // Format the blog data
    const newBlog = {
      title: formData.title,
      description: formData.description,
      tags: formData.tags.split(',').map(tag => tag.trim()), // Split tags by commas
      image: {
        src: imageSrc,
        alt: formData.title
      },
      author: {
        name: 'User', // You can modify this to use dynamic user info
        image: 'https://picsum.photos/150', // Placeholder image for author
        date: new Date().toLocaleDateString() // Current date
      }
    };
  
    // Send the new blog back to the Home component using the passed onNewBlog function
    if (onNewBlog) {
      onNewBlog(newBlog); // Call the function passed from Home
    }
  
    // Reset the form data
    setFormData({
      title: '',
      description: '',
      tags: '',
      image: null
    });
  };

  return (
    <div className="w-full min-h-screen bg-[#1a1a1a] flex flex-col justify-center items-center py-10">
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
            <label htmlFor="image" className="text-white text-lg mb-2 block">Upload Image</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleFileChange}
              className="w-full p-3 bg-[#202020] text-white rounded-lg"
              accept="image/*"
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



//



// import React, { useState } from 'react';

// const NewBlog = ({ onNewBlog }) => {  
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     tags: '',
//     image: null
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, image: e.target.files[0] });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newBlog = {
//       title: formData.title,
//       description: formData.description,
//       tags: formData.tags.split(',').map(tag => tag.trim()),  
//       image: {
//         src: URL.createObjectURL(formData.image), 
//         alt: formData.title
//       },
//       author: {
//         name: 'User',
//         image: 'https://via.placeholder.com/150',  
//         date: new Date().toLocaleDateString()
//       }
//     };

//     if (typeof onNewBlog === 'function') {
//       onNewBlog(newBlog);  
//     }

//     setFormData({
//       title: '',
//       description: '',
//       tags: '',
//       image: null
//     });
//   };

//   return (
//     <div className="w-full md:h-screen bg-[#1a1a1a] flex flex-col justify-center items-center py-10">
//       <div className="w-[90%] max-w-7xl bg-[#101010] rounded-lg shadow-lg p-6">
//         <h1 className="text-3xl font-extrabold text-white mb-6">Create a New Blog Post</h1>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label htmlFor="title" className="text-white text-lg mb-2 block">Blog Title</label>
//             <input
//               type="text"
//               id="title"
//               name="title"
//               value={formData.title}
//               onChange={handleChange}
//               className="w-full p-3 bg-[#202020] text-white rounded-lg"
//               placeholder="Enter blog title"
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="description" className="text-white text-lg mb-2 block">Blog Description</label>
//             <textarea
//               id="description"
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               className="w-full p-3 bg-[#202020] text-white rounded-lg"
//               placeholder="Enter blog description"
//               rows="4"
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="tags" className="text-white text-lg mb-2 block">Blog Tags</label>
//             <input
//               type="text"
//               id="tags"
//               name="tags"
//               value={formData.tags}
//               onChange={handleChange}
//               className="w-full p-3 bg-[#202020] text-white rounded-lg"
//               placeholder="Enter tags separated by commas"
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="image" className="text-white text-lg mb-2 block">Upload Image</label>
//             <input
//               type="file"
//               id="image"
//               name="image"
//               onChange={handleFileChange}
//               className="w-full p-3 bg-[#202020] text-white rounded-lg"
//               accept="image/*"
//               required
//             />
//           </div>

//           <div className="flex justify-center">
//             <button
//               type="submit"
//               className="bg-[#f96c00] text-white text-lg font-bold py-3 px-6 rounded-lg mt-4"
//             >
//               Submit Blog
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default NewBlog;
