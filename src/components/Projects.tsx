import { ExternalLink } from 'lucide-react';
import SpotlightCard from './ui/Spotlight-card';

const Projects = () => {
    const projects = [
        {
            title: "ValoDex",
            description: "A comprehensive Valorant agent database and guide",
            src: "/Projects/valodex.png",
            link: "https://valo-dex.vercel.app",
            tags: ["React", "API", "JavaScript"]
        },
        {
            title: "Random Password Generator",
            description: "Generate secure passwords with customizable options",
            src: "/Projects/rpg.png",
            link: "https://password-generator-flax-six.vercel.app",
            tags: ["JavaScript", "CSS", "Security"]
        },
        
    ];

    return (
        <div >
            <h1 className="text-center text-5xl font-bold mb-20 font-sans bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                MY PROJECTS
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <SpotlightCard
                        key={index}
                        className="group backdrop-blur-sm bg-gray-700/70 rounded-2xl border border-gray-800 p-6 transition-all duration-300 hover:border-gray-700"
                        spotlightColor="rgba(255, 255, 255, 0.1)"
                    >
                        <div className="space-y-6">
                            <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                                <img 
                                    src={project.src} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                            </div>
                            
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-white group-hover:text-gray-300 transition-colors">
                                    {project.title}
                                </h2>
                                <p className="text-gray-400">
                                    {project.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, idx) => (
                                        <span 
                                            key={idx}
                                            className="px-3 py-1 text-sm bg-gray-800/50 text-gray-300 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/link flex items-center gap-2 w-fit mt-4 text-white/90 hover:text-white transition-colors"
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