import { useState } from "react";
import TerminalTitleBar from "./TerminalTitleBar";

const email = "josephmelesse3@gmail.com";

export default function Footer() {
    const [copied, setCopied] = useState(false);

    const copyEmail = async () => {
        await navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div id="contact" className="px-4">
            <h2 className="sr-only">Contact</h2>
            <section className="mx-auto my-12 max-w-2xl border border-edge bg-crust font-mono text-sm leading-relaxed">
                <TerminalTitleBar title="~/contact" />
                <div className="p-4">
                    <div>
                        <span className="font-bold text-accent">~ $</span> ls -l
                    </div>
                    <ul className="mt-1 space-y-1">
                        <li>
                            github <span className="text-muted">{"->"}</span>{" "}
                            <a
                                className="text-link hover:underline"
                                href="https://github.com/JosephMelesse"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                JosephMelesse
                            </a>
                        </li>
                        <li>
                            linkedin <span className="text-muted">{"->"}</span>{" "}
                            <a
                                className="text-link hover:underline"
                                href="https://www.linkedin.com/in/joseph-m-420333329/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Joseph Melesse
                            </a>
                        </li>
                        <li>
                            email <span className="text-muted">{"->"}</span>{" "}
                            <a className="text-link hover:underline" href={`mailto:${email}`}>
                                {email}
                            </a>
                            {" "}
                            <button
                                onClick={copyEmail}
                                className="ml-2 cursor-pointer border border-edge px-1 text-xs transition-colors hover:bg-surface"
                            >
                                {copied ? "copied!" : "copy"}
                            </button>
                        </li>
                    </ul>
                </div>
            </section>
            <footer className="flex justify-center px-6 py-4 border-t border-edge text-muted">
                © 2026 All rights reserved.
            </footer>
        </div>
    );
}
