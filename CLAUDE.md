# Salem International Christian Centre — Next.js Web App

## Commands

```bash
npm run dev        # start dev server (http://localhost:3000)
npm run build      # production build
npm run start      # serve production build
npm run lint       # eslint check
npx tsc --noEmit   # type-check without emitting
```

## Tech stack

| Layer | Choice | Version |
|-------|--------|---------|
| Framework | Next.js App Router | ^15.3 |
| Language | TypeScript | ^5 (strict) |
| Styling | Tailwind CSS v3 | ^3.4 |
| Fonts | next/font/google | — |
| Images | next/image | — |
| React | 19 | ^19.0 |

## Design token system

All Salem brand tokens live in **two places** — keep them in sync:

### 1. `tailwind.config.ts` — Tailwind theme extension

```ts
colors: {
  salem: {
    purple: '#93328f',   // primary brand purple
    dark:   '#6e2469',   // dark purple
    darker: '#4a1847',
    deep:   '#2a0d28',
    light:  '#b44db0',   // lighter purple (accent)
    bg:     '#0e0010',   // page background
  },
  gold: {
    DEFAULT: '#C9A227',
    light:   '#e4c060',
    dark:    '#9a7a1c',
  },
}
fontFamily: {
  display: ['var(--font-montserrat)', 'sans-serif'],   // headings, UI labels
  serif:   ['var(--font-playfair)',   'serif'],         // body quotes, italics
  body:    ['var(--font-lato)',       'sans-serif'],    // body text
}
```

### 2. `app/globals.css` — CSS custom properties

`:root` defines the same palette as CSS variables (`--purple`, `--gold`, etc.) for use in complex inline styles and non-Tailwind CSS.

**Rule:** For standard Tailwind classes use `text-gold`, `bg-salem-purple`, etc. For multi-stop gradients, clip-paths, and other patterns that can't be expressed cleanly with Tailwind, write CSS classes inside `@layer components` in `globals.css`.

## Folder conventions

```
app/
  layout.tsx              root layout — fonts, metadata template, skip-to-content
  globals.css             Tailwind imports + CSS variables + custom component classes + keyframes
  (marketing)/
    layout.tsx            Header + main + Footer + ScrollToTop
    page.tsx              homepage (assembles all section components)
  (admin)/                admin section — layout.tsx + admin/ subfolder (routes at /admin/*)
  sitemap.ts
  robots.ts

components/
  layout/
    Header.tsx            'use client' — scroll detection, dropdowns, hamburger
    MobileDrawer.tsx      'use client' — focus-trapped slide drawer
    Footer.tsx            server
    ScrollToTop.tsx       'use client'
  sections/               one file per homepage section (all server unless noted)
    Hero.tsx
    Welcome.tsx
    Vision.tsx
    Mandate.tsx
    CurrentSeries.tsx
    ChurchUpdates.tsx
    LatestSermon.tsx
    FoodBank.tsx
    StayConnected.tsx
    Give.tsx
  ui/
    Button.tsx            gold / ghost / purple variants; renders Link or button
    SectionEyebrow.tsx    gold eyebrow line + label
    Divider.tsx           gold or purple gradient rule
    RevealWrapper.tsx     'use client' — IntersectionObserver scroll reveal
    Spinner.tsx           animate-spin SVG; default size h-3.5 w-3.5, inherits currentColor

lib/
  utils.ts                cn() class-name helper

public/images/            all site images (logo, hero, leader photos, series flyer, giving)
```

## Component rules

- **Server Components by default.** Only add `'use client'` when the component genuinely needs browser APIs, event listeners, or React state.
- **No client wrappers around entire pages.** Keep client components leaf-level.
- **next/image for every `<img>`.** Always provide `width`/`height` or `fill` + sized container. Use `priority` only on the LCP image (hero).
- **next/link for all internal navigation.** No `<a href="/">` for Next.js routes.
- **next/font.** No external `<link>` font tags. Fonts are loaded in `app/layout.tsx`.

## SEO rules (non-negotiable for every new page)

1. Export a `metadata` object (or `generateMetadata`) with:
   - `title` — will be composed with the root template `'%s | Salem International Christian Centre'`
   - `description` — unique, 140–160 chars
   - `alternates.canonical`
   - `openGraph` — `title`, `description`, `url`, `images`
   - `twitter` — `title`, `description`, `images`

2. One `<h1>` per page, logical heading hierarchy (h1 → h2 → h3 …).

3. Semantic landmarks: `<header>`, `<nav>`, `<main id="main">`, `<section aria-labelledby="...">`, `<footer>`.

4. JSON-LD structured data on the homepage (`Church` schema in `app/(marketing)/page.tsx`). Add `Event` schema to events pages.

5. Add each new route to `app/sitemap.ts`.

## Performance standards

