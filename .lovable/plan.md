# Concept Selector + Four Isolated Website Prototypes

## Goal
Turn the app into a **design presentation tool**. `/` becomes a full-screen Concept Selection Screen. Each of the four concepts is a fully isolated mini-site under its own URL prefix, with its own homepage flow, header, footer, floating actions, and design language. Nothing is shared between concepts except low-level primitives (shadcn UI, Tailwind tokens, icons, data).

## URL Structure

```text
/                      Concept Selection Screen
/c1, /c1/*             Concept 1 — Welcome Popup Experience
/c2, /c2/*             Concept 2 — Split Screen Experience
/c3, /c3/*             Concept 3 — Corporate First Experience
/c4, /c4/*             Concept 4 — Interactive Business Gateway

Under each /cN prefix (identical page set):
  /cN                  homepage (concept-specific entry flow)
  /cN/about
  /cN/journey
  /cN/verticals
  /cN/network
  /cN/warehouses
  /cN/offices
  /cN/team             Leadership
  /cN/news             list + filters
  /cN/news/$slug       article detail
  /cN/events           calendar + upcoming list
  /cN/events/$slug     event detail
  /cN/contact
```

Every concept has a layout route (`src/routes/cN.tsx`) with its own Header, Footer, floating actions, and `<Outlet />`. A small "← Change Concept" pill in every header returns to `/`. Links inside a concept never leave that concept.

## Concept Design Directions (must feel distinct)

- **C1 — Welcome Popup**: refined editorial. Ivory + deep navy, serif display, quiet motion. Homepage mounts a modal on first visit (sessionStorage flag scoped to c1) asking Corporate vs Online Store; picking Store opens advancetelecom.com.pk in a new tab and reveals the corporate homepage.
- **C2 — Split Screen**: bold, dual-tone. Left half Corporate (dark, image-led), right half Store (accent gradient). Hovering a half expands it; clicking Corporate reveals the site with a matching dual-tone theme across all pages; clicking Store opens the external site.
- **C3 — Corporate First**: classic enterprise. Immediate homepage, sticky "Shop Now" ribbon, inline store CTAs on every section, cleaner blue/white, sans-serif, denser layout.
- **C4 — Interactive Business Gateway**: premium/futuristic (reuses current look). Glass gateway cards, gradient hero, animated map, chatbot.

## News Module

Shared data: `src/data/news.ts` — ~10 articles with image, category, date, title, summary, body, author, readingTime, slug, gallery.

Per concept:
- Homepage: latest 3 as cards (featured image, category, date, title, 2-line summary, "Read More").
- `/cN/news`: search bar, category filter, year filter, featured banner (latest), grid, pagination (6/page), newsletter subscribe (client-only success toast).
- `/cN/news/$slug`: hero banner, meta (date/category/reading time/author), rich body, gallery, share buttons (copy link + native share), related articles, prev/next nav.

Categories: Corporate News, Business Updates, Product Announcements, Distribution, Partnerships, CSR Activities, Awards & Recognition, Technology, Media Coverage.

## Events Module

Shared data: `src/data/events.ts` — ~10 events with status (upcoming/ongoing/completed), date, time, venue, organizer, category, description, agenda, speakers, gallery, downloads, registrationOpen, slug.

Per concept:
- Homepage: next upcoming event banner + "View All Events".
- `/cN/events`: two columns. Left = custom interactive month calendar (dates colored by status, click a date to filter). Right = upcoming events list.
- `/cN/events/$slug`: hero, countdown timer for upcoming, agenda, speakers, gallery, downloads, map placeholder, register button, share, related.

Categories: Product Launches, Corporate Events, Dealer Meetups, Distributor Conferences, Trade Shows, Technology Exhibitions, CSR Activities, Recruitment Drives, Training Sessions, Annual Meetings.

## Shared vs Per-Concept Code

Shared (safe primitives only):
- `src/data/news.ts`, `src/data/events.ts`
- `src/lib/utils.ts`, shadcn `ui/*`, lucide icons
- `src/components/shared/Countdown.tsx`, `MiniCalendar.tsx` — headless helpers each concept styles.

Per-concept folders (`src/components/c1..c4/`): Header, Footer, HeroSection, SectionShell, NewsCard, EventCard, ArticleView, EventView, plus concept-specific hero/section pieces.

Concept-specific CSS variables scoped via a wrapper class on the layout route (`.concept-c1 { --bg:…; --fg:…; --accent:…; }` etc.).

## Content Reuse

Copy for About / Journey / Verticals / Network / Warehouses / Offices / Team / Contact is identical across concepts; each concept renders through its own components so the visual treatment differs. News and Events share data, differ in presentation.

## Cleanup

Delete the current root-level generic pages (`about.tsx`, `journey.tsx`, `verticals.tsx`, `network.tsx`, `warehouses.tsx`, `offices.tsx`, `team.tsx`, `why-us.tsx`, `contact.tsx`) — they get re-implemented inside each concept. `sitemap[.]xml.ts` regenerated to list all concept trees. Old shared `Header`/`Footer`/`FloatingBuyNow`/`Chatbot` become C4-specific (moved into `components/c4/`).

## Motion

News cards fade-rise on scroll. Event cards stagger in. Calendar month transitions animate. Countdowns tick every second. Counters keep `AnimatedCounter`. Timelines animate on scroll (each concept's own timeline style).

## Deliverable

`/` shows the selector. Clicking a card enters that concept's homepage; every internal link stays inside `/cN/*`; only the "Change Concept" pill returns to `/`. Each concept looks and behaves distinctly across all pages, News, and Events.

## Note on Scope
This is a large build (~50+ new route files and components). I'll implement it in one pass, keep per-concept components lean, and reuse shared data + shadcn primitives to keep the codebase manageable.
