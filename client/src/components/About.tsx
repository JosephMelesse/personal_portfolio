import TerminalTitleBar from "./TerminalTitleBar";

const commands = [
    { cmd: "whoami", output: ["Joseph Melesse"] },
    { cmd: "echo $SCHOOL", output: [ "Cerritos College  ->  UC (transfer in progress)"]},
    { cmd: "cat skills.md", output: ["# Skills", "- TypeScript / React", "- Node.js / Express", "- Python", "- C++ / Arduino", "- Tailwind CSS"] },
    { cmd: "echo $LOCATION", output: ["Los Angeles, California"] },
];

export default function About() {

    return (
        <section className="my-12 mx-auto max-w-2xl border border-edge bg-crust font-mono text-sm leading-relaxed">
            <TerminalTitleBar title="~/about" />
            <div className="p-4">
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
                    <span className="ml-1 inline-block w-2 animate-pulse">█</span>
                </div>
            </div>
        </section>
    );
}
