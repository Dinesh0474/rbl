import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Header = () => {
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
                    <button className="text-white p-2 sm:hidden">
                        <i className="fas fa-search"></i>
                    </button>
                </header>
            </div>
        </>
    );
}

export default Header;