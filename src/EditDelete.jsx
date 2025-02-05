import { Link } from 'react-router-dom';
import { useBlog } from './BlogProvider';
import BlogActions from './BlogActions'; // Assuming BlogActions has edit and delete functionality

const EditDelete = () => {
  const { blogs, deleteBlog } = useBlog(); // Assuming you have a deleteBlog method in your BlogProvider

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
            <img src={blog.image.src} alt={blog.image.alt} className="w-full h-auto object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-extrabold leading-snug mb-4">{blog.title}</h2>
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                  {truncateText(blog.description, 150)} {/* Truncate the description to 150 characters */}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {blog.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-sm text-[#f96c00] bg-[#222222] py-1 px-3 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              {/* Here we render the BlogActions for edit and delete functionality */}
              <BlogActions blog={blog} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default EditDelete;
