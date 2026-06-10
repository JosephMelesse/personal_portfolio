import { useState } from "react";

const email = "josephmelesse3@gmail.com";

export default function Footer() {
    const [copied, setCopied] = useState(false);

    const copyEmail = async () => {
        await navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div id="contact">
            <h2 className="sr-only">Contact</h2>
            <section className="mx-auto my-12 max-w-2xl border border-edge bg-crust p-4 font-mono text-sm leading-relaxed">
                <div>
                    <span className="font-bold text-accent">~ $</span> cat contact.txt
                </div>
                <ul className="mt-1 space-y-1">
                    <li>
                        github: {" "}
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
                        linkedin: {" "}
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
                        email: {" "}
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
            </section>
            <footer className="flex justify-center px-6 py-4 border-t border-edge text-muted">
                © 2026 All rights reserved.
            </footer>
        </div>
    );
}
