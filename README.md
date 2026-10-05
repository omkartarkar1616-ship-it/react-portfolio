# Omkar Tarkar — Portfolio

A responsive React portfolio built with Vite. It includes About, Projects,
Skills, Resume, and Contact sections, with a dark editorial visual theme and
viewport-triggered loading for below-the-fold sections.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Run locally

```sh
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Production build and local preview

```sh
npm run lint
npm run build
npm run preview
```

The optimized static site is generated in `dist/`. The preview command serves
that production output locally so you can check section navigation, responsive
layouts, and the built assets before deploying.

Vite splits the lazily imported sections into separate JavaScript chunks and
minifies JavaScript and CSS for production. Sections are mounted when they
approach the viewport; no project screenshots are currently used. If you add
images, use optimized formats (such as WebP/AVIF) and `loading="lazy"` for
below-the-fold content.

## Personalize before publishing

The name in this version is **Omkar Tarkar**, based on the existing workspace
name. Please verify it and update the content to match your actual experience.

- Update the biography and project descriptions in `src/components/About.jsx`
  and `src/components/Projects.jsx`.
- Add real project links/screenshots only for work you want to showcase.
- The contact section currently uses the supplied email address. Change the
  visible address and `mailto:` destination in `src/components/Contact.jsx`
  if you want to publish a different address.
- Add your real resume PDF under `public/` and link it from
  `src/components/Resume.jsx` if you want visitors to download it.
- Update the title and description in `index.html` if your display name or
  specialization differs.

## Deploy to Netlify

This repository includes `netlify.toml` for Netlify's build and publish
settings.

1. Push this project to a GitHub repository.
2. In Netlify, choose **Add new site → Import an existing project**, connect
   GitHub, and select the repository.
3. Confirm the build command is `npm run build` and the publish directory is
   `dist` (these are also set in `netlify.toml`).
4. Deploy. Netlify will provide an HTTPS `netlify.app` URL and automatically
   provision a TLS certificate.
5. For a custom domain, open **Domain management → Add a domain**, enter a
   domain you own, and follow Netlify's DNS instructions. HTTPS is enabled
   automatically after DNS verification; allow time for DNS propagation and
   certificate provisioning.
6. After every content change, run the checks above and push to the connected
   branch. Netlify will build and deploy the update.

The current workspace is not connected to a GitHub remote or Netlify account,
so it cannot be published or assigned a custom domain from this project
environment alone.

## Responsive and browser checks

Use browser developer tools' device toolbar to check at narrow phone,
tablet, and desktop widths. Verify keyboard focus and navigation, then test
the production preview in current Chrome, Firefox, Safari, and Edge. Hosting
and browser access are not configured here, so a public deployment and
cross-browser run must be completed after the site is connected to your
accounts.
