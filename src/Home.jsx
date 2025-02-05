// import React from 'react';

// const jsonData = {
//   "articles": [
//     {
//       "image": {
//         "src": "https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D0",
//         "alt": "Lightning Icon"
//       },
//       "tags": ["DEPLOYMENT", "DEVTOOLS", "SASS"],
//       "title": "Compiling CSS With Vite and Lightning CSS",
//       "description": "Are partials the only thing keeping you writing CSS in Sass? With a little configuration, it’s possible to compile partial CSS files without a Sass dependency. Ryan Trimble has the details.",
//       "author": {
//         "name": "Ryan Trimble",
//         "image": "https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
//         "date": "Feb 3, 2025"
//       }
//     },
//     {
//       "image": {
//         "src": "https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0fGVufDB8fHx8fHww%3D",
//         "alt": "Tech Innovation"
//       },
//       "tags": ["JAVASCRIPT", "REACT", "WEB DEVELOPMENT"],
//       "title": "Mastering React with Hooks",
//       "description": "React hooks have become an essential part of React development. Learn how to leverage hooks for better state management and cleaner code. Jane Doe shares her experience.",
//       "author": {
//         "name": "Jane Doe",
//         "image": "https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
//         "date": "Jan 25, 2025"
//       }
//     },
//     {
//       "image": {
//         "src": "https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlvZ3xlbnwwfHwwfHx8MA%3D%3D",
//         "alt": "UI/UX Design"
//       },
//       "tags": ["DESIGN", "UI/UX", "WEB DESIGN"],
//       "title": "The Future of UI/UX Design in Web Development",
//       "description": "UI/UX design is evolving rapidly. How can designers stay ahead of the curve? Join leading designer Alex Smith as he explores the future trends in UI/UX design.",
//       "author": {
//         "name": "Alex Smith",
//         "image": "https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
//         "date": "Dec 10, 2024"
//       }
//     }
//   ]
// };

// const Home = () => {
//   const { articles } = jsonData; 

//   return (
//     <div>
//       <main className="flex-1 flex justify-center items-center py-10">
//         <div className="w-[90%] max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {articles.map((article, index) => (
//             <div key={index} className="rounded-lg overflow-hidden shadow-lg bg-[#101010] text-white">
            
//               <img src={article.image.src} alt={article.image.alt} className="w-full h-auto object-cover" />

    
//               <div className="p-6">
  
//                 <div className="flex space-x-4 mb-4">
//                   {article.tags.map((tag, index) => (
//                     <span key={index} className="text-[#f96c00] text-sm font-bold">{tag}</span>
//                   ))}
//                 </div>


//                 <h2 className="text-2xl font-extrabold leading-snug mb-4">{article.title}</h2>


//                 <p className="text-gray-300 text-base leading-relaxed mb-6">{article.description}</p>


//                 <div className="flex items-center space-x-4">
//                   <img src={article.author.image} alt="Author" className="rounded-full w-12 h-12 shadow-md" />
//                   <div>
//                     <p className="text-white font-medium text-sm">{article.author.name}</p>
//                     <p className="text-gray-400 text-sm">{article.author.date}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Home;






// //



// import { useEffect, useState } from 'react';
// import NewBlog from './NewBlog';

// const initialData = [
//   {
//     "image": {
//       "src": "https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
//       "alt": "Lightning Icon"
//     },
//     "tags": ["DEPLOYMENT", "DEVTOOLS", "SASS"],
//     "title": "Compiling CSS With Vite and Lightning CSS",
//     "description": "Are partials the only thing keeping you writing CSS in Sass? With a little configuration, it’s possible to compile partial CSS files without a Sass dependency. Ryan Trimble has the details.",
//     "author": {
//       "name": "Ryan Trimble",
//       "image": "https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
//       "date": "Feb 3, 2025"
//     }
//   },
//   {
//     "image": {
//       "src": "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nfGVufDB8fDB8fHww",
//       "alt": "Coding Icon"
//     },
//     "tags": ["JAVASCRIPT", "REACT", "FRONTEND"],
//     "title": "Why React is Still the Best UI Library in 2025",
//     "description": "React continues to dominate front-end development due to its component-based architecture and large community. Learn why developers still prefer React over other frameworks.",
//     "author": {
//       "name": "Jane Doe",
//       "image": "https://randomuser.me/api/portraits/women/44.jpg",
//       "date": "Jan 10, 2025"
//     }
//   }
// ];

