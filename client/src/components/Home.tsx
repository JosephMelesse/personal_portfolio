import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="mx-auto flex min-h-[70vh] max-w-2xl flex-col justify-center px-6">
            <h1 className="text-3xl font-semibold">I'm Joseph Melesse</h1>
            <p className="mt-2 text-lg text-muted">Computer Science major</p>

            <p className="mt-6 max-w-prose leading-relaxed">
                I like building tools that help people learn faster,
                 stay organized, and make better use of their time.
            </p>

            <Link to="/projects" className="mt-8 inline-block w-fit border border-edge px-5 py-2 transition-colors hover:border-accent hover:text-accent">
                View my work →
            </Link>
        </div>
    );
}
