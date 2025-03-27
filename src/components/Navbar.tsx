import React from 'react';

const Navbar = () => {
  return (
    <nav className="mt-2 fixed top-4 left-1/2 transform -translate-x-1/2 w-full flex items-center justify-center z-50">
      <div className="flex justify-center">
        <ul className="flex flex-row text-xl font-semibold gap-6 text-gray-200 bg-gray-900/80 border border-gray-700 
          backdrop-blur-md shadow-xl rounded-full px-12 py-4 font-sans transition-all 
          animate-border-glow">
          <li className="cursor-pointer hover:text-gray-300 transition duration-200 ease-in-out hover:scale-105">
            Home
          </li>
          <li className="cursor-pointer hover:text-gray-300 transition duration-200 ease-in-out hover:scale-105">
            Work
          </li>
          <li className="cursor-pointer hover:text-gray-300 transition duration-200 ease-in-out hover:scale-105">
            About
          </li>
          <li className="cursor-pointer hover:text-gray-300 transition duration-200 ease-in-out hover:scale-105">
            Resume
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
