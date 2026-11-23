# Gaming laptop shortlist

A buildless static webpage with three personal recommendations, 11 price-sorted laptop configurations, Amazon links, and a downloadable Markdown list.

## Cloudflare Workers

The existing site is deployed at https://zeynels-adhoc-website.zcagdasgurbuz.workers.dev/ using Workers Static Assets.

In the Worker's **Settings > Builds**, connect the GitHub repository and use:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Build command | Leave blank |
| Deploy command | `npx wrangler deploy` |
| Root directory | `/` |

`wrangler.json` identifies the existing Worker and the static assets directory. `.assetsignore` allows only the four public site files to be uploaded.

After GitHub is connected, a new push to `main` triggers deployment. The dashboard's **New deployment** button opens the manual file uploader, not a Git build. Builds can be inspected from the deployment's **Build** link.

To deploy directly from a local terminal instead:

```sh
npx wrangler deploy
```

There are no application dependencies, backend, or runtime environment variables. Deployment uses the Cloudflare account's configured build credentials, or local Wrangler sign-in.

## Contents

- `index.html`: page content and all product links
- `styles.css`: responsive styles
- `app.js`: GPU filter for the comparison
- `gaming-laptop-recommendations.md`: downloadable comparison

Prices, configuration details, and Prime availability reflect the listings recorded on November 22, 2026. The page does not fetch live prices.
