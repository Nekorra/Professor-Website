# Houman Homayoun — Academic Portfolio

A production-grade academic portfolio and lightweight CMS for **Prof. Houman Homayoun**, Professor of Electrical and Computer Engineering at the University of California, Davis, and Director of the NSF Center for Hardware and Embedded Systems Security and Trust (CHEST).

The site presents research, publications, awards, students, teaching, and consulting credentials through a cinematic public interface, with an authenticated admin dashboard for content maintenance. All live content is served from **Firebase Realtime Database** and **Firebase Storage**; the Angular frontend is a static SPA deployed to GitHub Pages and Firebase Hosting.

---

## Live deployment

| Surface | URL | Role |
|---------|-----|------|
| **Production (custom domain)** | [houman.ece.ucdavis.edu](https://houman.ece.ucdavis.edu/) | Primary public site (GitHub Pages → `gh-pages`) |
| **Firebase Hosting mirror** | [professor-website.web.app](https://professor-website.web.app/) | Alternate static host + security headers |
| **Firebase backend** | `professor-website` project | Realtime Database, Auth, Storage |

Pushes to `main` trigger an automatic production build and GitHub Pages deploy via GitHub Actions (see [CI/CD](#cicd)). Firebase Hosting and security rules are updated separately when needed.

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│  Browser (Angular 13 SPA)                                       │
│  ├─ Public routes: home, awards, publications, research, …      │
│  └─ Admin: /login → /dashboard (AuthGuard + Firebase Auth)      │
└───────────────────────────┬─────────────────────────────────────┘
                            │ read (public) / write (authenticated)
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│  Firebase (professor-website)                                   │
│  ├─ Realtime Database  — honors, research, publications, …      │
│  ├─ Storage            — images (awards, people, sponsors)      │
│  └─ Authentication     — Email/Password admin accounts            │
│     Enforced by database.rules.json + storage.rules               │
└─────────────────────────────────────────────────────────────────┘
                            ▲
                            │ static assets (HTML/JS/CSS)
┌───────────────────────────┴─────────────────────────────────────┐
│  GitHub Pages (gh-pages)  ·  Firebase Hosting (optional mirror) │
└─────────────────────────────────────────────────────────────────┘
```

**Design principle:** the Firebase web config is public by design (it ships in the client bundle). Security is enforced server-side by Firebase Security Rules and Authentication, not by hiding credentials. See [SECURITY.md](./SECURITY.md) for the full threat model.

---

## Features

### Public site

- **Home** — cinematic hero (animated wordmark, department masthead, staged navbar reveal), about section with expandable biography, contact card, research-interest carousel, sponsored-research table, alumni grid, and course spotlight
- **Awards** — editorial list with search, metrics panel, and funded-award highlighting
- **Publications** — unified journals/conferences view with citation-style rows, year timeline, and author emphasis
- **Research** — project cards with selective ASEEC-style bolding and expandable abstracts
- **Students** — PhD, MS, postdoc, and undergraduate listings with normalized name parsing
- **CV** — consulting engagements sidebar with downloadable CV and contact details
- **EEC 179** — course page with syllabus metadata

### Admin dashboard

Authenticated CRUD (via Material dialogs) for all Firebase-backed collections: awards, research projects, journal/conference publications, sponsored research, and people/students. Route guard on `/dashboard`; writes validated by RTDB rules.

### Design system

- Token-driven styling in `src/styles/design-tokens.css` (navy + gold palette, typography scale, motion curves)
- Shared shell: `src/app/shared/site-layout/` — scroll-aware transparent header on home, solid elsewhere, UC Davis ECE logo, responsive nav
- Scroll-reveal directive (`src/app/shared/reveal.directive.ts`) for section entrance animations
- Respects `prefers-reduced-motion` across hero, navbar, and bio-expand interactions

---

## Tech stack

| Layer | Technology |
|-------|------------|
| Framework | Angular 13, TypeScript 4.6, RxJS 6 |
| Backend | Firebase Realtime Database, Auth, Storage (`@angular/fire` compat) |
| UI | Angular Material, Bootstrap 5 utilities, custom CSS design tokens |
| Build | Angular CLI 13, `scripts/generate-env.js` for environment injection |
| CI/CD | GitHub Actions → `gh-pages` branch |
| Hosting | GitHub Pages (production), Firebase Hosting (mirror) |

---

## Prerequisites

- **Node.js 18** (matches CI; LTS recommended)
- **npm**
- **Firebase CLI** (via `npx firebase-tools` — no global install required)
- A Firebase project with Realtime Database, Authentication (Email/Password), and Storage enabled

---

## Local development

```bash
git clone https://github.com/Nekorra/Professor-Website.git
cd Professor-Website
npm install --legacy-peer-deps
cp .env.example .env
```

Fill `.env` with values from **Firebase Console → Project settings → Your apps** (`professor-website` project). Then:

```bash
npm start
```

Open [http://localhost:4200](http://localhost:4200).

- Admin login: [http://localhost:4200/login](http://localhost:4200/login) → `/dashboard`
- Admin accounts are created manually in Firebase Console (Authentication → Email/Password). There is no public signup.

`npm start` and `npm run build` automatically run `scripts/generate-env.js`, which reads `.env` and writes `src/environments/environment*.ts`. **Never commit `.env`** — it is gitignored.

### Environment variables

| Variable | Purpose |
|----------|---------|
| `FIREBASE_API_KEY` | Firebase web app identifier |
| `FIREBASE_AUTH_DOMAIN` | Auth domain |
| `FIREBASE_DATABASE_URL` | Realtime Database URL |
| `FIREBASE_PROJECT_ID` | Project ID (`professor-website`) |
| `FIREBASE_STORAGE_BUCKET` | Storage bucket |
| `FIREBASE_MESSAGING_SENDER_ID` | Messaging sender ID |
| `FIREBASE_APP_ID` | App ID |
| `FIREBASE_MEASUREMENT_ID` | Google Analytics measurement ID |

---

## CI/CD

Workflow: [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml)

On every push to `main`:

1. Checkout, install dependencies (`npm install --legacy-peer-deps`)
2. Reconstruct `.env` from GitHub Actions Secrets
3. Production build (`npm run build:prod -- --base-href /`)
4. Publish `dist/Houman-Homayoun-Website` to the `gh-pages` branch with CNAME `houman.ece.ucdavis.edu`

### Required GitHub Secrets

Configure under **Settings → Secrets and variables → Actions**:

`FIREBASE_API_KEY`, `FIREBASE_AUTH_DOMAIN`, `FIREBASE_DATABASE_URL`, `FIREBASE_PROJECT_ID`, `FIREBASE_STORAGE_BUCKET`, `FIREBASE_MESSAGING_SENDER_ID`, `FIREBASE_APP_ID`, `FIREBASE_MEASUREMENT_ID`

### GitHub Pages (one-time setup)

- **Settings → Pages → Source:** Deploy from branch `gh-pages` / `(root)`
- **Custom domain:** `houman.ece.ucdavis.edu` (the workflow rewrites `CNAME` on each deploy)

---

## Manual deployment

Automatic CI handles the primary site. Use these when you need to deploy outside the CI pipeline:

```bash
# GitHub Pages (same output as CI)
npm run deploy:github

# Firebase Hosting mirror (includes CSP / HSTS headers from firebase.json)
npm run deploy:firebase

# Firebase security rules only (RTDB + Storage)
npm run deploy:rules
```

Firebase Hosting also sets long-cache headers on hashed assets and `no-cache` on `index.html` for safe SPA updates.

---

## Security

| Control | Location | Behavior |
|---------|----------|----------|
| RTDB rules | `database.rules.json` | Public read; authenticated write with per-field schema validation |
| Storage rules | `storage.rules` | Public read; authenticated image uploads (≤ 5 MB, `image/*` only) |
| Route guard | `src/app/guards/auth.guard.ts` | Client-side UX gate on `/dashboard` |
| CSP / HSTS | `firebase.json` headers | Applied on Firebase Hosting deploy |

Full security documentation: **[SECURITY.md](./SECURITY.md)**

---

## Content model (Firebase RTDB)

| Path | Type | Public page |
|------|------|-------------|
| `honors/awards` | `Award[]` | Awards |
| `research/research` | `ResearchItem[]` | Research |
| `journals/journals` | `Journal[]` | Publications |
| `publications/conferences` | `Conference[]` | Publications |
| `funding/funds` | `Fund[]` | Home (sponsored research) |
| `funding` | `FundingSummary` | Home (total funding) |
| `people/{category}` | `Person[]` or `string[]` | Students, Home (alumni) |

TypeScript interfaces and path constants: `src/app/models/content.models.ts`  
People normalization (handles string-only undergrad entries): `src/app/utils/people-parser.ts`  
Data access layer: `src/app/services/database.service.ts`

---

## Project structure

```
Professor-Website/
├── .github/workflows/deploy.yml   # CI: build + gh-pages publish
├── database.rules.json            # RTDB security rules
├── storage.rules                  # Storage security rules
├── firebase.json                  # Hosting config + response headers
├── scripts/generate-env.js        # .env → environment.ts generator
├── src/
│   ├── app/
│   │   ├── shared/
│   │   │   ├── site-layout/       # Global header, footer, nav shell
│   │   │   ├── reveal.directive.ts
│   │   │   └── shared.module.ts
│   │   ├── models/content.models.ts
│   │   ├── services/database.service.ts
│   │   ├── utils/people-parser.ts
│   │   ├── guards/auth.guard.ts
│   │   ├── modals/                # Admin CRUD dialogs
│   │   ├── home/                  # Landing page + hero
│   │   ├── awards/
│   │   ├── publications/
│   │   ├── research/
│   │   ├── students/
│   │   ├── cv/
│   │   ├── eec170/
│   │   ├── login/
│   │   └── dashboard/
│   ├── styles/
│   │   ├── design-tokens.css      # CSS custom properties
│   │   └── styles.css             # Global base styles
│   └── environments/              # Generated — do not edit manually
└── dist/                          # Build output (gitignored)
```

---

## Scripts reference

| Command | Description |
|---------|-------------|
| `npm start` | Dev server at `:4200` (runs `env` pre-hook) |
| `npm run build` | Development build |
| `npm run build:prod` | Production build with AOT and hashing |
| `npm run deploy:github` | Build + publish to `gh-pages` |
| `npm run deploy:firebase` | Build + Firebase Hosting deploy |
| `npm run deploy:rules` | Deploy RTDB + Storage rules only |
| `npm run lint` | TSLint |

---

## Contributors

| Name | GitHub | Focus |
|------|--------|-------|
| Abhinav Srinivas | [@Nekorra](https://github.com/Nekorra) | Backend, dashboard, Firebase integration |
| Shaurya Srivastav | [@Shaurya-Srivastav](https://github.com/Shaurya-Srivastav) | Frontend, UI/UX redesign, CI/CD, security hardening |

---

## License

Private repository. Content © Houman Homayoun. All rights reserved.
