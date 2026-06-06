import type { Project } from "./Projects";

export default function ProjectCard({ name, description, link, image }: Project) {
    return(
        <section className="border">
            <div className="border-b">
                    <a className="text-blue-600 hover:underline" href={link} target="_blank" rel="noopener noreferrer">
                        {name}
                    </a>
            </div> 
            <div className="flex items-start gap-4">
                <p className="w-64 h-28 overflow-hidden wrap-break-word">
                    {description}
                    <br/>
                    <a className="text-blue-600 hover:underline" href={link} target="_blank" rel="noopener noreferrer">{name}</a>
                </p>
                <img src={image} alt={name} width={60} height={60}/>
            </div>
        </section>
    );
}