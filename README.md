# Dharshan P S — Developer Portfolio

A responsive portfolio built with React, Vite, Tailwind CSS and Lucide icons.

## Run locally

1. Install Node.js (LTS).
2. Open this project folder in VS Code.
3. Open the terminal in this folder.
4. Run:

```bash
npm install
npm run dev
```

5. Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Check the production build

```bash
npm run build
npm run preview
```

## Deploy with Vercel

1. Push the complete project folder to a GitHub repository.
2. Import that repository in Vercel.
3. Use `npm run build` as the build command.
4. Use `dist` as the output directory.
5. Deploy.

## Files

- `src/main.jsx` — React page and content.
- `src/style.css` — responsive styling and typography.
- `public/profile.png` — portfolio portrait.
- `index.html` — page metadata and entry point.

The footer now has a labelled “Back to top” link. The old `D.` footer mark was an anchor to `#home`, which is why clicking it jumped to the top. Section title line breaks are now explicit JSX `<br />` elements, not literal `\n` text.
