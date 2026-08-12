import { IoMdArrowDropright } from "react-icons/io";

interface ProjectCardProps {
    image: string;
    link: string;
    demoLink?: string;
    title: string;
    description: string;
    date: string;
    tech: string;
    reversed: boolean;
    responsibilities: string[];
}

export default function ProjectCard({title, tech, date, image, link, demoLink, description, responsibilities, reversed}: ProjectCardProps) {
    return (
        <div
            className={`flex flex-col gap-15 lg:flex-row lg:items-start ${
                reversed ? "lg:flex-row-reverse" : ""
            }`}
        >
            <div className="relative w-full md:w-[75%] md:self-center lg:w-[45%] lg:self-auto">
                {/* Blue square behind image */}
                <div className="absolute top-4 left-4 w-full h-full rounded-3xl bg-blue-500" />

                {/* Project image */}
                <img
                    src={image}
                    alt={title}
                    className="relative z-10 w-full rounded-3xl object-cover transition-transform duration-300 hover:-translate-y-2 hover:scale-105"
                />
            </div>
            <div className="flex w-full flex-col gap-6 lg:w-[55%]">
                <div className="flex flex-col gap-1">
                    <h1 className="text-2xl font-bold sm:text-3xl">{title}</h1>
                    <p className="text-base text-gray-500 sm:text-lg">{date}</p>
                </div>
                <div>
                    <p className="text-base text-gray-500 sm:text-lg">{tech}</p>
                </div>
                <p className="text-sm leading-7 text-slate-700 sm:text-base">{description}</p>
                <ul className="list-disc pl-5 mt-4 space-y-2 text-sm sm:text-base">
                    {responsibilities.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <div className="flex flex-col items-start gap-4">
                    <a href={link} className="flex text-lg font-semibold gap-2 items-center sm:text-xl"> Learn More <IoMdArrowDropright /> </a>
                    {demoLink && (
                        <a href={demoLink} className="flex text-lg font-semibold gap-2 items-center sm:text-xl"> Demo <IoMdArrowDropright /> </a>
                    )}
                </div>
            </div>
        </div>
    );
}