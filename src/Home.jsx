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



import { useEffect,useState} from 'react';
import NewBlog from './NewBlog';

const Home = () => {
  // Your initial jsonData
  const initialData = {
    "articles": [
      {
        "image": {
          "src": "https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D0",
          "alt": "Lightning Icon"
        },
        "tags": ["DEPLOYMENT", "DEVTOOLS", "SASS"],
        "title": "Compiling CSS With Vite and Lightning CSS",
        "description": "Are partials the only thing keeping you writing CSS in Sass? With a little configuration, it’s possible to compile partial CSS files without a Sass dependency. Ryan Trimble has the details.",
        "author": {
          "name": "Ryan Trimble",
          "image": "https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
          "date": "Feb 3, 2025"
        }
      }
    ]
  };

  const [articles, setArticles] = useState(initialData.articles);

  // Function to add a new blog to the articles state
  const handleNewBlog = (newBlog) => {
    console.log('New Blog Data:', newBlog);  // Check the new blog data
    setArticles(prevArticles => [...prevArticles, newBlog]);
  };

  // useEffect to log the articles state when it changes
  useEffect(() => {
    console.log('Updated Articles:', articles);
  }, [articles]);  // This will run whenever 'articles' changes

  return (
    <div>
      {/* Pass handleNewBlog to NewBlog component */}
      <NewBlog onNewBlog={handleNewBlog} />

      <main className="flex-1 flex justify-center items-center py-10">
        <div className="w-[90%] max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((article, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg bg-[#101010] text-white">
              <img src={article.image.src} alt={article.image.alt} className="w-full h-auto object-cover" />
              <div className="p-6">
                <div className="flex space-x-4 mb-4">
                  {article.tags.map((tag, index) => (
                    <span key={index} className="text-[#f96c00] text-sm font-bold">{tag}</span>
                  ))}
                </div>
                <h2 className="text-2xl font-extrabold leading-snug mb-4">{article.title}</h2>
                <p className="text-gray-300 text-base leading-relaxed mb-6">{article.description}</p>
                <div className="flex items-center space-x-4">
                  <img src={article.author.image} alt="Author" className="rounded-full w-12 h-12 shadow-md" />
                  <div>
                    <p className="text-white font-medium text-sm">{article.author.name}</p>
                    <p className="text-gray-400 text-sm">{article.author.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;

