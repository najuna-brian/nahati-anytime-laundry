# Nahati Anytime Laundry

Professional, responsive web application built with React + Vite and TailwindCSS.

## Tech Stack

- React + Vite
- TailwindCSS
- Framer Motion
- React Router DOM

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy

- GitHub Pages or Firebase Hosting supported.
- For GitHub Pages, set `base` in `vite.config.js` if deploying under a subpath and serve the `dist` folder.
- For Firebase, initialize hosting and set the public directory to `dist` after building.

## Configuration

- Update Google Forms config in `src/utils/googleForms.js` with your Form action URL and entry field IDs.
- WhatsApp number is set to `+256200981445` in `src/utils/constants.js`.

## Project Structure

```
src/
  components/
  pages/
  utils/
  App.jsx
  main.jsx
  index.css
```

## Notes

- Images now live in `public/images/` and the logo at `public/nahati_logo.png`.
- Form submission to Google Forms uses `no-cors`; success is assumed on best-effort.
