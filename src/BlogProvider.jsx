import { createContext, useContext, useEffect, useState } from "react";

// Define the BlogContext
const BlogContext = createContext();

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlog must be used within a BlogProvider");
  }
  return context;
};

// Initial data that will be used as the default blogs if no data is present in localStorage
const initialData = [
  {
    id: 1,
    image: { src: "https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=500", alt: "Lightning Icon" },
    tags: ["DEPLOYMENT", "DEVTOOLS", "SASS"],
    title: "Compiling CSS With Vite and Lightning CSS",
    description: "Are partials the only thing keeping you writing CSS in Sass? With a little configuration, it’s possible to compile partial CSS files without a Sass dependency.",
    author: { name: "Ryan Trimble", image: "https://plus.unsplash.com/photo-1720744786849-a7412d24ffbf?w=500", date: "Feb 3, 2025" }
  },
  {
    id: 2,
    image: { src: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?w=500", alt: "Coding Icon" },
    tags: ["JAVASCRIPT", "REACT", "FRONTEND"],
    title: "Why React is Still the Best UI Library in 2025",
    description: "React continues to dominate front-end development due to its component-based architecture and large community.",
    author: { name: "Jane Doe", image: "https://randomuser.me/api/portraits/women/44.jpg", date: "Jan 10, 2025" }
  }
];

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Try to get saved blogs from localStorage
    const savedBlogs = localStorage.getItem("blogs");

    if (savedBlogs) {
      // Parse the saved blogs and set them
      console.log("Blogs found in localStorage", savedBlogs);
      setBlogs(JSON.parse(savedBlogs));
    } else {
      // If no blogs are found, set the initial data
      console.log("No blogs found in localStorage, using initial data");
      setBlogs(initialData);
      localStorage.setItem("blogs", JSON.stringify(initialData)); // Store initial data in localStorage
    }
  }, []);

  const addBlog = (newBlog) => {
    const updatedBlogs = [...blogs, { ...newBlog, id: Date.now() }];
    setBlogs(updatedBlogs);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs)); // Update localStorage with the new list
  };

  const updateBlog = (id, updatedBlog) => {
    const updatedBlogs = blogs.map((blog) => (blog.id === id ? { ...blog, ...updatedBlog } : blog));
    setBlogs(updatedBlogs);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs)); // Update localStorage with the updated list
  };

  const deleteBlog = (id) => {
    const updatedBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(updatedBlogs);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs)); // Update localStorage after deletion
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog, updateBlog, deleteBlog }}>
      {children}
    </BlogContext.Provider>
  );
};

