# Younes Labs — Portfolio Website

A modern, responsive personal portfolio built with Next.js and CSS. It is ready to deploy to Vercel.

## Requirements

- Node.js 20.9 or newer
- npm
- A GitHub account (recommended for deployment)
- A Vercel account

## Run locally

1. Extract the ZIP.
2. Open a terminal in the `younes-labs` folder.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open http://localhost:3000

To check a production build locally:

```bash
npm run build
npm start
```

## Deploy to Vercel (recommended: GitHub)

1. Create a new repository on GitHub named `younes-labs`.
2. Upload the contents of this folder to the repository (the `package.json` and `app` folder should be at the repository root, not inside another nested folder).
3. Sign in to Vercel and choose **Add New → Project**.
4. Import the `younes-labs` GitHub repository.
5. Keep the detected framework as **Next.js** and leave the build/output settings at their defaults.
6. Select **Deploy**. Vercel will build the site and provide a public `*.vercel.app` URL.
7. Future pushes to the connected GitHub branch will trigger new deployments automatically.

## Before publishing

Personalize these placeholders in `app/page.js`:

- `hello@youneslabs.dev` — replace with your real preferred email.
- Project links — the sample project cards currently point to your GitHub or itch.io profile. Replace them with direct project URLs where available.
- Project descriptions and technology tags — verify that each matches the project you want to showcase.
- The 94% classifier figure — keep it only if it matches your final measured result.
- Location and profile links — update if you prefer different public details.

The website is a static portfolio-style experience. It does not include a database, login system, or contact form backend. The contact button opens the visitor's default email app.

## Project structure

```text
younes-labs/
├── app/
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── public/
├── .gitignore
├── eslint.config.mjs
├── package.json
└── README.md
```
