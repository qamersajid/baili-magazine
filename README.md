# Maheena War "Baili" Starter

This is a starter project for a free long-term setup:
- Astro for a fast content-driven site
- Decap CMS for editor-friendly publishing
- Cloudflare Pages for free hosting
- Google Forms for submissions

## 1) Local setup

Install Node.js LTS, then run:

```bash
npm install
npm run dev
```

Open `http://localhost:4321`

## 2) Create a GitHub repo

Create a repository named `baili-magazine` under your GitHub account and upload all project files. If your real GitHub handle is not `qamersajid`, update `public/admin/config.yml` accordingly.

## 3) Enable Cloudflare Pages

Create a Pages project and connect the GitHub repo. Cloudflare Pages supports static sites and Git-based deployment. citeturn0search0turn0search3

Use:
- Build command: `npm run build`
- Output directory: `dist`

## 4) Enable Decap CMS

Decap CMS runs from `/admin` and stores content in your Git repository. citeturn0search1turn0search4turn0search13

Update `public/admin/config.yml`:
- `repo`: your GitHub username and repo
- `site_url`: your Cloudflare Pages URL

## 5) Content model

- `src/content/daily`: daily poetry/prose
- `src/content/issues`: monthly archive/issues
- `src/content/authors`: creator profiles

Astro content collections give structure and validation for content in `src/content/`. citeturn0search2turn0search5

## 6) Submission workflow

Use a Google Form and replace the placeholder link in `src/pages/submit.astro`.
Suggested fields:
- name
- pen name
- WhatsApp/email
- category
- title
- work text
- originality declaration

## 7) Important note for production login

For Decap CMS with GitHub backend on a custom domain, you will typically also need GitHub OAuth/App authentication or an auth flow provider. This starter includes the CMS structure, but you must complete authentication before editors can log in securely.

## 8) Suggested next steps

1. Replace demo Haryanvi content with your real first issue.
2. Add your logo and cover image.
3. Connect the Google Form.
4. Deploy on Cloudflare Pages.
5. Configure Decap authentication.
