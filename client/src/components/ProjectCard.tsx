import { Link } from "react-router-dom";
import type { Project } from "./Projects";

export default function ProjectCard({ name, description, image }: Project) {
    return (
        <Link to={`/projects/${name}`} className="block">
            <section className="m-4 cursor-pointer border transition-colors hover:bg-gray-200">
                <div className="border-b">
                    {name}
                </div>
                <div className="flex items-start gap-4">
                    <p className="overflow-hidden p-4 wrap-break">
                        {description}
                    </p>
                    <img className="self-center shrink-0" src={image} alt={name} width={80} />
                </div>
            </section>
        </Link>
    );
}
