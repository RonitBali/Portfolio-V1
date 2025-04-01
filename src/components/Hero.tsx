import { useEffect, useState } from "react";
import { Spotlight } from "./ui/Spotlight";
import { ColourfulText } from "./ui/Colourfull-text";
import Particles from "./ui/Particles";

const Hero = () => {

  const words = ["Developer.|", "Gamer.|", "Designer.|", "Editor.|"];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
        setFade(false);
      }, 100);
    }, 4000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[80vh] px-6">

      {/* Particles Background */}
      <div className="absolute inset-0 w-full h-[100vh] -z-10">
        <Particles
          particleColors={["#d3c6d7", "#d3c6d7"]}
          particleCount={200}
          particleSpread={12}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          className=""
        />
      </div>

      {/* Spotlight Effects */}
      <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
      <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      {/* <Spotlight className="right-[-10vw] top-28 h-[80vh] w-[50vw]" fill="purple" /> */}

      {/* Hero Content (Foreground) */}
      <div className="relative top-12 z-10 text-center max-w-4xl p-10 rounded-lg">
        <h1 className="text-6xl font-extrabold text-white">
          I'm a{" "}
          <span className={`inline-block transition-opacity duration-500 ${fade ? "opacity-0" : "opacity-100"}`}>
            <ColourfulText>{words[index]}</ColourfulText>
          </span>
        </h1>
        <p className="text-lg text-gray-300 mt-4">
          Passionate about crafting immersive gaming experiences, sleek web interfaces, and engaging visuals.
        </p>


        {/* Buttons */}
        <div className="flex gap-4 justify-center mt-8 ">
          <button
            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px]">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              View My Work
            </span>
          </button>
          <button
           onClick={() => window.open("https://www.linkedin.com/in/ronit-bali-xe/", "_blank")} 
           className="ml-5  relative inline-flex h-12 overflow-hidden rounded-full p-[1px] ">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-10 py-5 text-sm font-medium text-white backdrop-blur-3xl">
              Hire Me
            </span>
          </button>
        </div>
        {/* <div className="flex gap-4 justify-center mt-8">
          {["View My Work", "Hire Me"].map((text, index) => (
            <button
              key={index}
              className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-md font-medium text-white backdrop-blur-3xl transition-transform duration-300 hover:scale-105">
                {text}
              </span>
            </button>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
