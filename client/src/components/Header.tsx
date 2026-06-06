import { useState } from "react";

const links = ["About", "Projects", "Contact"];

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="border-b px-6 py-4">
            <div className="flex items-center justify-between">
                <div className="font-medium">
                    Joseph Melesse
                </div>

                {/* Desktop links — hidden when narrow */}
                <ul className="hidden gap-6 sm:flex">
                    {links.map((link) => (
                        <li key={link}>{link}</li>
                    ))}
                </ul>

                {/* Hamburger — hidden when wide */}
                <button
                    className="sm:hidden"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                    aria-expanded={open}
                >
                    {open ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile dropdown — only renders when open, and only matters below sm */}
            {open && (
                <ul className="mt-4 flex flex-col gap-4 sm:hidden">
                    {links.map((link) => (
                        <li key={link}>
                            <a onClick={() => setOpen(false)}>{link}</a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}