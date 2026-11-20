# Reddy786 Tech Solutions

Production-oriented Next.js landing page for Reddy786 Tech Solutions.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

## Replace branding and images

- The official logo was not supplied, so the header, footer, and favicon use clearly marked temporary visual placeholders.
- Replace the temporary logo implementation in `src/components/Logo.tsx` and `public/favicon.svg` with the approved official artwork.
- Industry cards use original abstract CSS graphics rather than external stock photography. Replace or supplement them in `src/components/Sections.tsx` if approved photography becomes available.

## Update content

- Service definitions: `src/data/services.ts`
- Industry definitions: `src/data/industries.ts`
- Site name, domain, and email: `src/data/siteConfig.ts`
- Section copy and layout: `src/components/Sections.tsx`
- Header navigation: `src/components/Header.tsx`

## Contact form status

This build intentionally has no fake form submission. The primary contact and email actions open a prefilled `mailto:` enquiry. For production, connect a validated form backend or a service such as Formspree, Resend, or SendGrid. Add server-side validation and CAPTCHA/rate limiting before accepting public submissions.

## Push to GitHub

```bash
git add .
git commit -m "Create Reddy786 corporate website"
git push origin main
```

Create the GitHub repository first if it does not exist, then set its remote:

```bash
git remote add origin https://github.com/<OWNER>/<REPOSITORY>.git
```

## Deploy with Vercel

1. Import the GitHub repository at https://vercel.com/new.
2. Keep the framework preset as Next.js and the build command as `npm run build`.
3. Deploy; Vercel will provide a temporary HTTPS URL.
4. Add `reddy786techsolutions.in` and `www.reddy786techsolutions.in` in the Vercel project domain settings.

## Hostinger DNS

In Hostinger DNS management, add the records shown in Vercel's Domains setup. Do not remove or change existing MX, SPF, DKIM, DMARC, or email routing records unless a qualified DNS administrator confirms it is required.

## Production setup still required

- Supply and apply the official logo.
- Supply approved photography if required.
- Connect a real enquiry form backend and anti-spam protection.
- Confirm final legal, privacy, and terms text before linking or publishing those pages.
- Verify social profile URLs before listing them.
