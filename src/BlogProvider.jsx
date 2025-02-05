import { createContext, useContext, useEffect, useState } from "react";


const BlogContext = createContext();

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlog must be used within a BlogProvider");
  }
  return context;
};

const initialData = [
  {
    id: 1,
    image: { src: "https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=500", alt: "Lightning Icon" },
    tags: ["DEPLOYMENT", "DEVTOOLS", "SASS"],
    title: "Compiling CSS With Vite and Lightning CSS",
    description: `
      Are partials the only thing keeping you writing CSS in Sass? With a little configuration, it’s possible to compile partial CSS files without a Sass dependency. Vite and Lightning CSS are here to make the process even smoother and faster. These tools allow for an optimized development workflow, with a minimal configuration required.

      The combination of Vite’s lightning-fast bundling and Lightning CSS’s powerful optimization capabilities can significantly improve the performance of your front-end development. As CSS grows more complex, having tools like these makes it easier to manage and compile your stylesheets. The reduction in build time and the ability to work with pure CSS rather than relying on Sass makes it an ideal solution for teams looking to streamline their development process.

      Whether you're working on a small project or a large-scale application, implementing Vite and Lightning CSS can improve your efficiency and lead to faster loading times for users. This shift is crucial as front-end performance becomes a critical factor in providing an optimal user experience.
    `,
    author: { name: "Ryan Trimble", image: "https://picsum.photos/200", date: "Feb 3, 2025" }
  },
  {
    id: 2,
    image: { src: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?w=500", alt: "Coding Icon" },
    tags: ["JAVASCRIPT", "REACT", "FRONTEND"],
    title: "Why React is Still the Best UI Library in 2025",
    description: `
      React continues to dominate front-end development due to its component-based architecture and large community. With its declarative approach, React allows developers to build reusable UI components that simplify the development process. This has led to its widespread adoption and continued success, especially as applications become more complex.
      One of the major reasons React remains so popular is its robust ecosystem. From hooks to context, React has introduced a number of powerful features that make it even easier to manage state and handle side effects in applications. This is enhanced by the fact that React is supported by a vast number of libraries, such as React Router and Redux, which extend its functionality and make it even more adaptable to different use cases
      In 2025, React's community continues to grow, with more developers contributing and creating new tools. This makes it a highly supported library, which is crucial when working on enterprise-level applications. The constant evolution of the React ecosystem ensures that it remains the best choice for developers looking to build scalable, efficient, and high-performance user interfaces.
    `,
    author: { name: "Jane Doe", image: "https://picsum.photos/200", date: "Jan 10, 2025" }
  },
  {
    id: 3,
    image: { src: "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D", alt: "NodeJS Icon" },
    tags: ["NODEJS", "EXPRESSJS", "BACKEND"],
    title: "Building Scalable Applications with Node.js and Express",
    description: `
      Node.js and Express.js have become a popular combination for building scalable and efficient backend applications. The event-driven, non-blocking architecture of Node.js allows for the development of highly concurrent applications that can handle thousands of connections at once. Express.js, a minimalistic framework built on top of Node.js, simplifies routing, middleware handling, and other essential backend functionalities.
      One of the key advantages of using Node.js and Express is its ability to handle I/O-heavy tasks efficiently. This makes it ideal for applications that require real-time data processing, such as chat applications or live notifications. With the ability to scale horizontally across multiple servers, Node.js and Express can handle growing user traffic without significant performance degradation.
      The combination of Node.js and Express.js, along with the use of asynchronous programming, enables developers to build applications that can process a large volume of requests simultaneously. This scalability and performance are crucial for applications that need to support large user bases or handle high amounts of data, making this stack one of the most popular choices for backend development.
    `,
    author: { name: "John Smith", image: "https://picsum.photos/200", date: "Jan 15, 2025" }
  }
];


export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {

    const savedBlogs = localStorage.getItem("blogs");

    if (savedBlogs) {
      setBlogs(JSON.parse(savedBlogs));
    } else {
     
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

