import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import NewBlogPage from './NewBlogPage';
import Header from './Header'; // Import the Header component
import { BlogProvider } from './BlogProvider'; // Ensure BlogProvider wraps all routes
import EditDelete from './EditDelete';
import BlogDetail from './BlogDetail';
import Contact from './Contact';


const App = () => {
  return (
    <BlogProvider>
      <Router>
        <div className="w-full min-h-screen bg-[#1a1a1a] flex flex-col">
          <Header /> {/* Header component rendered here, above Routes */}
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home page */}
            <Route path="/new-blog" element={<NewBlogPage />} /> {/* NewBlog page */}
            <Route path="/edit-blog" element={<EditDelete/>}/>
            <Route path="/blog/:blogId" element={<BlogDetail />} />
            <Route path="/contact" element ={<Contact/>} />
          </Routes>
        </div>
      </Router>
    </BlogProvider>
  );
};

export default App;
