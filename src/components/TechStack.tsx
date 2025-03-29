
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { FaReact, FaUnity, FaCss3Alt, FaHtml5, FaGitAlt, FaNpm } from "react-icons/fa";
import {  SiTailwindcss, SiFirebase, SiAdobeaftereffects, SiCanva } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { PiFileCppFill } from "react-icons/pi";

const TechStack = () => {
  interface TechIconProps {
    Icon: React.ComponentType<{ className?: string }>;
    name: string;
    color: string;
  }

  const TechIcon: React.FC<TechIconProps> = ({ Icon, name, color }) => (
    <div className="flex flex-col items-center w-20 space-y-2 group">
      <Icon className={`text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-200 ${color}`} />
      <span className="text-sm text-gray-300">{name}</span>
    </div>
  );

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[60vh] px-6">
      <h3 className="text-5xl font-semibold  text-center text-white font-sans mt-9">Technologies I Use</h3>

      <CardContainer className="flex justify-center w-full h-full ">
        <CardBody className="relative dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[32rem] h-auto rounded-xl p-6 border bg-gray-50 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
          <CardItem translateZ="50" className="text-lg font-bold text-neutral-600 dark:text-white mb-4">
            <h1 className="text-3xl pb-4 text-center font-mono">Tech Stack</h1>
            <div className="flex flex-wrap justify-center gap-5">
              <TechIcon Icon={FaHtml5} name="HTML" color="text-orange-500" />
              <TechIcon Icon={FaCss3Alt} name="CSS" color="text-blue-600" />
              <TechIcon Icon={IoLogoJavascript} name="JavaScript" color="text-yellow-300" />
              <TechIcon Icon={FaReact} name="React" color="text-blue-500" />
              <TechIcon Icon={SiTailwindcss} name="TailwindCSS" color="text-cyan-400" />
              <TechIcon Icon={FaGitAlt} name="Git" color="text-orange-400" />
              <TechIcon Icon={PiFileCppFill} name="C++" color="text-blue-400" />
              <TechIcon Icon={SiFirebase} name="Firebase" color="text-yellow-500" />
              <TechIcon Icon={FaUnity} name="Unity" color="text-gray-400" />
              <TechIcon Icon={SiCanva} name="Canva" color="text-blue-400" />
              <TechIcon Icon={SiAdobeaftereffects} name="AfterEffects" color="text-indigo-400" />
              <TechIcon Icon={FaNpm} name="npm" color="text-red-400" />
            </div>
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  );
};

export default TechStack;
