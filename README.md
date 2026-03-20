# Ujjaval Portfolio

A personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide React
- Vitest + Testing Library

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Scripts

- `npm run dev` - start the local development server
- `npm run build` - create a production build
- `npm run start` - run the production build locally
- `npm run lint` - run ESLint
- `npm run test` - run unit tests with Vitest

## Project Structure

- `app/` - App Router pages, global styles, metadata, favicon
- `components/` - reusable UI components like navigation, projects, modal, and animations
- `data/portfolio.ts` - main portfolio content
- `types/portfolio.ts` - shared TypeScript types for portfolio data
- `public/` - static assets like the profile image and project thumbnails

## Updating Content

Most content can be edited in:

- [data/portfolio.ts](/Users/ujjaval/Portfolio-2.0/data/portfolio.ts)

This includes:

- navigation items
- hero content
- experience
- projects
- skills
- education
- certifications
- contact details

## Theming

- Dark mode is the default theme
- Light mode is available from the navigation bar
- Theme styles live in [app/globals.css](/Users/ujjaval/Portfolio-2.0/app/globals.css)

## Testing

Unit tests are powered by Vitest and Testing Library.

Run:

```bash
npm run test
```

## Notes

- Project cards and project details support image and YouTube-based media
- The site is optimized for desktop and mobile layouts
- Portfolio data is typed so content updates stay consistent with the UI
