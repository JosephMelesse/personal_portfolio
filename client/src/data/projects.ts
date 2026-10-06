import edugotchi_img from "../assets/edugotchi.jpg";
import mesa_ready_img from "../assets/mesa_ready.png";
import ankivert_img from "../assets/ankivert.png";
import kedami_img from "../assets/kedami.png";
import course_eater_img from "../assets/course_eater.png";

export type Project = {
    name: string;
    description: string;
    overview: string;
    highlights: string[];
    tech: string[];
    image?: string;
    link?: string;
};

export const projects: Project[] = [
    {
        name: "kedami",
        description: "A desktop app that turns a week's course material into one interactive lesson, sequenced so that finishing the lesson means the problem set is done.",
        overview: "Lecture notes, readings, and problem sets usually live in separate places, and working through them means jumping back and forth. Kedami takes all of it for a week, module, or exam and builds a single lesson grounded in that material. Each section teaches the concepts a problem needs, then has you solve it.",
        highlights: [
            "A staged pipeline ingests PDFs, images, and text, extracts the problems and concepts, plans the lesson order, and generates each section with Claude. Every stage writes to disk, so any one can be rerun alone.",
            "Stored answers are verified by an independent second solve, and math answers are checked with SymPy through a restricted parser.",
            "Supports math, physics, and data structures and algorithms (with LeetCode problems marked done in the app), plus a general mode for any other course.",
            "Hints, on-request step-by-step solutions, sandboxed interactive simulations, a Pomodoro timer, and a music player.",
            "Runs locally: a FastAPI server bound to 127.0.0.1 with a session token, and the only outbound traffic goes to the Anthropic API.",
        ],
        tech: ["Electron", "React 19", "TypeScript", "Python", "FastAPI", "SQLite", "SymPy", "Claude API"],
        image: kedami_img,
    },
    {
        name: "course-eater",
        description: "A team-built academic planning platform for UC Irvine students and counselors. I work on the planning engine and UCI exam credit data.",
        overview: "Course Eater helps students build four-year plans and helps counselors advise them, with prerequisite tracking and requirement checks. The team is rebuilding the original MVP as a multi-institution monorepo, starting with UCI.",
        highlights: [
            "Added UCI's IB credit chart and wired AP and IB exam credit into the planner, so GE requirements met by exam credit are checked off.",
            "Fixed the planning engine to count exam GE credit once alongside the courses it grants, and to match exam credit rules on exam kind.",
            "Covered the credit logic with tests in the planning engine and UCI integration packages.",
        ],
        tech: ["TypeScript", "React 19", "Express 5", "tRPC", "PostgreSQL", "Drizzle ORM", "Zod", "Vitest"],
        image: course_eater_img,
    },
    {
        name: "mesa_ready",
        description: "A transfer readiness checker for Cerritos College students applying to UC engineering and CS majors, built on scraped ASSIST.org articulation data.",
        overview: "Figuring out which UC transfer requirements you've actually met means digging through ASSIST.org agreements one course at a time. Mesa Ready does it instantly: enter the courses you've taken (or plan to take), pick a target major, and see what's done and what's missing.",
        highlights: [
            "Checks your courses against real articulation agreements for UCI, UCLA, UCSD, and Berkeley engineering and CS majors.",
            "Includes a full Cal-GETC general education breakdown alongside the major requirements.",
            "A Python scraper pulls the 2025-2026 agreements from ASSIST.org into MongoDB, with retries and timeouts on every request.",
            "Deployed with the frontend on Netlify, the API on Render, and the data in MongoDB Atlas.",
        ],
        tech: ["React 19", "TypeScript", "Tailwind CSS 4", "Express 5", "MongoDB", "Python"],
        image: mesa_ready_img,
        link: "https://github.com/JosephMelesse/mesa_ready"
    },
    {
        name: "ankivert",
        description: "A Python TUI that converts Obsidian markdown notes into Anki flashcards and syncs them through AnkiConnect, without creating duplicates on re-runs.",
        overview: "I take notes in Obsidian but study in Anki, and copying cards over by hand got old fast. ankivert scans a vault for cards written in a simple Q:/A: syntax and pushes them straight into Anki.",
        highlights: [
            "Your vault's folder structure becomes your deck structure: each subdirectory is a deck, each markdown file a nested subdeck.",
            "A persistent ledger remembers what's already been synced, so re-running it updates existing cards instead of duplicating them.",
            "Decks whose folders were removed from the vault are detected and cleaned out of Anki.",
            "An optional allowlist restricts scanning to just the folders you choose.",
            "Comes with a test suite covering the parser, ledger, and sync logic.",
        ],
        tech: ["Python 3.12", "Textual TUI", "AnkiConnect"],
        image: ankivert_img,
        link: "https://github.com/JosephMelesse/ankivert"
    },
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
];