// const Home = () => {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     const savedBlogs = JSON.parse(localStorage.getItem('blogs'));

//     if (savedBlogs) {
//       setArticles(savedBlogs); // Load stored blogs if available
//     } else {
//       localStorage.setItem('blogs', JSON.stringify(initialData)); // Store initial blogs if first visit
//       setArticles(initialData);
//     }
//   }, []);

//   const handleNewBlog = (newBlog) => {
//     const updatedBlogs = [...articles, newBlog];
//     setArticles(updatedBlogs);
//     localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
//   };

//   const handleDeleteBlog = (index) => {
//     const updatedBlogs = articles.filter((_, i) => i !== index);
//     setArticles(updatedBlogs);
//     localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
//   };

//   return (
//     <div>
//       <main className="flex-1 flex justify-center items-center py-10">
//         <div className="w-[90%] max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {articles.map((article, index) => (
//             <div key={index} className="rounded-lg overflow-hidden shadow-lg bg-[#101010] text-white">
//               <img src={article.image.src} alt={article.image.alt} className="w-full h-auto object-cover" />
//               <div className="p-6">
//                 <h2 className="text-2xl font-extrabold leading-snug mb-4">{article.title}</h2>
//                 <p className="text-gray-300 text-base leading-relaxed mb-6">{article.description}</p>
//                 <button 
//                   onClick={() => handleDeleteBlog(index)} 
//                   className="bg-red-500 text-white px-4 py-2 rounded mt-4">
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>
//       <NewBlog onNewBlog={handleNewBlog} />
//     </div>
//   );
// };

// export default Home;

// import { useBlog } from "./BlogProvider";
// import BlogActions from "./BlogActions";
// import NewBlog from "./NewBlog"; // Import NewBlog
// import { useState } from "react";

// const Home = () => {
//   const { blogs, addBlog } = useBlog();
//   const [isCreating, setIsCreating] = useState(false); // State to toggle visibility of the NewBlog component

//   const handleNewBlog = (newBlog) => {
//     addBlog(newBlog); // Add new blog to state
//     setIsCreating(false); // Close the NewBlog form after submission
//   };

//   return (
//     <main className="flex-1 flex flex-col items-center py-10 space-y-10">
//       {/* Cards Section */}
//       <div className="w-[90%] max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//         {blogs.map((blog, index) => (
//           <div
//             key={blog.id || index}
//             className="rounded-lg overflow-hidden shadow-lg bg-[#101010] text-white"
//           >
//             <img
//               src={blog.image.src}
//               alt={blog.image.alt}
//               className="w-full h-auto object-cover"
//             />
//             <div className="p-6">
//               <h2 className="text-2xl font-extrabold leading-snug mb-4">{blog.title}</h2>
//               <p className="text-gray-300 text-base leading-relaxed mb-6">{blog.description}</p>
//               <BlogActions blog={blog} />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Create New Blog Section */}
//       <div className="w-[90%] max-w-7xl">
//         {!isCreating ? (
//           <button
//             onClick={() => setIsCreating(true)}
//             className="bg-[#f96c00] text-white py-2 px-4 rounded-lg"
//           >
//             Create New Blog
//           </button>
//         ) : (
//           <NewBlog onNewBlog={handleNewBlog} />
//         )}
//       </div>
//     </main>
//   );
// };

// export default Home;



// import { useBlog } from "./BlogProvider";
// import BlogActions from "./BlogActions";
// import { useState } from "react";
// import NewBlog from "./NewBlog"

