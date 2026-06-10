import { Link } from "react-router-dom";
import type { Project } from "./Projects";

export default function ProjectCard({ name, description, image }: Project) {
    return (
        <Link to={`/projects/${name}`} className="group block w-full max-w-2xl">
            <section className="border border-edge bg-crust font-mono text-sm transition-colors group-hover:bg-surface">
                <div className="flex items-center gap-3 border-b border-edge px-3 py-2">
                    <span className="flex gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-edge" />
                        <span className="h-2.5 w-2.5 rounded-full bg-edge" />
                        <span className="h-2.5 w-2.5 rounded-full bg-edge" />
                    </span>
                    <span className="truncate text-muted transition-colors group-hover:text-accent">
                        ~/projects/{name}
                    </span>
                </div>
                <div className="flex items-start gap-4 p-4">
                    <p className="leading-relaxed">{description}</p>
                    <img
                        className="shrink-0 self-center border border-edge"
                        src={image}
                        alt={name}
                        width={80}
                    />
                </div>
            </section>
        </Link>
    );
}
