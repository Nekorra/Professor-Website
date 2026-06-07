# Professor Website

Academic portfolio and content management site for **Prof. Houman Homayoun** (UC Davis ECE).

Built with **Angular 13**, **Firebase** (Realtime Database, Auth, Storage), and **Firebase Hosting**.

## Features

- Public portfolio: home, awards, publications, research, students, CV, course pages
- Admin dashboard with authenticated CRUD for all content
- Minimal, professional UI with shared layout and design tokens
- Firebase security rules for read-only public access and authenticated writes

## Prerequisites

- Node.js 18+ (LTS recommended)
- npm
- Firebase CLI (`npm install -g firebase-tools`)
- Firebase project with Realtime Database, Authentication, and Storage enabled

## Setup

```bash
git clone https://github.com/Nekorra/Professor-Website.git
cd Professor-Website
npm install --legacy-peer-deps
cp .env.example .env   # fill in Firebase values from Firebase Console
```

`npm start` and `npm run build` automatically run `scripts/generate-env.js`, which reads `.env` and generates `src/environments/environment*.ts`. **Do not commit `.env`** — it is gitignored.

Create an admin user in Firebase Authentication (Email/Password) for dashboard access.

## Development

```bash
npm start
```

Open [http://localhost:4200](http://localhost:4200).

Admin dashboard: [http://localhost:4200/login](http://localhost:4200/login) → `/dashboard`

## Hosting architecture

| URL | Host | Purpose |
|-----|------|---------|
| [houman.ece.ucdavis.edu](https://houman.ece.ucdavis.edu/) | **GitHub Pages** (`nekorra.github.io`) | Production site (custom UC Davis domain) |
| [professor-website.web.app](https://professor-website.web.app) | **Firebase Hosting** | Alternate deploy (last updated 2023) |
| Firebase RTDB / Auth / Storage | **Firebase** (`professor-website`) | Live backend for all content |

**Pushing to GitHub `main` alone does not update the live site.** You must build and publish to the `gh-pages` branch:

```bash
npm run deploy:github
```

Or deploy to Firebase Hosting instead:

```bash
npm run deploy:firebase
```

## Deploy security rules

```bash
npm run deploy:rules
```

## Security

- **RTDB rules** (`database.rules.json`): public read, authenticated write with schema validation
- **Storage rules** (`storage.rules`): public read, authenticated image uploads (max 5MB)
- **Auth guard** protects `/dashboard`
- Do not commit `.env` or real credentials to git

## Project structure

```
src/app/
  shared/site-layout/   # Global nav + footer shell
  models/               # TypeScript interfaces + Firebase paths
  utils/people-parser.ts
  services/database.service.ts
  modals/               # Admin CRUD dialogs
  [pages]/              # Public + admin views
src/styles/
  design-tokens.css     # CSS custom properties
```

## Contributors

- Abhinav Srinivas ([@Nekorra](https://github.com/Nekorra)) — backend, dashboard, Firebase
- Shaurya Srivastav ([@Shaurya-Srivastav](https://github.com/Shaurya-Srivastav)) — frontend, UI, responsive design
