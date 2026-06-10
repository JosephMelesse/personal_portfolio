import { Link } from "react-router-dom";
import { useState } from "react";

const links = [
    { label: "About", to: "/about" },
    { label: "Projects", to: "/projects" },
    { label: "Demo", to: "/demo"},
    { label: "Contact", to: "#contact" },
];

function scrollToContact(event: React.MouseEvent) {
    event.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed inset-x-0 top-0 z-50 border-b border-edge bg-crust px-6 py-4">
            <div className="flex items-center justify-between">
                <Link to="/" className="font-medium text-accent">
                    Joseph Melesse
                </Link>

                <ul className="hidden gap-6 sm:flex">
                    {links.map((link) => (
                        <li key={link.to}>
                            {link.to.startsWith("#") ? (
                                <a href={link.to} onClick={scrollToContact}>{link.label}</a>
                            ) : (
                                <Link to={link.to}>{link.label}</Link>
                            )}
                        </li>
                    ))}
                </ul>

                <button
                    className="sm:hidden"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                    aria-expanded={open}
                >
                    {open ? "✕" : "☰"}
                </button>
            </div>

            {open && (
                <ul className="mt-4 flex flex-col gap-4 sm:hidden">
                    {links.map((link) => (
                        <li key={link.to}>
                            {link.to.startsWith("#") ? (
                                <a
                                    href={link.to}
                                    onClick={(event) => {
                                        scrollToContact(event);
                                        setOpen(false);
                                    }}
                                >
                                    {link.label}
                                </a>
                            ) : (
                                <Link to={link.to} onClick={() => setOpen(false)}>
                                    {link.label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}