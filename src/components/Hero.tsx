import React from 'react'
import { cn } from "../lib/util";
import { Spotlight } from './ui/Spotlight'
import { ColourfulText } from './ui/Colourfull-text';
import { BackgroundBeams } from './ui/Background-beams';

const Hero = () => {
  return (
    <div className='pb-20 pt-36 bg-black-100'>
    
        <div>
          
          <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
        </div>
        {/* <div className="relative flex h-screen w-full items-center justify-center bg-white dark:bg-black-100">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
     
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"></div> */}
      <div className='text-7xl text-center'>
        
      <h1 className=' text-white-200'>Hello I am A </h1>
      <ColourfulText
      text='Developer'
      
      />
      
      
      </div>
      
    </div>
 

      
  
  )
}

export default Hero