// const Home = () => {
//   const { blogs } = useBlog();
//   const [isCreating, setIsCreating] = useState(false);

//   // const handleNewBlog = (newBlog) => {
//   //   addBlog(newBlog); // Add new blog to state

//   // };

//   return (
//     <main className="flex-1 flex justify-center items-center py-10">
//       <div className="w-[90%] max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//         {blogs.map((blog, index) => (
//           <div key={blog.id || index} className="rounded-lg overflow-hidden shadow-lg bg-[#101010] text-white">
//             <img src={blog.image.src} alt={blog.image.alt} className="w-full h-auto object-cover" />
//             <div className="p-6">
//               <h2 className="text-2xl font-extrabold leading-snug mb-4">{blog.title}</h2>
//               <p className="text-gray-300 text-base leading-relaxed mb-6">{blog.description}</p>
//               <BlogActions blog={blog} />
//             </div>
//           </div>
//         ))}
//       </div>
//     {/* <NewBlog onNewBlog={handleNewBlog}/> */}
//     </main>
//   );
// };

// export default Home;

{/* <div className="w-[90%] max-w-7xl">
{!isCreating ? (
  <button
    onClick={() => setIsCreating(true)}
    className="bg-[#f96c00] text-white py-2 px-4 rounded-lg"
  >
    Create New Blog
  </button>
) : (
  <NewBlog onNewBlog={handleNewBlog} />
)}
</div> */}


// import { Link } from 'react-router-dom';
// import { useBlog } from './BlogProvider';
// import BlogActions from './BlogActions';

// const Home = () => {
//   const { blogs } = useBlog();

//   return (
//     <main className="flex-1 flex justify-center items-center py-10">
//       <div className="w-[90%] max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//         {blogs.map((blog, index) => (
//           <div key={blog.id || index} className="rounded-lg overflow-hidden shadow-lg bg-[#101010] text-white">
//             <img src={blog.image.src} alt={blog.image.alt} className="w-full h-auto object-cover" />
//             <div className="p-6">
//               <h2 className="text-2xl font-extrabold leading-snug mb-4">{blog.title}</h2>
//               <p className="text-gray-300 text-base leading-relaxed mb-6">{blog.description}</p>
//               <BlogActions blog={blog} />
//             </div>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// };

// export default Home;


// import { Link } from 'react-router-dom';
// import { useBlog } from './BlogProvider'; // Assuming you have a BlogProvider to manage the state of blogs

// const Home = () => {
//   const { blogs } = useBlog();

//   return (
//     <main className="flex-1 flex justify-center items-center py-10">
//       <div className="w-[90%] max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//         {blogs.map((blog, index) => (
//           <div key={blog.id || index} className="rounded-lg overflow-hidden shadow-lg bg-[#101010] text-white">
//             <img src={blog.image.src} alt={blog.image.alt} className="w-full h-auto object-cover" />
//             <div className="p-6">
//               <h2 className="text-2xl font-extrabold leading-snug mb-4">{blog.title}</h2>
//               <p className="text-gray-300 text-base leading-relaxed mb-6">{blog.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// };

// export default Home;

import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useBlog } from './BlogProvider';

const Home = () => {
  const { blogs } = useBlog();

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <main className="flex-1 flex justify-center items-center py-10">
      <div className="w-[90%] max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog, index) => (
          <div key={blog.id || index} className="rounded-lg overflow-hidden shadow-lg bg-[#101010] text-white">
            <Link to={`/blog/${blog.id}`} className="block"> {/* Link to the blog detail page */}
              <img src={blog.image.src} alt={blog.image.alt} className="w-full h-auto object-cover" />
              <div className="p-6 flex flex-col justify-between h-[350px]"> {/* Set a fixed height for the card */}
                <h2 className="text-2xl font-extrabold leading-snug mb-4">{blog.title}</h2>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                  {truncateText(blog.description, 150)} {/* Truncate the description to 150 characters */}
                </p>

                {/* Display Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {blog.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-sm text-[#f96c00] bg-[#222222] py-1 px-3 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;


