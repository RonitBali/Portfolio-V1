import { useEffect, useState } from "react";

const Navbar = () => {
  // Track if the device is mobile
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Check if the device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Run on mount and whenever window size changes
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    // Clean up
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <nav
      id="home"
      className={`${isMobile ? 'relative' : 'fixed'} top-4 left-1/2 -translate-x-1/2 z-50 px-4 w-full flex justify-center`}
    >
      <div className="max-w-[90%] md:max-w-fit">
        <ul
          className="flex flex-wrap justify-center text-sm sm:text-base md:text-xl font-semibold gap-4 sm:gap-6 text-gray-200 
          bg-gray-900/80 border border-gray-700 backdrop-blur-md shadow-xl 
          rounded-full px-6 sm:px-10 md:px-12 py-3 sm:py-4 font-sans transition-all"
        >
          <li className="cursor-pointer hover:text-gray-300 transition duration-200 ease-in-out transform hover:scale-105">
            <a href="#about">About</a>
          </li>

          <li className="cursor-pointer hover:text-gray-300 transition duration-200 ease-in-out transform hover:scale-105">
            <a href="#work">Work</a>
          </li>

          <li className="cursor-pointer hover:text-gray-300 transition duration-200 ease-in-out transform hover:scale-105">
            <a href="mailto:balironit@gmail.com?subject=Inquiry&body=Hello Ronit,">Contact</a>
          </li>

          <li className="cursor-pointer hover:text-gray-300 transition duration-200 ease-in-out transform hover:scale-105">
            <a
              href="https://drive.google.com/file/d/1DgUCnskShnV3BB7B28y8p5XmukteYOHS/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;