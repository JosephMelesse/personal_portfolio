import { useState, useEffect } from "react";
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

// commands are created inside the component so the dynamic `date` output can use component state


export default function About() {

    const [message, setMessage] = useState('Fetching date...');

    useEffect(() => {
        const fetchDate = async () => {
            try {
                const res = await fetch(`${API_URL}/`);
                const data = await res.text();
                setMessage(data);
            } catch {
                setMessage('Error fetching date');
            }
        };
        fetchDate();
    }, []);

    const commands = [
        { cmd: "whoami", output: ["Joseph Melesse"] },
        { cmd: "cat about.txt", output: ["Developer. Tinkerer. Currently building things on the web."] },
        { cmd: "echo $SCHOOL", output: [ "Cerritos College  ->  UC (transfer in progress)"]},
        { cmd: "cat skills.md", output: ["# Skills", "- TypeScript / React", "- Tailwind CSS", "- Node.js"] },
        { cmd: "echo $LOCATION", output: ["Somewhere, Earth"] },
        { cmd: "date", output: [message] }
    ];

    return (
        <section className="mx-auto my-12 max-w-2xl border p-4 font-mono text-sm leading-relaxed">
            {commands.map(({ cmd, output }, i) => (
                <div key={i} className={i === 0 ? "" : "mt-4"}>
                    <span className="font-bold">~ $</span> {cmd}
                    {output.map((line, j) => (
                        <p key={j}>{line}</p>
                    ))}
                </div>
            ))}

            <div className="mt-4">
                <span className="font-bold">~ $</span>
                <span className="ml-1 inline-block w-2 animate-pulse">_</span>
            </div>
        </section>
    );
}