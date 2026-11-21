# CLAUDE.md

@AGENTS.md

## What this is

**aod-old** is the user interface of aod.co.in as it was on 2026-11-21 (commit `1b5233e` of the `aod` repo), kept for reference after the live site moved to the new design. It has **no backend**:

- `backendEnabled` (`src/lib/backend.ts`) is always `false`, so every page takes its preview path: sample data, and what the visitor enters stays in this browser (localStorage).
- `src/server`, `src/lib/supabase`, `src/app/api`, `supabase/` (migrations) and `src/proxy.ts` were removed, with the Supabase and web-push packages. `src/offline/` keeps the old server actions' names and types as inert stand-ins (`@/offline/...`), so the pages compile unchanged; nothing there calls a server. `src/lib/live.ts` is always "off".
- **Every input may be left empty.** The booking quiz, artist application, sign-in screens (artist portal, My bookings, business portal, admin), Dispute Desk form and tracking, and the admin's forms (New booking, Record payment, team invite, artist profile, company details) skip their required-field checks; any code or password works, or none. An empty Excel export password downloads the file without a lock. Forms carry `noValidate`, so the browser's own checks don't block either.
- No subdomains: the artist portal, admin and Dispute Desk stay at `/artists`, `/admin` and `/resolve`. Links stay on this copy's own address (`siteUrl` is relative unless `NEXT_PUBLIC_SITE_URL` is set).
- Not for search engines: every response sends `X-Robots-Tag: noindex, nofollow` and `robots.txt` disallows everything. Canonicals still point at www.aod.co.in. There is no redirect to aod.co.in and no HSTS.

The live site, with the backend, is the `aod` repo (E:\Projects\Internship\aod). `docs/DEVELOPER_GUIDE.md` describes that site as it was; its backend parts don't apply here.

## Commands

```bash
npm run dev     # dev server (the user runs one on :3000; use another port or a build to test)
npm run build   # production build (also type-checks)
npm run lint
npm run check:search | check:links | check:orders | check:markdown | check:xlsx
```

## Stack

Next.js 16 (App Router, `src/`), React 19, TypeScript, Tailwind CSS v4 (tokens in `src/app/globals.css`), Motion. Copy and sample data live in `src/content/`. Read `node_modules/next/dist/docs/` before using an unfamiliar Next.js API.
