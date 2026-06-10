import { Link } from "react-router-dom";
import type { Project } from "../data/projects";
import TerminalTitleBar from "./TerminalTitleBar";

export default function ProjectCard({ name, description, image }: Project) {
    return (
        <Link to={`/projects/${name}`} className="group block w-full max-w-2xl">
            <section className="border border-edge bg-crust font-mono text-sm transition-colors group-hover:bg-surface">
                <TerminalTitleBar
                    title={`~/projects/${name}`}
                    titleClassName="transition-colors group-hover:text-accent"
                />
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
