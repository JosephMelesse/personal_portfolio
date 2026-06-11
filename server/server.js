import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();

const app = express();

// Only the deployed frontend and local dev may call this API
const ALLOWED_ORIGINS = [
    "https://josephmelesse.netlify.app",
    "http://localhost:5173",
];
app.use(cors({ origin: ALLOWED_ORIGINS }));
app.use(express.json());

const QUERIES = ["dog", "mountain", "coffee", "city", "ocean", "forest", "sunset", "cat"];

app.get("/api/random-image", async (req, res) => {
    try {
        // 1. Pick a random query from the fixed list
        const query = QUERIES[Math.floor(Math.random() * QUERIES.length)];

        // 2. Fetch one image from Pexels for that query (random page for variety)
        const page = Math.floor(Math.random() * 30) + 1;
        const imageRes = await fetch(
            `https://api.pexels.com/v1/search?query=${query}&per_page=1&page=${page}`,
            { headers: { Authorization: process.env.PEXELS_API_KEY } }
        );

        if (!imageRes.ok) throw new Error(`Pexels request failed: ${imageRes.status}`);

        const imageData = await imageRes.json();
        const imageUrl = imageData.photos?.[0]?.src?.medium;
        if (!imageUrl) throw new Error("No image found for query");

        // 3. Ask an AI to caption it, using the query as the prompt input
        const captionRes = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: [
                    { role: "user", content: `Write a short, fun one-line caption for a photo of: ${query}` },
                ],
            }),
        });

        if (!captionRes.ok) throw new Error(`AI request failed: ${captionRes.status}`);

        const captionData = await captionRes.json();
        const caption = captionData.choices?.[0]?.message?.content?.trim() ?? "No caption generated.";

        // 4. Send both back to the frontend as one JSON response
        res.json({ imageUrl, caption, query });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch image or caption." });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
