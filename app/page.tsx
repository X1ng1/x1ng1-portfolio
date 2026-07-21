import { FaGithub, FaLinkedin } from "react-icons/fa";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./data/projects"

export default function Page() {
  return (
    <div className="w-screen h-screen flex overflow-hidden">
      {/* Left Sidebar */}
      <div className="w-1/4 h-screen flex flex-col p-6 bg-orange-500 gap-20 text-white">
        <div className="flex flex-col items-center gap-10">
          <img src="hatsune.jpg" alt="pfp" width={200} height={200} className="rounded-full" />
          <div>
            <h1 className="text-center text-5xl font-thin">JESSICA CHEN</h1>
          </div>
          <div className="text-[17px]">
            <p>
              Hi, I'm Jessica, a recent Computer Science graduate from Hunter College with a minor in Mathematics.
              I'm passionate about full-stack web development and machine learning, and I enjoy building applications
              that combine intuitive user experiences with AI. My projects have explored computer vision, natural
              language processing, and modern web technologies, and I'm always excited to tackle new technical 
              challenges and continue growing as a software engineer.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-5">
            <h2 className="text-2xl">LINKS</h2>
            <a href="https://github.com/X1ng1" className="flex items-center gap-2 hover:text-taupe-500">
              <FaGithub size={24} />
              <span>GitHub - X1ng1</span>
            </a>
            <a href="http://www.linkedin.com/in/jessica-chen-062ab3217" className="flex items-center gap-2 hover:text-taupe-500">
              <FaLinkedin size={24} />
              LinkedIn
            </a>
          </div>
          <div className="flex flex-col items-center gap-5">
            <h2 className="text-2xl">CONTACT INFO</h2>
            <p>chenjessicany@gmail.com</p>
            <p>&#40;929&#41;363-8020</p>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="flex-1 h-screen overflow-y-auto">
        <div className="w-full p-5">
          <h1 className="text-5xl font-bold m-12">PROJECTS</h1>
          <div className="m-10 flex flex-col gap-30">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                date={project.date}
                tech={project.tech}
                image={project.image}
                link={project.link}
                description={project.description}
                responsibilities={project.responsibilities}
                reversed={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
