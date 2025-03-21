import React from 'react'
import { cn } from "../lib/util";
import { Spotlight } from './ui/Spotlight'
import { ColourfulText } from './ui/Colourfull-text';
import { TextGenerateEffect } from './ui/text-generate';
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";



const Hero = () => {


  return (

    // HERO CONTENT
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
      <div className='text-6xl text-center'>
        <h1 className=' text-white-200'>I'm a  <ColourfulText
          text='Developer.|'
        /></h1>
        <p className='text-lg'>
          Passionate about crafting immersive gaming experiences, sleek web interfaces, and engaging visuals.
        </p>
        <div className='flex gap-3 justify-center mt-5'>
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              View My Work
            </span>
          </button>
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Hire Me
            </span>
          </button>
        </div>

        {/* TECH STACK CARD*/}
        <div >
          <h3>Technologies I Use</h3>
          <CardContainer className="inter-var flex flex-row w-70">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-sm font-bold text-neutral-600 dark:text-white "
              >
               


              </CardItem>
            </CardBody>
          </CardContainer>
        </div>

      </div>

    </div>




  )
}

export default Hero