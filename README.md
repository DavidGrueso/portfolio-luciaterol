# Lucia Terol Soriano — Portfolio

A bilingual, single-page editorial portfolio for professional dancer Lucia Terol Soriano. Built with Vite, React, and plain CSS.

## Run locally

```bash
npm install
npm run dev
```

Vite prints the local preview URL in the terminal. Create a production build with:

```bash
npm run build
npm run preview
```

## Edit the portfolio

- **Text and translations:** Edit `src/data/translations.js`. English (`en`) is the default language and every visible content field has a Spanish (`es`) counterpart.
- **Images:** Replace files in `public/images/` while keeping the current filenames, or add new files and update their paths in `src/data/images.js`.
- **Layout and visual direction:** Section-specific compositions and mobile adaptations are in `src/styles/global.css`.
- **Section order:** The full 15-section narrative is kept explicitly in `src/App.jsx` so each composition can be art-directed independently.

The included imagery is original placeholder artwork generated for this project. Replace it with Lucia’s final photography before the public launch.

## Deploy to GitHub Pages

The Vite base path is relative (`./`), so the build works for both a user/organization page and a project repository.

1. Create a GitHub repository and push this project.
2. Run `npm install` once locally.
3. Deploy the generated `dist` folder:

```bash
npm run deploy
```

The `gh-pages` package creates or updates the `gh-pages` branch. In the repository settings, open **Pages**, choose **Deploy from a branch**, then select the `gh-pages` branch and `/ (root)`.

If the repository uses a custom domain, add the domain in GitHub Pages settings after the first deployment.