- Target Lighthouse 90+ across all categories.
- `priority` only on the hero `<Image>` (LCP).
- All other images: no `priority`, provide meaningful `sizes` prop.
- No render-blocking third-party scripts. Use `next/script` with `strategy="lazyOnload"` if needed.
- All pages statically rendered (`○` in build output) unless a route genuinely needs server data.

## Accessibility standards (WCAG 2.1 AA)

- Visible focus states via `*:focus-visible` in `globals.css` (gold outline).
- Skip-to-content link in root layout targets `#main`.
- All icon-only buttons/links must have `aria-label`.
- Mobile drawer uses focus trapping and `aria-modal`.
- Decorative elements use `aria-hidden`.
- Images: meaningful `alt` for content images, `alt=""` for decorative images.

### Known contrast flags

| Element | Foreground | Background | Ratio | Status |
|---------|-----------|------------|-------|--------|
| Footer links | `rgba(255,255,255,0.5)` | `#06000a` | ~3.4:1 | ⚠ Fails AA (4.5:1 required for normal text) — approved design, flagged but not changed |
| Body text helpers | `rgba(255,255,255,0.5)` | `#0e0010` | ~3.4:1 | ⚠ Same issue |
| Gold on dark | `#C9A227` | `#0e0010` | ~6.2:1 | ✓ Passes AA |
| White on purple | `#ffffff` | `#93328f` | ~4.9:1 | ✓ Passes AA |

These contrast failures exist in the **approved HTML design**. Do not silently change the color values; raise them with the design owner before any fix.

## Adding new marketing pages

1. Create `app/(marketing)/<slug>/page.tsx`.
2. Export metadata with all required fields.
3. Use `<main>` content wrapped in section landmarks.
4. Add the URL to `app/sitemap.ts`.

## Admin panel (`/admin`)

Routes live at `/admin/...` and are **not** added to `sitemap.ts`. Auth is enforced at two layers: middleware (`middleware.ts`) redirects unauthenticated requests to `/admin/login`, and the layout (`app/(admin)/layout.tsx`) verifies the Supabase session and fetches the user profile before rendering `AdminShell`.

### Folder structure

```
app/(admin)/
  layout.tsx                  server — Supabase session check, renders AdminShell or login
  admin/
    login/page.tsx            'use client' — supabase.auth.signInWithPassword()
    dashboard/page.tsx        server — stat cards + quick links
    submissions/
      contact/page.tsx        server — wrapped in Suspense + SkeletonTable fallback
      prayers/page.tsx
      food-bank/page.tsx
    users/
      page.tsx                super_admin only
      new/page.tsx
      [id]/page.tsx
    audit-log/page.tsx        super_admin only

components/admin/
  AdminShell.tsx              'use client' — sidebar state, wraps Sidebar + Topbar + ToastProvider
  Sidebar.tsx                 nav links; super_admin-only items gated by role prop
  Topbar.tsx                  'use client' — user avatar, RoleBadge, sign-out via supabase.auth.signOut()
  SubmissionsTable.tsx        'use client' — reusable table for all submission types (see below)
  SlideOver.tsx               'use client' — right-side detail panel
  StatusBadge.tsx             pure display — coloured pill per status value
  RoleBadge.tsx               pure display — role label pill
  Skeleton.tsx                SkeletonBlock / SkeletonStatCard / SkeletonTable — animate-pulse placeholders
  Toast.tsx                   useToast hook + ToastProvider — success / error / info variants, auto-dismiss 4 s

### Loading buttons

All async-action buttons show a spinner while in-flight. Use `Spinner` from `components/ui/Spinner.tsx` — it inherits `currentColor` so it matches white text on purple buttons automatically.

```tsx
import Spinner from '@/components/ui/Spinner'

<button disabled={loading} ...>
  {loading ? (
    <span className="flex items-center justify-center gap-2"><Spinner />Label…</span>
  ) : 'Label'}
</button>
```

Never replace a spinner with a text-only loading state (e.g. `'Saving…'` alone). The `disabled` attribute must be set while loading to prevent double-submission.
```

### Visual language

The admin uses a **light, whitespace-heavy** design — deliberately opposite to the dark marketing site.

| Token | Value | Usage |
|-------|-------|-------|
| Page background | `#f8fafc` | `style={{ background: '#f8fafc' }}` on the shell wrapper |
| Card / panel background | `#ffffff` | All cards, table, slide-over |
| Card border | `border-gray-100` | Consistent 1 px separator |
| Card shadow | `shadow-sm` | Subtle depth on cards |
| Primary accent | `#93328f` | Active nav, primary buttons, active status badge, focus ring |
| Gold accent | `#C9A227` | Page eyebrow labels, sidebar bottom bar, gold top accent on login card |
| Body text | `text-gray-900` / `text-gray-700` | Headings / body |
| Muted text | `text-gray-400` / `text-gray-500` | Labels, metadata |
| Danger | `text-red-600` / `bg-red-50` | Sign-out, error states |
| Warning confirm | `bg-amber-50 border-amber-200` | Destructive action confirm step |
| Info confirm | `bg-blue-50 border-blue-200` | Significant (non-destructive) confirm step |

