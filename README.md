# Calendário Brasileiro

Brazilian holidays calendar and planning tools for [calendario-feriados.com.br](https://calendario-feriados.com.br).

Browse national and regional holidays, commemorative dates, and cultural context for Brazil — with calculators for business days, vacation planning, printable calendars, and iCal export.

## Features

- Interactive calendar (month, list, and year views)
- National holidays with guides, FAQs, and cultural context
- State and city regional holidays
- Tools: business-day calculator, deadline calculator, vacation planner, printable calendar, iCal/export, embeddable widget
- SEO-oriented static prerender and structured data
- Public holiday JSON API under `/api/feriados/`

## Stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- [Vitest](https://vitest.dev/) + [Playwright](https://playwright.dev/)
- Deployed on [Vercel](https://vercel.com/)

## Getting started

Requirements: Node.js 20+ and npm.

```sh
git clone https://github.com/jegueson/brazil-dates.git
cd brazil-dates
npm install
cp .env.example .env
npm run dev
```

The app runs at [http://localhost:8080](http://localhost:8080).

### Environment variables

Copy `.env.example` and set values per environment:

| Variable | Description |
| --- | --- |
| `VITE_PUBLIC_APP_ENV` | `development`, `preview`, or `production` |
| `VITE_SITE_URL` | Public site URL for the active environment |
| `VITE_WEB3FORMS_ACCESS_KEY` | Optional; enables the contact form via [Web3Forms](https://web3forms.com) |

Use the same variable names across Development, Preview, and Production in Vercel; assign values per environment.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Generate sitemap/API data, build, and prerender routes |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript checks |
| `npm run test:unit` | Run Vitest unit tests with coverage |
| `npm run test:e2e` | Run Playwright end-to-end smoke tests |
| `npm run ci` | Lint, typecheck, unit tests, and build |

## CI/CD

Trunk-based workflow: pull requests merge into `main`.

### Local quality checks

```sh
npm run lint
npm run typecheck
npm run test:unit
npm run build
```

End-to-end smoke:

```sh
npm run test:e2e
```

### Pipeline expectations

- PRs to `main` must pass lint, typecheck, unit tests, build, and preview smoke E2E checks
- Protect `main` with required status checks, at least one approving review, and blocked direct pushes
- Merges to `main` deploy to Vercel Production

Required GitHub checks:

- `CI / quality-gate`
- `Preview E2E Smoke / smoke-preview`

### Vercel setup

1. Import this repository into Vercel.
2. Set Production branch to `main` and enable preview deployments for pull requests.
3. Add environment variables in Development, Preview, and Production scopes.
4. Point the production domain at the Vercel project (or use the Vercel hostname for previews).

### Production rollback

1. Open the Vercel project → **Deployments**.
2. Find the last healthy production deployment.
3. Promote/redeploy it to production.
4. Confirm `Post Deploy Smoke / smoke-production` passes.
5. Open a follow-up issue with root cause and prevention steps.

### Release checklist

- [ ] `npm run ci` passes locally
- [ ] PR checks are green (`CI`, `Preview E2E Smoke`)
- [ ] Vercel production deployment succeeded
- [ ] Post-deploy smoke passed on the production URL
- [ ] Previous healthy deployment identified as rollback candidate

## Project docs

| Doc | Topic |
| --- | --- |
| [`DESIGN_RULES.md`](./DESIGN_RULES.md) | UI/design conventions |
| [`REGIONAL_FEATURES.md`](./REGIONAL_FEATURES.md) | Regional holiday coverage |
| [`SEO_BRAZIL_OPTIMIZATION.md`](./SEO_BRAZIL_OPTIMIZATION.md) | SEO strategy |
| [`GTM_SETUP.md`](./GTM_SETUP.md) | Google Tag Manager |
| [`CPANEL_DEPLOYMENT.md`](./CPANEL_DEPLOYMENT.md) | Alternate cPanel hosting notes |
| [`docs/`](./docs/) | Search Console, AdSense, backlinks |

## License

Private repository. All rights reserved.
