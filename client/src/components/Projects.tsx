import ProjectCard from "./ProjectCard";
import edugotchi_img from "../assets/edugotchi.jpg";
import mesa_ready_img from "../assets/mesa_ready.png";
import ankivert_img from "../assets/ankivert.png";

export type Project = {
    name: string;
    description: string;
    image: string;
    link: string;
};

const projects: Project[] = [
    {
        name: "edugotchi",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor magna aliqua",
        image: edugotchi_img,
        link: "https://github.com/JosephMelesse/edugotchi"
    },
    {
        name: "ankivert",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor magna aliqua",
        image: ankivert_img,
        link: "https://github.com/JosephMelesse/ankivert"
    },
    {
        name: "mesa_ready",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor magna aliqua",
        image: mesa_ready_img,
        link: "https://github.com/JosephMelesse/mesa_ready"
    },
];

export default function Projects() {
    return (
        <div className="flex flex-col gap-6 items-center">
            {projects.map((project) => (
                <ProjectCard key={project.name} {...project} />
            ))}
        </div>
    );
}