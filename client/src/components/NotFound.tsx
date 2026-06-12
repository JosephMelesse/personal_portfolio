import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <section className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center gap-4 px-6 text-center">
            <h1 className="text-3xl font-semibold">404</h1>
            <p className="text-muted">Page not found.</p>
            <Link to="/" className="text-link hover:underline">
                Back home
            </Link>
        </section>
    );
}
