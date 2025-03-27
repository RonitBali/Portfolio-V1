
import { Github, Linkedin, Mail } from 'lucide-react';
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className='flex flex-col md:flex-row justify-between items-center px-6 py-4 text-gray-300'>
      
      {/* Copyright Text */}
      <div className="text-xl font-mono">
        <p>© {new Date().getFullYear()} Ronit Bali.</p>
      </div>

      {/* Social Icons */}
      <div className="flex gap-6 mt-3 md:mt-0 ">
        <a href="https://github.com/RonitBali" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
          <Github className="w-6 h-6" />
        </a>
        <a href="mailto:balironit@gmail.com?subject=Inquiry&body=Hello Ronit,"  target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
          <Mail className="w-6 h-6" />
        </a>
        <a href="https://www.linkedin.com/in/ronit-bali-xe/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
          <Linkedin className="w-6 h-6" />
        </a>
        <a href="https://x.com/BaliRonit" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
          <BsTwitterX className="w-6 h-6" />
        </a>
      </div>

    </footer>
  )
}

export default Footer;
