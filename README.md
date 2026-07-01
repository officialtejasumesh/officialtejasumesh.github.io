# Tejas Umesh - Personal Website

This is a static personal academic/research website designed to work directly on GitHub Pages.

## What is included

- `index.html` - one-page portfolio content
- `styles.css` - responsive styling
- `script.js` - small mobile-navigation helper
- `CNAME.example` - optional custom-domain example

## Deployment on GitHub Pages

### Option A: User site, recommended

1. Create a GitHub repository named exactly:

   ```bash
   <your-github-username>.github.io
   ```

2. Upload these files to the repository root.
3. Commit and push to the `main` branch.
4. Go to **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch: `main`, folder: `/root`, then save.
7. Your site should appear at:

   ```text
   https://<your-github-username>.github.io
   ```

### Option B: Project site

Use any repository name, then enable GitHub Pages under **Settings → Pages**. Your site will appear at:

```text
https://<your-github-username>.github.io/<repository-name>/
```

For a personal academic website, Option A is cleaner.

## Custom domain

Suggested domains:

- `tejasumesh.com`
- `tejasumesh.dev`
- `tejasumesh.ai`
- `tejasumesh.org`

After buying a domain, add it in **Settings → Pages → Custom domain**. GitHub will create or use a `CNAME` file. Rename `CNAME.example` to `CNAME` only after you know your exact domain.

## Privacy note

The uploaded CV includes a phone number. I intentionally did not add a phone number to the public homepage. If you want a downloadable CV, create a public-safe PDF first, then add it to `assets/` and link to it from the hero section.

## Suggested edits before publishing

- Add a professional headshot by replacing the initials card in the hero section.
- Add your GitHub and LinkedIn URLs if you want them public.
- Replace any publication URLs if you prefer DOI, ACM, IEEE, or Google Scholar links.
- Add a downloadable public CV PDF after removing private details.
