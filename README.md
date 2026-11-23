# Gaming laptop shortlist

A buildless static webpage with three personal recommendations, 11 price-sorted laptop configurations, Amazon links, and a downloadable Markdown list.

## Cloudflare Pages

1. In Cloudflare, open **Workers & Pages**, create a **Pages** project, and choose **Connect to Git**.
2. Authorize GitHub and select this repository.
3. Set the production branch to `main`.
4. Select **None** for the framework preset, leave the build command empty, and set the build output directory to `/` (the repository root).
5. Deploy. Cloudflare supplies a `pages.dev` address and automatically deploys future pushes to `main`.

There are no dependencies, backend, environment variables, or API keys.

## Contents

- `index.html`: page content and all product links
- `styles.css`: responsive styles
- `app.js`: GPU filter for the comparison
- `gaming-laptop-recommendations.md`: downloadable comparison

Prices, configuration details, and Prime availability reflect the listings recorded on November 22, 2026. The page does not fetch live prices.
