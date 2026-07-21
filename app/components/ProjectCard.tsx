import { IoMdArrowDropright } from "react-icons/io";

interface ProjectCardProps {
    image: string;
    link: string;
    title: string;
    description: string;
    date: string;
    tech: string;
    reversed: boolean;
    responsibilities: string[];
}

export default function ProjectCard({title, tech, date, image, link, description, responsibilities, reversed}: ProjectCardProps) {
    return (
        <div className={`flex items-center gap-10 ${reversed ? "flex-row-reverse" : "" }`}>
            <div className="relative inline-block flex-shrink-0 pt-15 pl-18">
                <div className="absolute top-0 left-0 w-9/10 h-9/10 bg-orange-500" />
                <img
                    src={image}
                    className="relative h-[480px] w-auto max-w-[720px]"
                />
            </div>
            <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-1">
                    <h1 className="text-2xl font-bold">{title}</h1>
                    <p className="text-lg text-gray-500">{date}</p>
                </div>
                <div>
                    <p className="text-lg text-gray-500">{tech}</p>
                </div>
                <p>{description}</p>
                <ul className="list-disc pl-5 mt-4 space-y-1">
                    {responsibilities.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <a href={link} className="flex text-xl font-semibold gap-2 items-center"> Learn More <IoMdArrowDropright /> </a>
            </div>
        </div>
    );
}