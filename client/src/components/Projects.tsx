import ProjectCard from "./ProjectCard";
import edugotchi_img from "../assets/edugotchi.jpg";
import mesa_ready_img from "../assets/mesa_ready.png";
import ankivert_img from "../assets/ankivert.png";

export type Project = {
    name: string;
    description: string;
    overview: string;
    highlights: string[];
    tech: string[];
    image: string;
    link: string;
};

export const projects: Project[] = [
    {
        name: "edugotchi",
        description: "A hackathon-built ESP32-S3 desk pet and educational alarm clock. To dismiss the alarm, you answer AI-generated quiz questions using a dial.",
        overview: "Built in a weekend at IdeaHacks. A pixel-art creature lives on a small OLED screen and reacts to how you tilt and shake the device. Shake it (or trigger its alarm remotely) and it starts quizzing you, and the only way to make it stop is to answer five questions correctly.",
        highlights: [
            "Answer with a physical dial: turn a potentiometer to highlight an option, hold for 1.5 seconds to lock it in.",
            "Questions are generated on the fly by a Node server calling the OpenAI API, with a built-in fallback set for when there's no connection.",
            "The server adapts difficulty over time based on how well you're doing.",
            "A parent dashboard shows learning streaks, overall accuracy, and per-subject performance.",
        ],
        tech: ["ESP32-S3", "Arduino C++", "Node.js", "OpenAI API"],
        image: edugotchi_img,
        link: "https://github.com/JosephMelesse/edugotchi"
    },
    {
        name: "ankivert",
        description: "A Python TUI that converts Obsidian markdown notes into Anki flashcards and syncs them through AnkiConnect, without creating duplicates on re-runs.",
        overview: "I take notes in Obsidian but study in Anki, and copying cards over by hand got old fast. ankivert scans a vault for cards written in a simple Q:/A: syntax and pushes them straight into Anki.",
        highlights: [
            "Your vault's folder structure becomes your deck structure: each subdirectory is a deck, each markdown file a nested subdeck.",
            "A persistent ledger remembers what's already been synced, so re-running it updates existing cards instead of duplicating them.",
            "An optional allowlist restricts scanning to just the folders you choose.",
            "Comes with a test suite covering the parser and sync logic.",
        ],
        tech: ["Python 3.12", "Textual TUI", "AnkiConnect"],
        image: ankivert_img,
        link: "https://github.com/JosephMelesse/ankivert"
    },
    {
        name: "mesa_ready",
        description: "A transfer readiness checker for Cerritos College students applying to UC engineering and CS majors, built on scraped ASSIST.org articulation data.",
        overview: "Figuring out which UC transfer requirements you've actually met means digging through ASSIST.org agreements one course at a time. Mesa Ready does it instantly: enter the courses you've taken (or plan to take), pick a target major, and see what's done and what's missing.",
        highlights: [
            "Checks your courses against real articulation agreements for UCI, UCLA, UCSD, and Berkeley engineering and CS majors.",
            "Includes a full Cal-GETC general education breakdown alongside the major requirements.",
            "A Python scraper pulls the 2025–2026 agreements from ASSIST.org into a single SQLite database.",
        ],
        tech: ["React 19", "TypeScript", "Express 5", "SQLite", "Python"],
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
