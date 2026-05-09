# Maasai Amazing Safaris

This is the Next.js website for Maasai Amazing Safaris, now connected to Supabase for editable content and booking lead capture.

## CMS Overview

- Public pages pull their core editable content from Supabase with local JSON fallbacks in [content/cms-seed.json](/Users/admin/maasai-amazing-safaris/content/cms-seed.json).
- Admin dashboard: `/admin`
- Admin login is checked server-side only.
- Booking requests are saved to Supabase through `/api/inquiries` and still open WhatsApp for instant follow-up.

## Admin Auth

Set these environment variables locally and in Vercel:

- `CMS_ADMIN_EMAIL`
- `CMS_ADMIN_PASSWORD`
- `CMS_SESSION_SECRET`

## Supabase Setup

- Local config lives in [supabase/config.toml](/Users/admin/maasai-amazing-safaris/supabase/config.toml)
- Database schema lives in [supabase/migrations/20260505121500_cms_backend.sql](/Users/admin/maasai-amazing-safaris/supabase/migrations/20260505121500_cms_backend.sql)
- Seed script: `npm run seed:cms`

Required environment variables are shown in [.env.example](/Users/admin/maasai-amazing-safaris/.env.example).

## Keepalive

A GitHub Actions workflow was added at [.github/workflows/supabase-keepalive.yml](/Users/admin/maasai-amazing-safaris/.github/workflows/supabase-keepalive.yml).

The workflow now pings the deployed keepalive route at `/api/keepalive`, which performs the Supabase check from the app itself.

No GitHub repository secrets are required for the keepalive workflow anymore.

## Verification

- `supabase db push`
- `npm run seed:cms`
- `npx tsc --noEmit`
- `npm run build`

`npm run lint` is still not usable in this repo because the current `next lint` script is incompatible with the installed Next.js setup.
