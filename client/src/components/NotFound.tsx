import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <section className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center gap-4 px-6 text-center">
            <h1 className="text-3xl font-semibold">404</h1>
            <p className="text-muted">Page not found.</p>
            <Link to="/" className="mt-8 inline-block w-fit border border-edge px-5 py-2 transition-colors hover:border-accent hover:text-accent">
                ← Back home
            </Link>
        </section>
    );
}
