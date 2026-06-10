import { Link } from "react-router-dom";

export default function Home() {
    return (
        <main className="mx-auto flex min-h-[70vh] max-w-2xl flex-col justify-center px-6">
            <h1 className="text-3xl font-semibold">Joseph Melesse</h1>
            <p className="mt-2 text-lg text-muted">Software developer.</p>

            <p className="mt-6 max-w-prose leading-relaxed">
                I build web apps in TypeScript and React, tools in Python, and
                {" "}the occasional piece of hardware in C++. Here to show what
                {" "}I've made and how I think.
            </p>

            <Link to="/projects" className="mt-8 inline-block w-fit border border-edge px-5 py-2 transition-colors hover:border-accent hover:text-accent">
                View my work →
            </Link>
        </main>
    );
}