import { FloatingNav } from './ui/floating-navbar'
import React from 'react'
import { HomeIcon, InfoIcon, PhoneIcon } from "lucide-react";


const Navbar = () => {
  const navItems = [
    { name: "Home", link: "/", icon: <HomeIcon size={18} /> },
    { name: "About", link: "/about", icon: <InfoIcon size={18} /> },
    { name: "Contact", link: "/contact", icon: <PhoneIcon size={18} /> },
  ];
  
  return (
   <nav>
      <FloatingNav navItems={navItems}/>
   </nav>
  )
}

export default Navbar