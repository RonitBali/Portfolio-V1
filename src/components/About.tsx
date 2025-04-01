import SpotlightCard from "./ui/Spotlight-card"

const About = () => {
  return (
    <div id="about" className="flex flex-col justify-center items-center px-4">
      <h1 className="text-5xl font-medium mb-24 font-sans text-center">
        ABOUT ME
      </h1>

      <SpotlightCard className="w-[50vw] h-[30rem] bg-[#051014]/70 rounded-xl mb-28 flex flex-col sm:flex-row items-center gap-4 p-4">
        
        {/* Image Section */}
        <div className="w-full sm:w-1/2 h-1/2 sm:h-full flex justify-center items-center">
          <img 
            src="/Projects/me.png" 
            alt="Profile" 
            className="w-40 sm:w-full h-auto object-cover rounded-xl"
          />
        </div>

        {/* Content Section */}
        <div className="w-full sm:w-2/3 p-4 text-lg font-medium text-center sm:text-left">
          <p>
            "Hey Folks! I am Ronit, a Frontend Developer, Game Developer, and Video Editor. 
            I love building intuitive and visually appealing web experiences using modern technologies like 
            React, and Tailwind CSS. Besides coding, I enjoy fitness, gaming, and watching anime. Let’s build something awesome together!"
          </p>
        </div>

      </SpotlightCard>
    </div>
  )
}

export default About;
