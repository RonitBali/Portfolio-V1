
import React from 'react'



const Navbar = () => {
  
  
  return (
   <nav className='px-26 py-20'>
     <div className='flex flex-row justify-center  '>
      <ul className='flex flex-row text-xl font-bold gap-4 text-gray-200 border backdrop-blur-lg shadow-lg border-gray-700 rounded-3xl px-10 py-3 font-sans'>
       <li className='cursor-pointer hover:text-gray-300'>Home</li>
       <li  className='cursor-pointer hover:text-gray-300'>Work</li>
       <li className='cursor-pointer hover:text-gray-300'>About</li>
       <li className='cursor-pointer hover:text-gray-300'>Resume</li>
       </ul>
     </div>
   </nav>
  )
}

export default Navbar