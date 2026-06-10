import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
    return (
        <div className="my-12 flex flex-col items-center gap-6 px-4">
            {projects.map((project) => (
                <ProjectCard key={project.name} {...project} />
            ))}
        </div>
    );
}
