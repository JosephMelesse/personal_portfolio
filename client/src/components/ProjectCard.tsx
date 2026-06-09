import { useState } from 'react';
import type { Project } from "./Projects";
import PopUp from "./PopUp";

export default function ProjectCard({ name, description, link, image }: Project) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <section
                className="m-4 cursor-pointer border transition-colors hover:bg-gray-200"
                onClick={() => setIsOpen(true)}
            >
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

            <PopUp
                isOpen={isOpen}
                name={name}
                description={description}
                image={image}
                link={link}
                onClose={() => setIsOpen(false)}
            />
        </>
    );
}