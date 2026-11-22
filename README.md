# ToolHub Website

Free online tools platform at [toolhub.org.in](https://toolhub.org.in)

## Stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Vercel (hosting)

## Pages
- `/` — Homepage with tools grid
- `/tools` — Full tools directory
- `/about` — About ToolHub
- `/contact` — Contact form
- `/privacy-policy` — Privacy Policy
- `/terms-of-service` — Terms of Service

## SEO
- `app/sitemap.ts` — Auto-generated sitemap at `/sitemap.xml`
- `app/robots.ts` — Robots.txt at `/robots.txt`
- `public/ads.txt` — AdSense publisher file
- JSON-LD schema on homepage (`WebSite` + `Organization`)

## Running Locally
```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deployment
Push to GitHub. Vercel auto-deploys on `main` branch push.
Custom domain: `toolhub.org.in`
