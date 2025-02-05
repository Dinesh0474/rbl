import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); 
    };

    const closeMenu = () => {
        setIsMenuOpen(false); 
    };

    return (
        <>
            <div>
                <header className="bg-[#101010] py-3 px-8 flex justify-between items-center text-white shadow-md">
                    <div className="flex items-center space-x-3">
                        <span className="text-lg font-bold tracking-wide">DINESH-BLOGS</span>
                    </div>
                    <nav className="hidden sm:flex space-x-6 text-sm font-medium">
                        <Link to="/" className="hover:text-gray-400">BLOGS</Link>
                        <Link to="/new-blog" className="hover:text-gray-400">CREATE BLOG</Link>
                        <Link to="/edit-blog" className="hover:text-gray-400">EDIT BLOG</Link>
                        <Link to="/contact" className="hover:text-gray-400">CONTACT</Link>
                    </nav>
                    <button 
                        onClick={toggleMenu} 
                        className="sm:hidden text-white p-2"
                    >
                        <i className="fas fa-bars text-white"></i> 
                    </button>
                </header>
                {isMenuOpen && (
                    <nav className="sm:hidden flex flex-col space-y-4 bg-[#101010] py-4 px-8 absolute top-0 right-0 w-full text-center text-white">
                     
                        <button onClick={closeMenu} className="text-white text-2xl absolute top-4 right-4">
                            <i className="fas fa-times"></i> 
                        </button>
                        <Link to="/" className="hover:text-gray-400">BLOGS</Link>
                        <Link to="/new-blog" className="hover:text-gray-400">CREATE BLOG</Link>
                        <Link to="/edit-blog" className="hover:text-gray-400">EDIT BLOG</Link>
                        <Link to="/contact" className="hover:text-gray-400">CONTACT</Link>
                    </nav>
                )}
            </div>
        </>
    );
}

export default Header;
