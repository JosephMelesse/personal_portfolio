import { useState } from "react";

const API_URL:string = "https://personal-portfolio-u22y.onrender.com/api/random-image";

export default function Demo() {
    // 1. Track the fetched result, loading status, and any error
    const [data, setData] = useState<{ imageUrl: string; caption: string } | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // 2. On button press: reset state, call the backend, store image + caption
    async function generate() {
        setLoading(true);
        setError("");
        try {
            const res = await fetch(API_URL);
            if (!res.ok) throw new Error("Request failed");
            const json = await res.json();
            setData(json);
        } catch {
            setError("Something went wrong. Try again.");
        } finally {
            setLoading(false);
        }
    }

    // 3. Render the button, then conditionally the loading / error / result
    return (
        <main className="mx-auto max-w-xl px-6 py-16 text-center">
            <h1 className="text-2xl font-semibold">Random Image + AI Caption</h1>
            <p className="mt-2 text-sm">Press the button to generate an image and an AI-written caption.</p>

            <button
                onClick={generate}
                disabled={loading}
                className="mt-6 border px-5 py-2 disabled:opacity-50"
            >
                {loading ? "Generating…" : "Generate"}
            </button>

            {error && <p className="mt-6 text-sm">{error}</p>}

            {data && !loading && (
                <figure className="mt-8">
                    <img src={data.imageUrl} alt={data.caption} className="mx-auto border" />
                    <figcaption className="mt-3 text-sm italic">{data.caption}</figcaption>
                </figure>
            )}
        </main>
    );
}