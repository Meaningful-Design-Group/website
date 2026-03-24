# MDG Website — Setup & Deployment Guide

This is the Meaningful Design Group website built with **Eleventy** (static site generator) + **Decap CMS** (visual content editor) + **Netlify** (hosting + auth).

---

## Tech Stack

| Layer | Tool | Why |
|-------|------|-----|
| Static Site Generator | [Eleventy (11ty)](https://11ty.dev) | Fast builds, simple templates, close to plain HTML |
| CMS | [Decap CMS](https://decapcms.org) | Git-based, browser editor, no database needed |
| Hosting | [Netlify](https://netlify.com) | Free tier, automatic deploys, built-in CMS auth |
| Source Control | [GitHub](https://github.com) | Repo, version history, free |

---

## Step 1 — Push the Code to GitHub

If you haven't already:

```bash
cd path/to/mdg-cms
git init
git add .
git commit -m "Initial MDG website with Eleventy + Decap CMS"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

---

## Step 2 — Deploy on Netlify (Recommended, Free)

1. Go to [netlify.com](https://netlify.com) and sign in with GitHub
2. Click **"Add new site" → "Import an existing project"**
3. Choose your GitHub repo
4. Build settings (Netlify auto-detects from `netlify.toml`):
   - **Build command:** `npm run build`
   - **Publish directory:** `_site`
5. Click **"Deploy site"**

Netlify will build and deploy your site within ~2 minutes. You'll get a URL like `https://mdg-bali.netlify.app`.

### Set a custom domain

In Netlify: **Site settings → Domain management → Add custom domain**
Enter `meaningfuldesigngroup.com` and follow the DNS instructions.

---

## Step 3 — Enable the CMS (Netlify Identity)

The CMS admin panel lives at `your-site.com/admin/`. To enable editor login:

1. In Netlify: **Site settings → Identity → Enable Identity**
2. Under **Registration**: set to **"Invite only"** (keeps it private)
3. Under **Services → Git Gateway**: click **"Enable Git Gateway"**
   *(This is what lets the CMS commit content to your GitHub repo)*
4. Go to **Identity tab → Invite users** → send invite to `tomasdiez@gmail.com` and any team members

That's it. Users visit `/admin/`, accept their email invite, and can immediately start editing content.

---

## Step 4 — Invite Team Editors

In Netlify: **Identity → Invite users**

Each invited user gets an email with a link to set their password. They then access the CMS at:

```
https://your-site.com/admin/
```

No GitHub account needed for content editors — they just use their email + password.

---

## Alternative: GitHub Pages Deployment

If you prefer GitHub Pages over Netlify:

1. In your GitHub repo: **Settings → Pages → Source → "GitHub Actions"**
2. The `.github/workflows/deploy.yml` file handles building and deploying automatically
3. Your site will be at `https://YOUR_USERNAME.github.io/REPO_NAME/`

**Note on CMS with GitHub Pages:** Decap CMS's standard OAuth (git-gateway) requires Netlify Identity. For GitHub Pages, you need an OAuth proxy. The simplest option is to deploy a Cloudflare Worker using [netlify-cms-oauth-provider](https://github.com/vencax/netlify-cms-github-oauth-provider), then update `admin/config.yml`:

```yaml
backend:
  name: github
  repo: YOUR_USERNAME/YOUR_REPO
  branch: main
  base_url: https://your-oauth-worker.YOUR_ACCOUNT.workers.dev
```

This is why **Netlify is strongly recommended** — it handles all this automatically for free.

---

## Local Development

```bash
# Install dependencies
npm install

# Start local dev server (live reload)
npm run start
# → Site available at http://localhost:8080

# Run CMS locally (optional, for testing)
npm run cms
# → Then in another terminal: npm run start
# → CMS available at http://localhost:8080/admin/
```

---

## How the CMS Works

When a content editor saves changes in the CMS:

1. Decap CMS commits the changed Markdown/JSON file to your GitHub repo
2. Netlify detects the new commit
3. Netlify rebuilds the Eleventy site (~30 seconds)
4. The live site updates automatically

**No code deployment needed for content changes.**

---

## Content Structure

| What you're editing | File location | CMS collection |
|---------------------|---------------|----------------|
| Projects (Fab Lab, Hydrogen, etc.) | `src/content/projects/*.md` | Projects |
| Programs (Fab Academy, etc.) | `src/content/programs/*.md` | Programs |
| News articles | `src/content/news/*.md` | News & Stories |
| Site-wide settings, impact numbers, founders, partners | `src/_data/site.json` | Site Settings |
| Uploaded images | `src/assets/images/` | (via CMS media) |

---

## Adding a New Page

For a completely new standalone page:
1. Create `src/your-page-name.njk`
2. Add front matter: `layout: base.njk`, `title: Your Page`, `navActive: ...`
3. Write content using Nunjucks templating
4. Add it to the nav in `src/_includes/base.njk`

---

## File Structure Overview

```
mdg-cms/
├── src/
│   ├── _includes/
│   │   ├── base.njk              ← Shared HTML shell (nav, footer)
│   │   └── layouts/
│   │       ├── project.njk       ← Project page template
│   │       └── program.njk       ← Program page template
│   ├── _data/
│   │   └── site.json             ← Global settings (editable in CMS)
│   ├── content/
│   │   ├── projects/             ← Project markdown files
│   │   ├── programs/             ← Program markdown files
│   │   └── news/                 ← News article markdown files
│   ├── admin/
│   │   ├── index.html            ← CMS admin panel UI
│   │   └── config.yml            ← CMS content schema
│   ├── assets/
│   │   ├── css/mdg.css           ← Design system
│   │   └── js/mdg-bg.js         ← Batik background + animations
│   ├── index.njk                 ← Homepage (Three.js hero)
│   ├── about.njk
│   ├── work.njk
│   ├── programs.njk
│   ├── research.njk
│   ├── news.njk
│   └── contact.njk
├── .github/workflows/deploy.yml  ← GitHub Pages fallback
├── .eleventy.js                  ← Eleventy config
├── netlify.toml                  ← Netlify build config
└── package.json
```
