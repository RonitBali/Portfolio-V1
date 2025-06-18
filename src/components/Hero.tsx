import { useEffect, useState } from "react";
import { Spotlight } from "./ui/Spotlight";
import { ColourfulText } from "./ui/Colourfull-text";


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
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 sm:px-6 md:px-12 lg:px-24">

      {/* Background Particles */}
      {/* <div className="absolute inset-0 w-full h-[100vh] -z-10">
        <Particles
          particleColors={["#d3c6d7", "#d3c6d7"]}
          particleCount={200}
          particleSpread={12}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div> */}

      {/* Spotlight Effects */}
      <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
      <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl p-4 sm:p-6 md:p-10 rounded-lg -top-8 sm:mt-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">
          I'm a{" "}
          <span className={`inline-block transition-opacity duration-500 ${fade ? "opacity-0" : "opacity-100"}`}>
            <ColourfulText>{words[index]}</ColourfulText>
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mt-4 sm:mt-6">
          Blending technology and creativity, I design responsive web interfaces and visually stunning digital experiences.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button
            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] w-full sm:w-auto"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              View My Work
            </span>
          </button>

          <button
            onClick={() => window.open("https://www.linkedin.com/in/ronit-bali-xe/", "_blank")}
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] w-full sm:w-auto"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Hire Me
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
