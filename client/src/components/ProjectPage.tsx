import { useParams, Link } from "react-router-dom";
import { projects } from "./Projects";

export default function ProjectPage() {
    const { name } = useParams();
    const project = projects.find((project) => project.name === name);

    if (!project) {
        return (
            <div className="flex flex-col items-center gap-4 p-8">
                <p>Project not found.</p>
                <Link to="/projects" className="text-blue-600 hover:underline">
                    Back to projects
                </Link>
            </div>
        );
    }

    return (
        <div className="mx-auto w-full max-w-2xl p-6 sm:p-8">
            <div className="flex justify-between">
                <h2 className="mb-4 text-2xl font-bold">{project.name}</h2>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    GitHub
                </a>
            </div>
            <p className="mb-6">{project.overview}</p>
            <ul className="mb-6 list-disc space-y-2 pl-5">
                {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                ))}
            </ul>
            <div className="mb-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                    <span key={tech} className="rounded border px-2 py-1 text-sm">
                        {tech}
                    </span>
                ))}
            </div>
            <img src={project.image} alt={project.name} className="w-full object-contain" />
        </div>
    );
}
