const Navbar = () => {
  return (
    <nav id="home" className="mt-8 fixed top-4 left-1/2 transform -translate-x-1/2 w-full flex items-center justify-center z-50">
      <div className="flex justify-center">
        <ul className="flex flex-row text-xl font-semibold gap-6 text-gray-200 bg-gray-900/80 border border-gray-700 
          backdrop-blur-md shadow-xl rounded-full px-12 py-4 font-sans transition-all 
          animate-border-glow">

          {/* Wrap <a> inside <li> and apply hover effect to <li> */}
          <li className="cursor-pointer hover:text-gray-300 transition duration-200 ease-in-out transform hover:scale-105">
            <a href="#about">
              About
            </a>
          </li>

          <li className="cursor-pointer hover:text-gray-300 transition duration-200 ease-in-out transform hover:scale-105">
            <a href="#work" >
              Work
            </a>
          </li>

          <li className="cursor-pointer hover:text-gray-300 transition duration-200 ease-in-out transform hover:scale-105">
            <a href="mailto:balironit@gmail.com?subject=Inquiry&body=Hello Ronit," >
              Contact
            </a>
          </li>

          <li className="cursor-pointer hover:text-gray-300 transition duration-200 ease-in-out transform hover:scale-105">
            <a href="https://drive.google.com/file/d/1DgUCnskShnV3BB7B28y8p5XmukteYOHS/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
