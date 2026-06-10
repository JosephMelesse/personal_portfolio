# Personal Portfolio

My personal portfolio site, live at [josephmelesse.netlify.app](https://josephmelesse.netlify.app).

Terminal-themed (gruvbox), with my projects, an about page, and a demo page that fetches a random image and asks an AI to caption it.

## Stack

- **Frontend:** React 19, TypeScript, Vite, Tailwind CSS 4. Deployed on Netlify.
- **Backend:** Express 5 on Node. Deployed on Render. Talks to the Pexels and OpenAI APIs for the demo page.

## Running it locally

Frontend:

```bash
cd client
npm install
npm run dev
```

Backend:

```bash
cd server
npm install
npm run dev
```

You'll need a few environment variables:

- `client/.env`: `VITE_API_URL` (base URL of the backend, e.g. `http://localhost:3000`)
- `server/.env`: `PEXELS_API_KEY` and `OPENAI_API_KEY`

Node 20+ is required (Vite won't start on anything older).
