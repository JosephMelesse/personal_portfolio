const commands = [
    { cmd: "whoami", output: ["Joseph Melesse"] },
    { cmd: "cat about.txt", output: ["Developer. Tinkerer. Currently building things on the web."] },
    { cmd: "echo $SCHOOL", output: [ "Cerritos College  ->  UC (transfer in progress)"]},
    { cmd: "cat skills.md", output: ["# Skills", "- TypeScript / React", "- Tailwind CSS", "- Node.js"] },
    { cmd: "echo $LOCATION", output: ["Somewhere, Earth"] },
];

export default function About() {

    return (
        <section className="my-12 mx-auto max-w-2xl border border-edge bg-crust p-4 font-mono text-sm leading-relaxed">
            {commands.map(({ cmd, output }, i) => (
                <div key={i} className={i === 0 ? "" : "mt-4"}>
                    <span className="font-bold text-accent">~ $</span> {cmd}
                    {output.map((line, j) => (
                        <p key={j}>{line}</p>
                    ))}
                </div>
            ))}

            <div className="mt-4">
                <span className="font-bold text-accent">~ $</span>
                <span className="ml-1 inline-block w-2 animate-pulse">_</span>
            </div>
        </section>
    );
}