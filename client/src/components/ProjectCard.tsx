import { useState } from 'react';
import type { Project } from "./Projects";
import PopUp from "./PopUp";

export default function ProjectCard({ name, description, link, image }: Project) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <section
                className="cursor-pointer border transition-colors hover:bg-gray-200"
                onClick={() => setIsOpen(true)}
            >
                <div className="border-b">
                    {name}
                </div>
                <div className="flex items-start gap-4">
                    <p className="h-28 w-64 overflow-hidden p-4 wrap-break">
                        {description}
                    </p>
                    <img src={image} alt={name} width={60} height={60} />
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