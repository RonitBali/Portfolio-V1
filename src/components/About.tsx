import SpotlightCard from "./ui/Spotlight-card"

const About = () => {
  return (
    <div id="about" className="flex flex-col justify-center items-center px-4">
      <h1 className="text-center text-4xl sm:text-5xl font-bold mb-12 sm:mb-20 font-sans bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
        ABOUT ME
      </h1>

      <SpotlightCard className="w-full sm:w-[50vw] h-auto sm:h-[30rem] bg-[#0d0e0f] bg-opacity-70 rounded-xl mb-16 sm:mb-28 flex flex-col sm:flex-row items-center gap-6 p-6 sm:p-4">
        
        {/* Image Section */}
        <div className="w-full sm:w-1/2 flex justify-center items-center">
          <img 
            src="/Projects/me.png" 
            alt="Profile" 
            className="w-36 sm:w-full h-auto object-cover rounded-xl"
          />
        </div>

        {/* Content Section */}
        <div className="w-full sm:w-2/3 text-sm sm:text-lg font-medium text-center sm:text-left text-gray-300 leading-relaxed">
          <p>
            "Hey Folks! I am <strong className="text-white">Ronit</strong>, a Frontend Developer, Game Developer, and Video Editor. 
            I love building intuitive and visually appealing web experiences using modern technologies like{" "}
            <strong className="text-white">React</strong> and <strong className="text-white">Tailwind CSS</strong>. 
            Besides coding, I enjoy fitness, gaming, and watching anime. Let’s build something awesome together!"
          </p>
        </div>

      </SpotlightCard>
    </div>
  )
}

export default About;
