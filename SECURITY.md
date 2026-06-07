# Security Policy

This document describes the security model for the Professor Website
(Prof. Houman Homayoun, UC Davis ECE) — an Angular 13 SPA backed by Firebase
(Realtime Database, Authentication, Storage) and served at
<https://houman.ece.ucdavis.edu/>.

## Reporting a vulnerability

Please report suspected vulnerabilities privately to the repository maintainers
(see `README.md` contributors) rather than opening a public issue. Include steps
to reproduce and the potential impact.

## Authentication model

- Public pages (home, awards, publications, research, students, CV, course
  pages) are read-only and require **no authentication**.
- The admin **`/dashboard`** route performs authenticated CRUD on all content.
  It is gated by an Angular route guard (`src/app/guards/auth.guard.ts`)
  registered as `canActivate: [AuthGuard]` on the `/dashboard` route in
  `src/app/app-routing.module.ts`.
- The guard checks `AngularFireAuth.authState`. Unauthenticated users are
  redirected to `/login` with a `returnUrl` query param.
- Admin accounts are provisioned manually in the Firebase Console
  (Authentication → Email/Password). There is no public self-service signup.

> **Important:** The route guard is a *UX* control — it prevents the dashboard
> UI from rendering for anonymous users, but it is enforced client-side only.
> The real security boundary is the Firebase **security rules** (below), which
> are enforced server-side on every read/write regardless of the client.

## Data exposure: the Firebase web config is public by design

The Firebase web configuration (`apiKey`, `authDomain`, `projectId`,
`databaseURL`, `storageBucket`, `messagingSenderId`, `appId`,
`measurementId`) ships inside the compiled client bundle and is **inherently
public**. This is expected and documented by Google: the "API key" is an
application identifier, not a secret, and grants no privileged access on its
own. See <https://firebase.google.com/docs/projects/api-keys>.

Security is therefore **not** provided by hiding the config. It is enforced by:

1. **Firebase Security Rules** (RTDB + Storage) — server-side authorization.
2. **Firebase Authentication** — identity for write operations.
3. Optionally, **API key restrictions** and **App Check** in the Google Cloud /
   Firebase Console (recommended hardening, see below).

To keep the config out of source control we generate it at build time:
`scripts/generate-env.js` reads a local/CI `.env` and writes
`src/environments/environment*.ts`. `.env` is gitignored; in CI it is
reconstructed from GitHub Actions Secrets (see `.github/workflows/deploy.yml`).

## How the security rules work

### Realtime Database — `database.rules.json`

The rule set follows **public read / authenticated write with schema
validation**:

- Content collections (`honors`, `research`, `journals`, `publications`,
  `funding`, `people`) are world-readable (`".read": true`) — appropriate for a
  public portfolio.
- Writes require an authenticated user (`".write": "auth != null"`).
- Each record has a `.validate` rule enforcing required fields and string/number
  types, which constrains what an authenticated admin can write and blocks
  malformed payloads.

### Storage — `storage.rules`

- Public read of all objects (`allow read: if true`) — needed to serve images on
  public pages.
- Writes require authentication, cap object size at **5 MB**, and require an
  `image/*` content type:
  ```
  allow write: if request.auth != null
               && request.resource.size < 5 * 1024 * 1024
               && request.resource.contentType.matches('image/.*');
  ```

Both rule files are referenced by `firebase.json` and deployed with
`npm run deploy:rules` (`firebase deploy --only database,storage`).

## HTTP response hardening (Firebase Hosting)

`firebase.json` applies security response headers to all routes on Firebase
Hosting: HSTS (with `includeSubDomains; preload`), `X-Content-Type-Options:
nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy:
strict-origin-when-cross-origin`, a `Permissions-Policy` disabling
camera/microphone/geolocation, and a Content-Security-Policy scoped to `self`
plus the Firebase, Google Analytics, and Google Fonts origins the app actually
uses. Hashed assets get a 1-year immutable cache; `index.html` is served
`no-cache` so deployments take effect immediately.

> Note: The live UC Davis site is served from **GitHub Pages**, which does not
> honor `firebase.json` headers. These headers apply to the Firebase Hosting
> deployment (`professor-website.web.app`). For equivalent hardening on the
> GitHub Pages domain, headers must be set at the UC Davis edge/CDN or the site
> migrated to Firebase Hosting. CSP can additionally be enforced via a
> `<meta http-equiv="Content-Security-Policy">` tag if needed.

## Incident response & credential rotation

- **Rotate the previously committed Firebase API key.** An API key for the
  `professor-website` project was present in earlier git history. While Firebase
  web API keys are not secrets, rotating it is good hygiene after any exposure:
  in the **Google Cloud Console → APIs & Services → Credentials**, create a new
  browser key (with HTTP referrer restrictions for `houman.ece.ucdavis.edu` and
  the Firebase Hosting domains), update the GitHub Actions `FIREBASE_API_KEY`
  Secret, redeploy, then delete the old key. Note that git history rewriting is
  not required since the value is non-secret, but the key should still be
  restricted by referrer.
- **Recommended additional hardening:**
  - Add **HTTP referrer restrictions** to the browser API key.
  - Enable **Firebase App Check** to reject requests from non-authentic clients.
  - Periodically audit Authentication users and remove stale admin accounts.
  - Keep `.env` out of commits (enforced by `.gitignore`).
