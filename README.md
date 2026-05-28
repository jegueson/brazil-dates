# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/c5159548-a130-45dc-86e5-90fc3e3d9162

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/c5159548-a130-45dc-86e5-90fc3e3d9162) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/c5159548-a130-45dc-86e5-90fc3e3d9162) and click on Share -> Publish.

## GitHub + Vercel CI/CD

This project uses a trunk-based workflow with pull requests into `main`.

### Local quality checks

Run these commands before opening a PR:

```sh
npm run lint
npm run typecheck
npm run test:unit
npm run build
```

For end-to-end smoke checks:

```sh
npm run test:e2e
```

### CI expectations

- Pipeline validation PRs exercise the full GitHub Actions and Vercel preview flow before merging.
- Pull requests to `main` must pass lint, typecheck, unit tests, build, and preview smoke E2E checks.
- `main` should be protected in GitHub with:
  - required status checks
  - at least one approving review
  - blocked direct pushes
- Merges to `main` are deployed to Vercel Production.

### Environment variable strategy

Use the same variable names across all tiers and assign values per Vercel environment:

- `Development` for local and development previews
- `Preview` for pull request deployments
- `Production` for live traffic

Use `.env.example` as the contract for required public variables:

- `VITE_PUBLIC_APP_ENV` (`development`, `preview`, `production`)
- `VITE_SITE_URL` (public app URL for the active environment)

### Vercel project setup checklist

1. Import this GitHub repository into Vercel.
2. Configure:
   - Production branch: `main`
   - Automatic preview deployments for pull requests
3. Add environment variables in all three scopes (`Development`, `Preview`, `Production`).
4. In GitHub branch protection for `main`, mark required checks:
   - `CI / quality-gate`
   - `Preview E2E Smoke / smoke-preview`
5. Allow merge only after required checks pass.

### Production rollback runbook (Vercel)

1. Open the Vercel project dashboard and go to `Deployments`.
2. Locate the last known healthy production deployment.
3. Promote/redeploy that deployment to production.
4. Confirm `Post Deploy Smoke / smoke-production` passes.
5. Create a follow-up GitHub issue with root cause and prevention action.

### Release checklist

- `npm run ci` passes locally.
- PR checks are green (`CI`, `Preview E2E Smoke`).
- Vercel production deployment completed successfully.
- Post-deploy smoke test passed on production URL.
- Rollback candidate (previous healthy deployment) is identified.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
