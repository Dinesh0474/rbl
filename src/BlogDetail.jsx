import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import { useBlog } from './BlogProvider'; 

const BlogDetail = () => {
  const { blogId } = useParams(); 
  const { blogs } = useBlog();
  const blog = blogs.find(b => b.id === parseInt(blogId, 10));

  if (!blog) {
    return <p>Blog not found</p>; 
  }
 const initialLikes = parseInt(localStorage.getItem(`likes-${blog.id}`)) || blog.likes || 0;
  const initialDislikes = parseInt(localStorage.getItem(`dislikes-${blog.id}`)) || blog.dislikes || 0;


  const [likes, setLikes] = useState(initialLikes);
  const [dislikes, setDislikes] = useState(initialDislikes);

  const handleLike = () => {
    const updatedLikes = likes + 1;
    setLikes(updatedLikes);
    localStorage.setItem(`likes-${blog.id}`, updatedLikes); 
  };

  const handleDislike = () => {
    const updatedDislikes = dislikes + 1;
    setDislikes(updatedDislikes);
    localStorage.setItem(`dislikes-${blog.id}`, updatedDislikes); 
  };

  useEffect(() => {

    localStorage.setItem(`likes-${blog.id}`, likes);
    localStorage.setItem(`dislikes-${blog.id}`, dislikes);
  }, [likes, dislikes, blog.id]);

  return (
    <div className="w-full min-h-screen bg-[#1a1a1a] flex flex-col justify-center items-center py-10">
      <div className="w-[90%] max-w-7xl bg-[#101010] rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-extrabold text-white mb-6">{blog.title} </h1>


        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <img src={blog.author.image} alt={blog.author.name} className="w-10 h-10 rounded-full mr-3" />
            <span className="text-white">{blog.author.name}</span>
          </div>
          <span className="text-gray-300">{blog.author.date}</span>
        </div>

 
        <img src={blog.image.src} alt={blog.image.alt} className="w-full h-96 object-cover mb-6" />

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white">Description:</h2>
          <p className="text-gray-300">{blog.description}</p>
        </div>

 
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white">Tags:</h2>
          <ul className="list-disc pl-5">
            {blog.tags.map((tag, index) => (
              <li key={index} className="text-gray-300">{tag}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6 flex items-center space-x-3">
          <button 
            onClick={handleLike} 
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
            Like {likes}
          </button>
          <button 
            onClick={handleDislike} 
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700">
            Dislike {dislikes}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
