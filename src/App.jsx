// import './App.css'
// import Home from './Home'
// import Header from './Header'
// import { BlogProvider } from './BlogProvider'


// function App() {
  

//   return (
//     <>
//     <div className="w-full min-h-screen  bg-[#1a1a1a] flex flex-col">
//       <BlogProvider>
//         <Header/>
//         <Home/>
//       </BlogProvider>
    
//     </div>
//     </>
//   )
// }

// export default App

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import NewBlogPage from './NewBlogPage';
import Header from './Header'; // Import the Header component
import { BlogProvider } from './BlogProvider'; // Ensure BlogProvider wraps all routes

const App = () => {
  return (
    <BlogProvider>
      <Router>
        <div className="w-full min-h-screen bg-[#1a1a1a] flex flex-col">
          <Header /> {/* Header component rendered here, above Routes */}
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home page */}
            <Route path="/new-blog" element={<NewBlogPage />} /> {/* NewBlog page */}
          </Routes>
        </div>
      </Router>
    </BlogProvider>
  );
};

export default App;
