import ProjectCard from "./components/ProjectCard";
import { projects } from "./data/projects";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Page2() {
  return (
    <div className="relative">

      {/* Top / Hero Section */}
      <section className="relative z-20 min-h-screen rounded-b-[4rem] bg-gradient-to-b from-blue-950 to-sky-400 flex items-center justify-center px-6 py-12">
        <div className="flex flex-col items-center gap-6 text-white max-w-3xl text-center md:gap-10">
          <img src="/x1ng1-portfolio/hatsune.jpg" alt="pfp" width={220} height={220} className="rounded-full w-40 h-40 object-cover md:w-56 md:h-56" />
          <div>
            <h1 className="text-4xl font-thin sm:text-5xl md:text-6xl">JESSICA CHEN</h1>
          </div>
          <div className="max-w-xl text-sm leading-7 text-slate-100 sm:text-base md:text-lg">
            <p>
              Hi! I'm Jessica, a recent Computer Science graduate from Hunter College.
              I have hands-on experience building full-stack applications and creating intuitive,
              user-focused experiences. I am experienced in developing web applications across the
              frontend and backend using React, TypeScript, Node.js, Python, and SQL. In my personal
              and professional projects, I have also explored incorporating machine learning into applications
              to enrich and improve user experiences.
            </p>
          </div>
          <div className="flex flex-col items-center gap-10">
            <div className="flex flex-col items-center gap-5">
              <h2 className="text-2xl">LINKS</h2>
              <div className="flex flex-row items-center gap-8">
                <a href="https://github.com/X1ng1" className="flex items-center gap-2 hover:text-taupe-500">
                  <FaGithub size={24} />
                  <span>GitHub - X1ng1</span>
                </a>
                <a href="http://www.linkedin.com/in/jessica-chen-062ab3217" className="flex items-center gap-2 hover:text-taupe-500">
                  <FaLinkedin size={24} />
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center gap-5">
              <h2 className="text-2xl">CONTACT INFO</h2>
              <p>chenjessicany@gmail.com</p>
              <p>&#40;929&#41;363-8020</p>
            </div>
          </div>
        </div>
      </section>

      {/* Duck Section */}
      <section className="h-screen sticky top-0">
        <div className="absolute inset-0 bg-[url('/x1ng1-portfolio/duck.png')] bg-cover bg-center" />
      </section>

      {/* Projects Section */}
      <section className="relative z-20 -mt-[30vh] min-h-screen bg-white rounded-t-[4rem]">
        <div className="w-full px-5 py-10 md:px-10">
          <h1 className="text-4xl font-bold m-0 text-center sm:text-5xl md:text-left md:ml-6">
            PROJECTS
          </h1>

          <div className="mt-10 flex flex-col gap-50">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                date={project.date}
                tech={project.tech}
                image={project.image}
                link={project.link}
                demoLink={project.demoLink}
                description={project.description}
                responsibilities={project.responsibilities}
                reversed={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
