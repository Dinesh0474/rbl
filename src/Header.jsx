import React from "react";

const Header = () => {
    return(
        <>
         <div >
         <header className="bg-[#101010] py-3 px-8 flex justify-between items-center text-white shadow-md">
            <div className="flex items-center space-x-3">
               <span className="text-lg font-bold tracking-wide">DINESH-BLOGS</span>
            </div>
            <nav className="hidden sm:flex space-x-6 text-sm font-medium">
               <a href="#" className="hover:text-gray-400">ARTICLES</a>
               <a href="#" className="hover:text-gray-400">NOTES</a>
               <a href="#" className="hover:text-gray-400">LINKS</a>
               <a href="#" className="hover:text-gray-400">GUIDES</a>
            </nav>
            <button className="text-white p-2 sm:hidden">
               <i className="fas fa-search"></i>
            </button>
          </header> 
         </div>

        </>
    )
}


export default Header