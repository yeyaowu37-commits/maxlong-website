# Deploy Maxlong Inc. to Cloudflare Pages (`maxlongusa.com`)

Do **not** change DNS until the site has been previewed and approved.

## 1. Create a Cloudflare Pages project

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create** → **Pages**.
2. Choose **Upload assets** (direct upload) **or** connect a Git repo that contains this `maxlong-website` folder as the project root.
3. **Build settings** (static, no build):
   - Build command: *(leave empty)*
   - Build output directory: `/` (or `.` if the repo root *is* this site folder)
4. Deploy. Note the default URL, e.g. `https://maxlong-website.pages.dev`.

### Optional: Wrangler direct upload

```bash
cd /workspace/maxlong-website
npx wrangler pages deploy . --project-name=maxlong-website
```

## 2. Attach custom domain `maxlongusa.com`

In the Pages project → **Custom domains** → **Set up a domain**:

1. Add `www.maxlongusa.com`
2. Add `maxlongusa.com` (apex)

Cloudflare will show the DNS records to create. Typical setup when the domain uses **Cloudflare DNS**:

| Type  | Name | Target / Content                                      | Proxy |
|-------|------|--------------------------------------------------------|-------|
| CNAME | `www` | `<your-project>.pages.dev`                             | Proxied (orange cloud) |
| CNAME | `@`   | `<your-project>.pages.dev` *(Cloudflare apex CNAME)*   | Proxied |

If Cloudflare instead instructs **A/AAAA** for the apex (some accounts), use the IPs they display — prefer their documented Pages apex instructions for your account.

Also set **Redirect** www ↔ apex as desired (Pages often offers “Redirect to www” or apex as primary).

## 3. If DNS is still at Namecheap (not yet on Cloudflare)

### Option A — Point nameservers to Cloudflare (recommended)

1. In Cloudflare, add site `maxlongusa.com` and note the assigned nameservers.
2. In Namecheap → Domain List → Manage → **Nameservers** → Custom DNS → paste Cloudflare NS.
3. Wait for propagation, then add the Pages custom domain (step 2). DNS is managed in Cloudflare.

### Option B — Keep Namecheap DNS, CNAME only

At Namecheap → Advanced DNS:

| Type  | Host | Value                         | TTL  |
|-------|------|-------------------------------|------|
| CNAME | `www` | `<your-project>.pages.dev.`  | Automatic |

Apex (`@`) often **cannot** be a CNAME at Namecheap. Options:

- Use Cloudflare DNS (Option A), **or**
- Use Namecheap **URL Redirect** / ALIAS if offered: redirect `@` → `https://www.maxlongusa.com`, and put the site only on `www`, **or**
- Follow Cloudflare’s current “custom domain on external DNS” docs for Pages (TXT verification + CNAME for `www`).

## 4. SSL

Cloudflare Pages issues HTTPS automatically once the domain is verified. Wait until the custom domain status shows **Active**.

## 5. Checklist after go-live

- [ ] `https://www.maxlongusa.com` loads Home
- [ ] Nav: Products, About, Partners, Contact
- [ ] Catalog / Company Profile PDFs download
- [ ] Contact mailto opens to `ceo@maxlongusa.com`
- [ ] Mobile menu works
- [ ] Favicon appears

## Rollback

Remove the custom domain in Pages or delete/alter the CNAME at DNS. Previous Pages deployments remain under `*.pages.dev` for preview.
