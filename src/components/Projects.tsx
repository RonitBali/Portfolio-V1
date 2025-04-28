import { ExternalLink } from 'lucide-react';
import SpotlightCard from './ui/Spotlight-card';

// #181D27
const Projects = () => {
    const projects = [
        {
            title: "ValoDex",
            description: "A comprehensive Valorant agent database and guide",
            src: "/Projects/valodex.png",
            link: "https://valo-dex.vercel.app",
            tags: ["React", "API", "JavaScript"]
        },
        // {
        //     title: "Random Password Generator",
        //     description: "Generate secure passwords with customizable options",
        //     src: "/Projects/rpg.png",
        //     link: "https://password-generator-flax-six.vercel.app",
        //     tags: ["JavaScript", "CSS", "Security"]
        // },
        {
            title:"Ani-Newz",
            description: "Stay updated with the latest anime news and browse your favorite anime titles",
            src:"./Projects/ani-newz.png",
            link:"https://ani-newz.vercel.app",
            tags:["React","Jikan API","Firebase","Auth"]
        },
        {
            title:"Github Battle",
            description: "Challenge friends to a 1v1 GitHub battle and share the results on Twitter",
            src:"./Projects/gitbattle.png",
            link:"https://gitbattlehub.vercel.app",
           "tags": ["GitHub API", "JavaScript","Gemini", "Twitter"]
        },
    ];

    return (
        <div id="work" className="px-4 sm:px-6 md:px-10 py-20">
            <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-12 md:mb-20 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                MY PROJECTS
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <SpotlightCard
                        key={index}
                        className="group backdrop-blur-sm bg-[#141924] bg-opacity-70 rounded-2xl border border-gray-800 p-5 sm:p-6 transition-all duration-300 "
                        spotlightColor="rgba(255, 255, 255, 0.1)"
                    >
                        <div className="space-y-6">
                            {/* Image */}
                            <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                                <img 
                                    src={project.src}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="space-y-4">
                                <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-gray-300 transition-colors">
                                    {project.title}
                                </h2>
                                <p className="text-gray-400 text-sm sm:text-base">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 text-xs sm:text-sm bg-gray-800/50 text-gray-300 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Link */}
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/link flex items-center gap-2 w-fit mt-3 text-white/90 hover:text-white transition-colors"
                                >
                                    <span className="font-semibold">View Project</span>
                                    <ExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                                </a>
                            </div>
                        </div>
                    </SpotlightCard>
                ))}
            </div>
        </div>
    );
};

export default Projects;
