# Maxlong Inc. Website

Static marketing site for **Maxlong Inc.** (Sacramento, CA) — panel accessories for U.S. panel shops, OEMs, and contractors.

## Local preview

```bash
cd /workspace/maxlong-website
python3 -m http.server 8080
```

Open http://127.0.0.1:8080/

Or open `index.html` directly via `file://` (mailto form and relative assets still work).

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Home — hero, value props, product grid, CTAs |
| `products.html` | Product lines with photos |
| `about.html` | Company story, manufacturing, timeline |
| `partners.html` | Manufacturer’s reps & distributors |
| `contact.html` | Contact info + mailto form |
| `privacy.html` | Brief privacy notice |

Shared: `styles.css`, `site.js`, `favicon.svg`, `images/products/`, `downloads/`.

## Downloads

- `downloads/Maxlong_Product_Catalog.pdf`
- `downloads/Maxlong_Company_Profile.pdf`

## Deploy

See **DEPLOY.md** for Cloudflare Pages + Namecheap / DNS for `maxlongusa.com`.

This folder is pure static HTML/CSS/JS — no build step.

## Brand notes

- Wordmark: **MAX** (navy `#0B1F3A`) + **LONG** (orange `#E85D04`)
- No UL/CE/ISO claims or prices on the site
- Product photos from Maxlong materials only