**Active sidebar item:** `text-[#93328f] bg-purple-50 border-l-[3px] border-[#93328f]`

**Typography scale (admin):** labels `text-[10px]–text-[11px]` uppercase tracking-wider; body `text-[13px]–text-[14px]`; stat numbers `text-[28px] font-bold`; page headings `text-[28px] font-bold text-gray-900` with a gold eyebrow above.

### Auth & roles

- Supabase Auth owns credentials. Our `public.users` table owns profile + role.
- Three roles: `super_admin`, `admin`, `member`.
- Role permissions stored as JSONB in `roles.permissions`.
- `super_admin`-only routes: Users, Audit Log. Gate with role check in layout/API route.
- API routes check the session via `createClient()` from `lib/supabase/server.ts`, then call `getUserById()` to get the role.

### Database commands

```bash
npm run db:push       # push schema to Supabase (uses Session pooler, port 5432)
npm run db:generate   # generate migration files
npm run db:migrate    # run migrations
npm run db:seed       # create roles + initial super admin (uses Supabase REST API, no direct TCP)
npm run db:studio     # Drizzle Studio GUI
```

`DATABASE_URL` for the app → Transaction pooler, port **6543**, `{ prepare: false, ssl: 'require' }`.  
`DATABASE_URL` for drizzle-kit CLI → Session pooler, port **5432** (or same 6543 URL works too).  
Both in `.env.local` (takes priority over `.env`). `@` in password must be URL-encoded as `%40`.

### `SubmissionsTable` — reusable pattern

Single `'use client'` component used by all three submission pages. Server pages pre-process data (format dates, combine fields, map enum labels) then pass plain serialisable props — **never pass render functions across the server/client boundary**.

Key props:

| Prop | Purpose |
|------|---------|
| `columns` | `{ key, label, badge?, mono?, muted? }` — `badge` renders StatusBadge, `mono` monospace ref code style, `muted` truncated grey text |
| `statCards` | `{ label, statusValue?, sub? }` — counts computed live from local row state; `statusValue` omitted = total |
| `statusActions` | Available status transitions shown as buttons |
| `confirmActions` | `{ value, message, warning? }` — actions that require inline confirmation before firing |
| `terminalStatuses` | Status values that lock the record (buttons replaced with a message) |
| `detailFields` | Fields rendered in the slide-over detail panel |
| `reply` | Enables the reply textarea + send button in the slide-over |

**Optimistic updates:** status changes update both the table row and stat card counts immediately; roll back on API failure.

### Slide-over detail pattern

- Clicking any table row opens a right-side `SlideOver` panel — **never navigate to a new page** for record detail.
- The slide-over shows detail fields, an inline status-update section, and (for contact/prayer) a reply panel.
- Confirmation step: for significant/destructive actions, clicking the button swaps the button row for an inline confirm UI (message + "Yes, confirm" / "Go back"). Confirm fires the API; Go back restores buttons. No separate modal.
- Opening a different row clears any pending confirmation.
- Terminal statuses show a lock message instead of buttons.

### Skeleton loaders

Every data-fetching server component is wrapped in `<Suspense fallback={<SkeletonTable />}>`. Match skeleton shape to the real content (same column count, same card grid). Use `SkeletonStatCard` for stat strips and `SkeletonTable` for data tables.

### Toast notifications

Use the `useToast()` hook (available inside `ToastProvider` which is mounted in `AdminShell`). Variants: `'success'` (green), `'error'` (red), `'info'` (purple). Auto-dismiss after 4 s. Use for all async action outcomes (status update success/failure, reply sent, user created).

### Adding new admin pages

1. Create `app/(admin)/admin/<slug>/page.tsx`.
2. Wrap data-fetching in a `<Suspense>` boundary with an appropriate skeleton fallback.
3. Check role in the page or layout if the page is super-admin-only.
4. Do **not** add to `app/sitemap.ts`.
5. Add nav link to `components/admin/Sidebar.tsx` with the correct role gate.

## Responsive breakpoints

| Name | Width | Notes |
|------|-------|-------|
| xs | 375px | Small phones |
| sm | 640px | Large phones |
| md | 768px | Tablets — mobile nav kicks in at `<md` |
| lg | 1024px | Small laptops |
| xl | 1280px | Max content width (`max-w-[1280px]`) |
| 2xl | 1536px | — |

Mobile-first: write base styles for mobile, override at larger breakpoints.
